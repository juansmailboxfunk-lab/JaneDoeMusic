# Jane Doe — Singer–Songwriter Landing Page

A simple, fast landing page with:
- Large hero image
- Short biography
- Embedded YouTube video
- Contact section with mailto link

## Quick Start
1. Replace the YouTube placeholder:
   - Find the video on YouTube, copy the **ID** (the part after `v=` in the URL).
   - In `index.html`, change `https://www.youtube.com/embed/VIDEO_ID` to your real ID.
2. Update texts:
   - Hero title, subtitle, and Bio paragraph in `index.html`.
3. Email link:
   - The Contact button already points to `mailto:Jana.de-vries@web.de`.
4. Social sharing image:
   - `assets/og-image.jpg` is included.
   - In the `<head>` of `index.html`, replace `YOURUSERNAME` in the `og:url` and `og:image` tags with your GitHub username.
5. Brand color:
   - Edit `--brand` in `style.css`.

## Deploy on GitHub Pages
- Commit all files to your repo and enable Pages (main branch, root).
- Your site will be live at `https://YOURUSERNAME.github.io/`
