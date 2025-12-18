# Logo Setup Instructions

## ⚠️ Action Required: Replace Temporary Logo

A temporary SVG logo placeholder has been created. **You must replace it with the actual logo image from https://i.ibb.co/b5ZFvhnZ/labs.png**

### Manual Steps Required:

1. **Download the logo image:**
   - Visit: https://i.ibb.co/b5ZFvhnZ/labs.png
   - Download the image to your computer
   - Save it as `labs-logo.png` or `labs-logo.svg` (depending on the format)

2. **Replace the temporary file:**
   - Delete the current placeholder: `/public/labs-logo.svg`
   - Copy your downloaded logo to: `/public/labs-logo.png` (or `.svg`)
   - If using PNG format, update the file extensions in the components (see below)

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
  src="/labs-logo.svg"  // Change to .png if using PNG
  alt="LeadLabs" 
  className="h-10 w-auto"
/>
```

**Footer (src/pages/Index.tsx):**
```tsx
<img 
  src="/labs-logo.svg"  // Change to .png if using PNG
  alt="LeadLabs" 
  className="h-10 w-auto brightness-0 invert"
/>
```

The footer logo includes `brightness-0 invert` to make it white on the dark background.
