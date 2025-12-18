# Deployment Guide

This document provides step-by-step instructions for deploying the LeadLabs website to GitHub Pages with full email functionality.

## Table of Contents

1. [Configuration Overview](#configuration-overview)
2. [GitHub Pages Setup](#github-pages-setup)
3. [Vercel/Netlify Deployment](#vercelnettlify-deployment)
4. [Email Setup with Vercel](#email-setup-with-vercel)
5. [Alternative Email Setup Options](#alternative-email-setup-options)
6. [Verification](#verification)
7. [Troubleshooting](#troubleshooting)

---

## Configuration Overview

The application uses environment variables to configure the base path for different deployment platforms.

### Base Path Configuration

- **GitHub Pages**: Requires a base path matching your repository name (e.g., `/leadlabs-fix/`)
- **Vercel/Netlify/Other**: Uses root path (`/`)

The `VITE_BASE_PATH` environment variable controls this behavior:

```env
# For GitHub Pages (set in GitHub Actions workflow)
VITE_BASE_PATH=/leadlabs-fix/

# For Vercel/Netlify/Local (default)
VITE_BASE_PATH=/
```

This configuration is already set up in:
- `.github/workflows/deploy.yml` for GitHub Pages (automatically set)
- `.env.local` for local development (defaults to root)
- `.env.example` as a template

---

## GitHub Pages Setup

GitHub Pages will host your static website for free.

### Step 1: Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/bully911210/leadlabs-fix`
2. Click **Settings** (in the repository menu)
3. Click **Pages** (in the left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save the changes

### Step 2: Trigger Deployment

The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`.

To deploy:

```sh
# Make sure your changes are committed
git add .
git commit -m "Deploy to GitHub Pages"

# Push to main branch
git push origin main
```

The deployment will start automatically. You can monitor progress:
1. Go to the **Actions** tab in your repository
2. Click on the running workflow
3. Wait for it to complete (usually 2-3 minutes)

### Step 3: Access Your Site

Once deployed, your site will be available at:

**https://bully911210.github.io/leadlabs-fix/**

---

## Vercel/Netlify Deployment

If you prefer to deploy on Vercel or Netlify (instead of GitHub Pages), the application will automatically use the root path.

### Vercel Deployment

1. **Install Vercel CLI** (if not already installed):
   ```sh
   npm install -g vercel
   ```

2. **Deploy**:
   ```sh
   vercel login
   vercel
   ```

3. **No additional configuration needed** - The app will automatically use root path (`/`) for Vercel.

### Netlify Deployment

1. **Install Netlify CLI**:
   ```sh
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```sh
   netlify login
   netlify init
   netlify deploy --prod
   ```

3. **Build settings** (if using Netlify dashboard):
   - Build command: `npm run build`
   - Publish directory: `dist`
   - No need to set `VITE_BASE_PATH` - defaults to root

---

## Email Setup with Vercel

Vercel is the recommended platform for hosting the email serverless function because:
- ✅ Free tier includes serverless functions
- ✅ Simple deployment process
- ✅ Easy environment variable management
- ✅ Automatic HTTPS

### Step 1: Get a Resend API Key

1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email address
3. In the Resend dashboard:
   - Go to **API Keys**
   - Click **Create API Key**
   - Name it "LeadLabs Production"
   - Copy the key (you won't be able to see it again!)

### Step 2: Verify Your Domain (Recommended)

For production use, you should verify your domain in Resend:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `leadlabs.co.za`)
4. Follow the DNS setup instructions
5. Wait for verification (usually a few minutes)

**For Testing:** You can skip this step and use Resend's testing domain, but emails will be limited.

### Step 3: Install Vercel CLI

```sh
npm install -g vercel
```

### Step 4: Deploy to Vercel

```sh
# Login to Vercel
vercel login

# Navigate to your project directory
cd /path/to/leadlabs-fix

# Deploy (first time)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? leadlabs-email-api (or any name)
# - In which directory is your code located? ./
# - Override settings? No
```

### Step 5: Set Environment Variable in Vercel

```sh
# Add the Resend API key as an environment variable
vercel env add RESEND_API_KEY

# When prompted:
# - Enter your Resend API key
# - Select "Production" environment
# - Select "Yes" to add to other environments if you want
```

### Step 6: Deploy to Production

```sh
vercel --prod
```

After deployment, Vercel will show you the URL. It will look like:
```
https://leadlabs-email-api.vercel.app
```

Your email endpoint will be:
```
https://leadlabs-email-api.vercel.app/api/send-email
```

### Step 7: Configure GitHub Pages to Use the Email API

1. Go to your GitHub repository
2. Go to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `VITE_EMAIL_API_ENDPOINT`
5. Value: `https://your-vercel-project.vercel.app/api/send-email`
6. Click **Add secret**

### Step 8: Update CORS Settings

Edit `api/send-email.ts` and update the CORS origin:

```typescript
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'https://bully911210.github.io', // Your GitHub Pages URL
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
```

Commit and push this change, then redeploy to Vercel:

```sh
git add api/send-email.ts
git commit -m "Update CORS for GitHub Pages"
git push origin main
vercel --prod
```

### Step 9: Trigger GitHub Pages Redeployment

Since you added the environment variable, trigger a new deployment:

```sh
# Make a small change or just trigger manually
git commit --allow-empty -m "Trigger rebuild with email API endpoint"
git push origin main
```

---

## Alternative Email Setup Options

### Option A: Netlify Functions

If you prefer Netlify over Vercel:

1. **Move the email function:**
   ```sh
   mkdir -p netlify/functions
   cp api/send-email.ts netlify/functions/send-email.ts
   ```

2. **Install Netlify CLI:**
   ```sh
   npm install -g netlify-cli
   ```

3. **Deploy:**
   ```sh
   netlify login
   netlify init
   netlify deploy --prod
   ```

4. **Set environment variable:**
   - Go to Netlify dashboard
   - Select your site
   - Go to **Site settings** → **Environment variables**
   - Add `RESEND_API_KEY` with your API key

5. **Your endpoint will be:**
   ```
   https://your-site.netlify.app/.netlify/functions/send-email
   ```

### Option B: AWS Lambda

For AWS Lambda:

1. Create a Lambda function with Node.js runtime
2. Install Resend SDK in your Lambda deployment package
3. Set up API Gateway to trigger the Lambda
4. Configure CORS in API Gateway
5. Set `RESEND_API_KEY` in Lambda environment variables

### Option C: Railway/Render

For Railway or Render:

1. Create a simple Express.js API:
   ```javascript
   const express = require('express');
   const { Resend } = require('resend');
   
   const app = express();
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   app.post('/api/send-email', async (req, res) => {
     // Implementation similar to api/send-email.ts
   });
   
   app.listen(process.env.PORT || 3000);
   ```

2. Deploy to Railway or Render
3. Set environment variables in their dashboard
4. Use the provided URL as your `VITE_EMAIL_API_ENDPOINT`

---

## Verification

### Test GitHub Pages Deployment

1. Visit: `https://bully911210.github.io/leadlabs-fix/`
2. The page should load without errors
3. Open browser DevTools (F12) → Console
4. Check for no errors related to missing assets or failed routes
5. Click through navigation links to verify routing works

### Test Email Functionality

1. Open the website
2. Click a "Get Started" or "Fix My Website" button
3. Fill out the contact form
4. Submit the form
5. Check for:
   - Success message appears
   - No errors in browser console
   - Email arrives at your configured destination

**Development Testing:**
If you run locally (`npm run dev`), emails will be logged to the console instead of sent.

---

## Troubleshooting

### Site Shows Blank Page

**Symptoms:** White screen, no content

**Solutions:**
1. Check browser console for errors
2. Verify base path in `vite.config.ts` matches repository name
3. Ensure GitHub Pages is set to deploy from "GitHub Actions"
4. Check GitHub Actions tab for deployment errors

### Assets Not Loading (404 errors)

**Symptoms:** CSS not loading, images broken

**Solutions:**
1. Verify `base` in `vite.config.ts` is set to `/leadlabs-fix/`
2. Check that `basename` in `App.tsx` matches
3. Rebuild and redeploy:
   ```sh
   npm run build
   git add dist -f
   git commit -m "Force add dist"
   git push
   ```

### Direct URLs Return 404

**Symptoms:** `https://bully911210.github.io/leadlabs-fix/some-page` returns 404

**Solutions:**
1. Verify `public/404.html` exists
2. Check that it's included in the build output (`dist/404.html`)
3. The 404.html should automatically redirect to the main app

### Email Not Sending

**Symptoms:** Form submits but no email arrives, or error message

**Solutions:**

1. **Check Vercel deployment:**
   ```sh
   vercel logs
   ```

2. **Verify API endpoint:**
   - Test it directly with curl:
     ```sh
     curl -X POST https://your-vercel-app.vercel.app/api/send-email \
       -H "Content-Type: application/json" \
       -d '{"to":"test@example.com","from":"noreply@leadlabs.co.za","subject":"Test","html":"<p>Test</p>"}'
     ```

3. **Check environment variables:**
   ```sh
   # List Vercel environment variables
   vercel env ls
   
   # Should show RESEND_API_KEY in production
   ```

4. **Verify CORS:**
   - Open browser DevTools → Network tab
   - Submit form
   - Check if the OPTIONS request succeeded
   - If CORS error, update the `Access-Control-Allow-Origin` header in `api/send-email.ts`

5. **Check Resend dashboard:**
   - Log in to resend.com
   - Go to **Logs** to see if requests are reaching Resend
   - Check for any API errors

### Environment Variable Not Working

**Symptoms:** `VITE_EMAIL_API_ENDPOINT` seems undefined

**Solutions:**

1. **For GitHub Actions:**
   - Verify secret exists: Settings → Secrets and variables → Actions
   - Secret name must be exactly: `VITE_EMAIL_API_ENDPOINT`
   - Trigger new deployment after adding secret

2. **For local development:**
   - Create `.env.local` file (not `.env`)
   - Add: `VITE_EMAIL_API_ENDPOINT=your-url`
   - Restart dev server: `npm run dev`

3. **Check in code:**
   ```typescript
   console.log('Email endpoint:', import.meta.env.VITE_EMAIL_API_ENDPOINT);
   ```

---

## Security Checklist

- ✅ RESEND_API_KEY is NEVER in frontend code
- ✅ RESEND_API_KEY is set only in serverless platform (Vercel/Netlify/etc.)
- ✅ CORS is configured to only allow your GitHub Pages domain
- ✅ Email endpoint validates all inputs
- ✅ Rate limiting is considered (Vercel/Netlify provide this automatically)
- ✅ .env files are in .gitignore

---

## Maintenance

### Updating Dependencies

```sh
# Check for updates
npm outdated

# Update all dependencies
npm update

# Or update specific package
npm update react react-dom
```

### Monitoring Email Delivery

1. Log in to [resend.com](https://resend.com)
2. Go to **Logs** to see all sent emails
3. Check delivery status and open rates
4. Set up webhooks for bounce/complaint notifications

### Updating Content

1. Edit files in `src/components/landing/`
2. Test locally: `npm run dev`
3. Commit and push to trigger automatic deployment

---

## Support

If you encounter issues not covered in this guide:

1. Check the [GitHub Actions logs](https://github.com/bully911210/leadlabs-fix/actions)
2. Check browser console for client-side errors
3. Check Vercel/Netlify logs for server-side errors
4. Review [Resend documentation](https://resend.com/docs)
5. Review [Vite documentation](https://vitejs.dev/guide/)

---

**Last Updated:** December 2024
