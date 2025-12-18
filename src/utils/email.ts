/**
 * Email Utility for Resend API - Fully Integrated
 * 
 * INTEGRATED SETUP:
 * ================
 * This utility is fully configured to work with the Resend API through a serverless function.
 * 
 * DEPLOYMENT ARCHITECTURE:
 * -----------------------
 * 1. Frontend (GitHub Pages): Hosts the static website
 * 2. API Function (Vercel): Handles email sending via Resend API
 * 
 * CONFIGURATION:
 * -------------
 * - Frontend: Automatically uses the Vercel endpoint (configured below)
 * - API Function: Reads RESEND_API_KEY from Vercel environment variables
 * - Override: Set VITE_EMAIL_API_ENDPOINT to use a custom endpoint
 * 
 * MODES:
 * ------
 * - Development: Logs email data to console (no actual sending)
 * - Production: Sends real emails via Vercel serverless function + Resend API
 * 
 * ENVIRONMENT VARIABLES:
 * ---------------------
 * - RESEND_API_KEY: Set in Vercel dashboard (required for production)
 * - VITE_EMAIL_API_ENDPOINT: Optional override for API endpoint URL
 */

// Configuration
// Default to Vercel deployment URL if not explicitly set
const DEFAULT_ENDPOINT = 'https://leadlabs-fix.vercel.app/api/send-email';
const SERVERLESS_ENDPOINT_URL = import.meta.env.VITE_EMAIL_API_ENDPOINT || DEFAULT_ENDPOINT;
const IS_DEVELOPMENT = import.meta.env.DEV;

export interface EmailData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  hasWebsite: string;
  websiteUrl?: string;
  notes?: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Send email using Resend API via serverless endpoint
 * 
 * In development mode, this will log the email data to console
 * In production mode, this will call the configured serverless endpoint
 */
export async function sendEmail(data: EmailData): Promise<EmailResponse> {
  // Development mode: Mock email sending
  if (IS_DEVELOPMENT) {
    console.log('📧 Development Mode: Email would be sent with data:', data);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: 'Email logged to console (development mode)',
    };
  }

  // Production mode: Call serverless endpoint
  if (!SERVERLESS_ENDPOINT_URL) {
    console.error('❌ No serverless endpoint configured for email sending');
    return {
      success: false,
      message: 'Email service not configured',
      error: 'Please configure VITE_EMAIL_API_ENDPOINT environment variable',
    };
  }

  try {
    const response = await fetch(SERVERLESS_ENDPOINT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'hello@leadlabs.co.za', // Your business email
        from: 'noreply@leadlabs.co.za', // Must be verified in Resend
        subject: `New Lead: ${data.businessName}`,
        replyTo: data.email,
        html: generateEmailHTML(data),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}`);
    }

    const result = await response.json();
    
    return {
      success: true,
      message: 'Email sent successfully',
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    
    return {
      success: false,
      message: 'Failed to send email. Please try again or contact us directly.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Generate HTML email template
 */
function generateEmailHTML(data: EmailData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { background: #f9fafb; padding: 30px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1f2937; }
          .value { color: #4b5563; margin-top: 5px; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Lead from LeadLabs Website</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Business Name:</div>
              <div class="value">${escapeHtml(data.businessName)}</div>
            </div>
            
            <div class="field">
              <div class="label">Contact Name:</div>
              <div class="value">${escapeHtml(data.contactName)}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
            </div>
            
            <div class="field">
              <div class="label">Has Existing Website:</div>
              <div class="value">${data.hasWebsite === 'yes' ? 'Yes' : 'No'}</div>
            </div>
            
            ${data.websiteUrl ? `
              <div class="field">
                <div class="label">Website URL:</div>
                <div class="value"><a href="${escapeHtml(data.websiteUrl)}">${escapeHtml(data.websiteUrl)}</a></div>
              </div>
            ` : ''}
            
            ${data.notes ? `
              <div class="field">
                <div class="label">Additional Notes:</div>
                <div class="value">${escapeHtml(data.notes)}</div>
              </div>
            ` : ''}
          </div>
          <div class="footer">
            <p>This email was sent from the LeadLabs contact form</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
