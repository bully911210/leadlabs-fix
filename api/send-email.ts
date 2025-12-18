/**
 * Serverless Function for Sending Emails via Resend API
 * 
 * This is a reference implementation for Vercel Edge Functions.
 * You can adapt this for other serverless platforms.
 * 
 * DEPLOYMENT INSTRUCTIONS:
 * ========================
 * 
 * FOR VERCEL:
 * -----------
 * 1. Install Vercel CLI: npm i -g vercel
 * 2. Run: vercel
 * 3. Follow prompts to link to your project
 * 4. Set environment variable: vercel env add RESEND_API_KEY
 * 5. Deploy: vercel --prod
 * 6. Update VITE_EMAIL_API_ENDPOINT in your .env.production file
 * 
 * FOR NETLIFY:
 * ------------
 * 1. Move this file to /netlify/functions/send-email.ts
 * 2. Install Netlify CLI: npm i -g netlify-cli
 * 3. Run: netlify deploy
 * 4. Set environment variable in Netlify dashboard
 * 5. Update VITE_EMAIL_API_ENDPOINT in your .env.production file
 * 
 * ENVIRONMENT VARIABLES REQUIRED:
 * -------------------------------
 * RESEND_API_KEY - Your Resend API key from resend.com
 * 
 * CORS SETUP:
 * -----------
 * Make sure to configure CORS headers to allow requests from your GitHub Pages domain
 */

import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  // CORS headers - Allow requests from GitHub Pages domain
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Allow all origins for flexibility, or specify: 'https://bully911210.github.io'
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405,
        headers
      }
    );
  }

  try {
    // Parse request body
    const body = await req.json();
    const { to, from, subject, replyTo, html } = body;

    // Validate required fields
    if (!to || !from || !subject || !html) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers }
      );
    }

    // Validate Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable not set');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers }
      );
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: from,
      to: to,
      subject: subject,
      html: html,
      replyTo: replyTo,
    });

    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true,
        id: data.id,
        message: 'Email sent successfully' 
      }),
      { status: 200, headers }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers }
    );
  }
}
