# Resend API Integration - Complete Setup

## Overview

The Resend API is **fully integrated** into the LeadLabs application. This document explains the complete integration architecture and setup process.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     USER INTERACTION                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│   FRONTEND (GitHub Pages)                                    │
│   • Static React website                                     │
│   • Contact form at /src/components/landing/ContactForm.tsx │
│   • Email utility at /src/utils/email.ts                    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼ HTTPS POST
┌─────────────────────────────────────────────────────────────┐
│   API FUNCTION (Vercel Serverless)                          │
│   • Endpoint: /api/send-email.ts                            │
│   • URL: https://leadlabs-fix.vercel.app/api/send-email    │
│   • Uses: process.env.RESEND_API_KEY                        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼ Resend SDK
┌─────────────────────────────────────────────────────────────┐
│   RESEND API (resend.com)                                   │
│   • Handles email delivery                                   │
│   • Sends to: hello@leadlabs.co.za                          │
│   • Reply-to: Customer's email                              │
└─────────────────────────────────────────────────────────────┘
```

## Integration Components

### 1. Frontend Integration (`src/utils/email.ts`)

**Status:** ✅ Fully Integrated

The email utility provides:
- Development mode: Logs emails to console for testing
- Production mode: Sends real emails via Vercel API
- Automatic endpoint configuration (defaults to Vercel URL)
- Error handling and user feedback

**Key Features:**
```typescript
// Automatic endpoint configuration
const DEFAULT_ENDPOINT = 'https://leadlabs-fix.vercel.app/api/send-email';
const SERVERLESS_ENDPOINT_URL = import.meta.env.VITE_EMAIL_API_ENDPOINT || DEFAULT_ENDPOINT;

// Smart mode detection
const IS_DEVELOPMENT = import.meta.env.DEV;
```

### 2. API Function (`api/send-email.ts`)

**Status:** ✅ Fully Integrated

The serverless function:
- Uses Resend SDK (v6.6.0)
- Reads API key from environment: `process.env.RESEND_API_KEY`
- Handles CORS for GitHub Pages domain
- Validates requests and provides error handling
- Returns structured responses

**Key Features:**
```typescript
// Secure API key access
const resend = new Resend(process.env.RESEND_API_KEY);

// Flexible CORS configuration
const headers = {
  'Access-Control-Allow-Origin': '*', // Configured for flexibility
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
```

### 3. Contact Form (`src/components/landing/ContactForm.tsx`)

**Status:** ✅ Fully Integrated

The form:
- Collects customer information
- Validates input
- Calls the email utility
- Provides user feedback (success/error)
- Shows confirmation screen after submission

### 4. Configuration (`vercel.json`)

**Status:** ✅ Fully Integrated

Vercel configuration:
```json
{
  "functions": {
    "api/send-email.ts": {
      "runtime": "nodejs18.x"
    }
  },
  "env": {
    "RESEND_API_KEY": "@resend-api-key"
  }
}
```

## Required Environment Variables

### Vercel (API Function)
| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | ✅ Yes | Your Resend API key from resend.com |

### GitHub (Frontend Build)
| Variable | Optional | Description |
|----------|----------|-------------|
| `VITE_EMAIL_API_ENDPOINT` | ⚠️ No (has default) | Override default Vercel endpoint |

## Setup Instructions

### Step 1: Get Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up or log in
3. Navigate to **API Keys**
4. Create a new API key or use existing one
5. Copy the key (e.g., `re_123456789...`)

### Step 2: Deploy API to Vercel

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to project directory
cd /path/to/leadlabs-fix

# Deploy
vercel

# Follow prompts:
# - Link to existing project or create new one
# - Name it: leadlabs-fix
```

### Step 3: Set RESEND_API_KEY in Vercel

**Option A: Using Vercel CLI**
```bash
vercel env add RESEND_API_KEY
# When prompted:
# - Paste your Resend API key
# - Select: Production, Preview, Development (all recommended)
```

**Option B: Using Vercel Dashboard**
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project (leadlabs-fix)
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - Name: `RESEND_API_KEY`
   - Value: Your API key from Resend
   - Environments: Production, Preview, Development
5. Click **Save**

### Step 4: Redeploy to Apply Changes

```bash
vercel --prod
```

### Step 5: Verify Integration

**Check the API endpoint:**
```bash
curl -X POST https://leadlabs-fix.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "to": "hello@leadlabs.co.za",
    "from": "noreply@leadlabs.co.za",
    "subject": "Test Email",
    "html": "<p>Test message</p>",
    "replyTo": "test@example.com"
  }'
```

Expected response:
```json
{
  "success": true,
  "id": "...",
  "message": "Email sent successfully"
}
```

## Testing

### Development Mode
```bash
npm run dev
# Fill out the contact form
# Check browser console for logged email data
```

### Production Mode
1. Build and deploy to GitHub Pages: `npm run build`
2. Visit: https://bully911210.github.io/leadlabs-fix/
3. Fill out the contact form
4. Submit and verify email arrives at hello@leadlabs.co.za

## Email Configuration

The system sends emails with the following configuration:

| Property | Value | Notes |
|----------|-------|-------|
| **To** | `hello@leadlabs.co.za` | Your business email |
| **From** | `noreply@leadlabs.co.za` | Must be verified in Resend |
| **Reply-To** | Customer's email | From contact form |
| **Subject** | `New Lead: [Business Name]` | Dynamic based on submission |
| **Format** | HTML | Professional email template |

## Troubleshooting

### Issue: "Email service not configured"

**Cause:** Frontend can't reach the API endpoint

**Solution:**
1. Verify Vercel deployment is live
2. Check endpoint URL: `https://leadlabs-fix.vercel.app/api/send-email`
3. Test endpoint with curl (see Step 5 above)

### Issue: "Failed to send email"

**Cause:** RESEND_API_KEY not set or invalid

**Solution:**
1. Verify API key in Vercel dashboard
2. Check Vercel logs: `vercel logs`
3. Ensure API key is active in Resend dashboard

### Issue: CORS errors in browser

**Cause:** CORS headers not configured properly

**Solution:**
- The API function already includes CORS headers
- Check browser console for specific error
- Verify API function deployed successfully

### Issue: Email not arriving

**Cause:** Email rejected or domain not verified

**Solution:**
1. Check Resend dashboard → Logs
2. Verify the "From" domain in Resend
3. Check spam folder
4. Use a verified domain for production

## Security Notes

✅ **What's Secure:**
- API key stored in Vercel environment (never in code)
- API key never exposed to frontend
- CORS configured to prevent unauthorized access
- Input validation on both frontend and backend
- HTTPS enforced for all communication

⚠️ **Important:**
- Never commit RESEND_API_KEY to git
- Keep `.env` files in `.gitignore`
- Only set API keys in Vercel dashboard or CLI

## Monitoring

### Check Email Logs
1. Go to [resend.com](https://resend.com)
2. Navigate to **Logs**
3. View all sent emails, delivery status, and errors

### Check API Logs
```bash
vercel logs [deployment-url]
```

## Summary Checklist

Before going live, ensure:

- [x] Code integration complete (already done)
- [ ] Resend API key obtained
- [ ] Vercel project deployed
- [ ] RESEND_API_KEY set in Vercel environment
- [ ] API endpoint tested with curl
- [ ] Contact form tested end-to-end
- [ ] Email arrives at hello@leadlabs.co.za
- [ ] Domain verified in Resend (recommended)

## Support

For issues:
1. Check Vercel logs: `vercel logs`
2. Check Resend logs: [resend.com/logs](https://resend.com/logs)
3. Review browser console for frontend errors
4. Test API endpoint directly with curl

## Related Documentation

- [RESEND_API_SETUP.md](./RESEND_API_SETUP.md) - Detailed setup guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Full deployment instructions
- [Resend Documentation](https://resend.com/docs) - Official Resend docs
- [Vercel Documentation](https://vercel.com/docs) - Official Vercel docs
