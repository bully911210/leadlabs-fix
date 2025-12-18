# LeadLabs - Business Website Foundation

A professional landing page for LeadLabs, built with Vite, React, TypeScript, and deployed to GitHub Pages.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development

```sh
# Clone the repository
git clone https://github.com/bully911210/leadlabs-fix.git

# Navigate to the project directory
cd leadlabs-fix

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:8080`

## 📦 Technologies Used

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - Beautiful UI components
- **Resend** - Email API for contact forms
- **TanStack Query** - Data fetching and caching

## 🌐 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment

Every push to the `main` branch triggers an automated deployment via GitHub Actions.

**Setup Steps:**

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` branch to trigger deployment

The site will be available at: `https://bully911210.github.io/leadlabs-fix/`

### Manual Deployment

```sh
# Build the project
npm run build

# The built files will be in the dist/ folder
# You can deploy these files to any static hosting service
```

## 📧 Email Integration with Resend

The contact form uses the Resend API for email delivery. Due to GitHub Pages limitations (static hosting only), email sending requires a serverless function.

### Development Mode

In development, emails are logged to the console instead of being sent.

### Production Setup (Required for Email Functionality)

#### Option 1: Deploy to Vercel (Recommended)

Vercel provides free serverless functions and works seamlessly with this setup.

1. **Install Vercel CLI:**
   ```sh
   npm i -g vercel
   ```

2. **Deploy the serverless function:**
   ```sh
   vercel
   ```

3. **Set environment variable:**
   ```sh
   vercel env add RESEND_API_KEY
   # Paste your Resend API key when prompted
   ```

4. **Get your API endpoint URL:**
   After deployment, Vercel will provide a URL like:
   `https://your-project.vercel.app/api/send-email`

5. **Update your GitHub Pages deployment:**
   - Go to GitHub repository **Settings** → **Secrets and variables** → **Actions**
   - Add a new secret: `VITE_EMAIL_API_ENDPOINT`
   - Value: Your Vercel API endpoint URL

6. **Update CORS in api/send-email.ts:**
   Change the `Access-Control-Allow-Origin` header to match your GitHub Pages URL:
   ```typescript
   'Access-Control-Allow-Origin': 'https://bully911210.github.io'
   ```

#### Option 2: Deploy to Netlify

1. Move `api/send-email.ts` to `netlify/functions/send-email.ts`
2. Deploy to Netlify
3. Set `RESEND_API_KEY` in Netlify environment variables
4. Follow steps 5-6 from Option 1 above

#### Option 3: Use Any Serverless Platform

You can deploy the email API to:
- AWS Lambda + API Gateway
- Google Cloud Functions
- Azure Functions
- Railway
- Render

Just ensure:
- The function accepts POST requests
- CORS headers allow your GitHub Pages domain
- RESEND_API_KEY is set in environment variables

### Getting a Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (or use Resend's testing domain)
3. Generate an API key from the dashboard
4. Store it securely in your serverless platform's environment variables

## 🛠️ Build Configuration

### Base Path for GitHub Pages

The project is configured with the correct base path for GitHub Pages in `vite.config.ts`:

```typescript
base: mode === "production" ? "/leadlabs-fix/" : "/"
```

### Client-Side Routing

The app uses a `404.html` fallback to support direct URL access with React Router. GitHub Pages will serve this file for any 404 error, which redirects to the main app.

## 📁 Project Structure

```
leadlabs-fix/
├── api/                      # Serverless function examples
│   └── send-email.ts        # Resend email API endpoint
├── public/                   # Static assets
│   └── 404.html             # GitHub Pages routing fallback
├── src/
│   ├── components/          # React components
│   │   ├── landing/         # Landing page sections
│   │   └── ui/              # Reusable UI components
│   ├── pages/               # Route pages
│   ├── utils/               # Utility functions
│   │   └── email.ts         # Email sending utility
│   ├── App.tsx              # Main app component with routing
│   └── main.tsx             # App entry point
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies and scripts
```

## 🔧 Available Scripts

```sh
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## 🎨 Customization

### Updating Colors and Styles

Edit `tailwind.config.ts` to customize the theme colors, fonts, and other design tokens.

### Adding Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.tsx`
3. Update the navigation in `src/components/landing/Header.tsx`

### Modifying Contact Form

Edit `src/components/landing/ContactForm.tsx` to add or remove form fields.

## 📝 Environment Variables

For local development, create a `.env.local` file:

```env
# Optional: Email API endpoint (required for production email sending)
VITE_EMAIL_API_ENDPOINT=https://your-serverless-function.vercel.app/api/send-email
```

**Important:** Never commit API keys to the repository. Use environment variables on your deployment platform.

## 🐛 Troubleshooting

### Blank Page on GitHub Pages

- Ensure the base path in `vite.config.ts` matches your repository name
- Check browser console for errors
- Verify GitHub Pages is configured to deploy from GitHub Actions

### Email Not Sending

- Check that `VITE_EMAIL_API_ENDPOINT` is set correctly
- Verify your Resend API key is valid and set in your serverless platform
- Check CORS headers in your serverless function
- Look for errors in the browser console and serverless function logs

### Assets Not Loading

- Verify the base path in `vite.config.ts` is correct
- Check that asset paths in the built `index.html` start with `/leadlabs-fix/`

## 📄 License

This project is private and proprietary.

## 🤝 Support

For issues or questions, contact the LeadLabs team.
