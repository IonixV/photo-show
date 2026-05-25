# Photo Show — Image Gallery

This project automatically creates a cool grid gallery web page from all image files in the `/images` folder (JPG, PNG, etc.)

## Usage

1. Place your photos in the `/images` directory at the project root.
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn
   ```
3. Run the app locally:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
   It’ll be available at [http://localhost:3000](http://localhost:3000)
4. Deploy to your favorite platform (Vercel, etc.).

## Features
- Automatic grid gallery from all images in `/images` (no code change or list needed)
- Dark modern look, responsive, hover effect
- New images appear automatically when added and site redeployed

---

## Custom Gallery Style
- Edit `/app/page.tsx` and `/styles/globals.css` to adjust grid, theme, or add features (e.g., lightbox, slideshow)

---

## Notes
- For best results, image files should be in `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp` format and placed directly in `/images`.
- The gallery uses server-side reading of directory contents, so it updates on each build/restart/redeploy.
