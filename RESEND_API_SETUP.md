# Resend API Setup Instructions

## Overview

The Resend API is already implemented in the codebase. This document explains how to configure it for production use.

## Current Implementation Status

✅ **Already Implemented:**
- Resend SDK installed (version 6.6.0)
- Email utility functions in `src/utils/email.ts`
- Contact form integration in `src/components/landing/ContactForm.tsx`
- Serverless API endpoint in `api/send-email.ts`
- Vercel configuration in `vercel.json`

⚠️ **Requires Configuration:**
- Environment variable `RESEND_API_KEY` must be set in your deployment platform (Vercel/Netlify)
- Environment variable `VITE_EMAIL_API_ENDPOINT` must be set in GitHub Secrets for production builds

## How It Works

### Development Mode
When running locally (`npm run dev`), emails are **not sent**. Instead, they are logged to the browser console for testing purposes.

### Production Mode
In production, the system:
1. Frontend submits form data
2. Request goes to your serverless function endpoint (Vercel/Netlify)
3. Serverless function uses Resend API to send email
4. Email is delivered to `hello@leadlabs.co.za`

## Production Setup

### Step 1: Get Your Resend API Key

According to the problem statement, the API key is already available in the "Resend" environment under "RESEND_API_KEY".

If you need to generate a new key:
1. Go to [resend.com](https://resend.com)
2. Sign in to your account
3. Navigate to **API Keys**
4. Copy the existing `RESEND_API_KEY` or create a new one

### Step 2: Deploy Serverless Function to Vercel

The serverless function (`api/send-email.ts`) needs to be deployed separately from the static GitHub Pages site.

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from the project directory
cd /path/to/leadlabs-fix
vercel

# Follow the prompts to create/link project
```

### Step 3: Set Environment Variable in Vercel

```bash
# Set the Resend API key
vercel env add RESEND_API_KEY

# When prompted:
# - Paste your RESEND_API_KEY value
# - Select "Production" environment
# - Optionally add to Preview/Development
```

Or via Vercel Dashboard:
1. Go to your project in Vercel
2. Settings → Environment Variables
3. Add `RESEND_API_KEY` with your API key value
4. Select Production environment

### Step 4: Deploy to Production

```bash
vercel --prod
```

After deployment, Vercel will provide a URL like:
`https://your-project.vercel.app`

Your email API endpoint will be:
`https://your-project.vercel.app/api/send-email`

### Step 5: Configure GitHub Pages Build

Add the Vercel endpoint to GitHub repository secrets:

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `VITE_EMAIL_API_ENDPOINT`
5. Value: `https://your-project.vercel.app/api/send-email`
6. Click "Add secret"

### Step 6: Update CORS Settings

Edit `api/send-email.ts` and verify the CORS origin matches your GitHub Pages URL:

```typescript
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'https://bully911210.github.io', // Your GitHub Pages domain
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
```

Commit and redeploy:
```bash
git add api/send-email.ts
git commit -m "Update CORS for GitHub Pages"
git push origin main
vercel --prod
```

### Step 7: Trigger GitHub Pages Rebuild

Push a commit to trigger a new build with the environment variable:

```bash
git commit --allow-empty -m "Trigger rebuild with email API endpoint"
git push origin main
```

## Testing Production Email

1. Visit your GitHub Pages site: `https://bully911210.github.io/leadlabs-fix/`
2. Click "Fix My Website" button
3. Fill out the contact form
4. Submit the form
5. Check your email at `hello@leadlabs.co.za`

## Troubleshooting

### Email Not Sending

1. **Check Vercel logs:**
   ```bash
   vercel logs
   ```

2. **Verify environment variable:**
   ```bash
   vercel env ls
   ```

3. **Test API endpoint directly:**
   ```bash
   curl -X POST https://your-project.vercel.app/api/send-email \
     -H "Content-Type: application/json" \
     -d '{
       "to":"test@example.com",
       "from":"noreply@leadlabs.co.za",
       "subject":"Test",
       "html":"<p>Test email</p>"
     }'
   ```

4. **Check CORS errors:**
   - Open browser DevTools (F12)
   - Go to Network tab
   - Submit form
   - Look for CORS-related errors

5. **Check Resend dashboard:**
   - Login to resend.com
   - Go to Logs
   - Verify if requests are reaching Resend

### Environment Variable Not Working

- Ensure `VITE_EMAIL_API_ENDPOINT` is set in GitHub repository secrets
- Secret must start with `VITE_` to be accessible in the frontend
- Trigger a new build after adding the secret

## Email Configuration

Current email settings (in `src/utils/email.ts`):

- **To:** `hello@leadlabs.co.za`
- **From:** `noreply@leadlabs.co.za`
- **Reply-To:** User's email from the form

You can modify these in the `sendEmail` function.

## Vercel Configuration

The `vercel.json` file is already configured:

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

This tells Vercel to:
- Use Node.js 18 runtime for the API function
- Reference the `RESEND_API_KEY` environment variable

## Security Notes

✅ **Good Practices:**
- API key is stored in environment variables (never in code)
- CORS is configured to only allow your domain
- Email validation happens on both frontend and backend

⚠️ **Important:**
- Never commit the actual `RESEND_API_KEY` to git
- Keep the `.env` files in `.gitignore`
- Only set the API key in Vercel/Netlify dashboard

## Alternative Deployment Platforms

If not using Vercel, see `DEPLOYMENT.md` for instructions on:
- Netlify Functions
- AWS Lambda
- Railway/Render
- Other platforms

## Summary

The Resend API implementation is complete. To activate it:

1. ✅ Code is ready (no changes needed)
2. ⚠️ Deploy API to Vercel with `RESEND_API_KEY`
3. ⚠️ Add `VITE_EMAIL_API_ENDPOINT` to GitHub secrets
4. ⚠️ Update CORS origin in `api/send-email.ts`
5. ⚠️ Rebuild and test

For detailed deployment steps, refer to the comprehensive `DEPLOYMENT.md` guide.
