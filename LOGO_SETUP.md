# Logo Setup Instructions

## ⚠️ Action Required: Download Logo Image

The logo image could not be automatically downloaded due to network restrictions in the build environment.

### Manual Steps Required:

1. **Download the logo image:**
   - Visit: https://i.ibb.co/b5ZFvhnZ/labs.png
   - Download the image
   - Save it as `labs-logo.png`

2. **Place the file in the correct location:**
   - Move `labs-logo.png` to the `/public/` directory
   - Path should be: `/public/labs-logo.png`

3. **Verify the implementation:**
   - The logo is already configured in the Header component (`src/components/landing/Header.tsx`)
   - The logo is already configured in the Footer component (`src/pages/Index.tsx`)
   - Once you add the file, the logo will automatically appear

### Alternative: Use Base64 Encoding

If you want to embed the logo directly in the code:

1. Download the image
2. Convert to base64: https://base64.guru/converter/encode/image
3. Replace the `src` attribute in Header.tsx and Index.tsx with the base64 string

### Current Implementation:

**Header (src/components/landing/Header.tsx):**
```tsx
<img 
  src="/labs-logo.png" 
  alt="LeadLabs" 
  className="h-10 w-auto"
/>
```

**Footer (src/pages/Index.tsx):**
```tsx
<img 
  src="/labs-logo.png" 
  alt="LeadLabs" 
  className="h-10 w-auto brightness-0 invert"
/>
```

The footer logo includes `brightness-0 invert` to make it white on the dark background.
