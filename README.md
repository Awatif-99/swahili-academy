# Swahili Academy

A buildless, single-page website using semantic HTML, layered CSS, and vanilla JavaScript. No package installation or build command is needed.

## Files and preview in VS Code

1. Open VS Code and choose **File → Open Folder**, then select this swahili-academy folder.
2. The complete files are already saved: index.html (content), style.css (design), script.js (interactions), and images/ (logo and photograph).
3. Save your changes with Ctrl+S. Keep the filenames and relative links unchanged.
4. Install the **Live Server** extension by Ritwick Dey from the VS Code Extensions panel.
5. Right-click index.html and choose **Open with Live Server**. Your browser opens the local site and refreshes when you save.
6. You can also double-click index.html to preview without a server.

## Add or replace your logo

Your existing images/swahili-academy_logo.png is already used in the header. To replace it, save the new logo in images/ and update the header image src in index.html. Give it meaningful alt text. The .brand img rule crops the generous margins in the supplied image using CSS; remove its negative margins and use width: 100% if a replacement logo is tightly cropped. Keep the original image file intact.

## Replace the hero image

The locally saved images/zanzibar-dhow.jpg is a temporary Zanzibar photograph, also used in the Zanzibar course card. Replace it with your own optimized image using the same filename, or update BOTH src values in index.html. Update the alt descriptions and width/height attributes to match the new image. Aim for a landscape JPEG or WebP around 1200 pixels wide; adjust object-position in .hero-image > img if the subject needs a different crop. The hero has high fetch priority; the course card is lazy-loaded.

Photo source: [Unsplash Zanzibar collection](https://unsplash.com/s/photos/zanzibar). [Original photo asset](https://images.unsplash.com/photo-1620896712848-d05411ec91ec). The website makes no external requests at runtime.

## Add your personal story and course details

Edit the #about section in index.html to add your real teaching story. Replace .story-photo with your own photograph, useful alt text, width/height, and loading="lazy". The current placeholder is intentionally visible until a real photo and story are available.

Edit the three .course-card articles in #courses to change course descriptions. Only add verified prices, teaching experience, testimonials, qualifications, or partnerships. The lesson buttons preselect the corresponding option in the enquiry form; keep each data-course value consistent with its select option text.

## Contact and booking

Replace the email and WhatsApp placeholders in .contact-details with real details. For an email link use href="mailto:YOUR_EMAIL"; for WhatsApp use https://wa.me/YOUR_INTERNATIONAL_NUMBER (digits only). You may also add these details to the footer.

The current form downloads a text enquiry draft onto the visitor's own device. It sends no data, stores no data, and creates no booking. Its notice and status message say this explicitly. Keep these notices until a real service is connected.

A practical connection path is to create a Formspree form, add its provided HTTPS endpoint as the form action, and set method="POST". Remove the entire #contact-form submit handler from script.js so the browser can submit normally. Keep the existing field names. Update the notice and button wording to describe sending an enquiry, then verify a real test enquiry reaches your inbox before launch. Use the provider's actual confirmation page; an enquiry is not a confirmed reservation. Alternatively, replace booking links with your real scheduling URL.

## Understand the CSS

- :root contains the exact brand palette and shared spacing tokens.
- @layer reset, base, layout, components, utilities defines override order.
- .wrapper provides consistent maximum content width.
- .flow spaces stacked content; --flow-space lets a component adjust that spacing.
- Flexbox aligns navigation, buttons, and small groups.
- Grid handles the hero, course cards, and two-column sections.
- repeat(auto-fit, minmax(min(100%, 290px), 1fr)) adapts cards without narrow-screen overflow.
- clamp() makes headings fluid while limiting minimum and maximum size.
- Media queries introduce columns when space allows; the initial layout is mobile-first.
- Hover effects use transform and transition. Reduced-motion settings disable motion.
- Buttons on turquoise use dark teal text; dark sections use white text.

## Prepare for deployment

Before launch, add your real contact details, connect a booking/enquiry service, and replace personal-story placeholders. Preview at mobile, tablet, and desktop widths. Check keyboard navigation, visible focus, mobile menu opening/closing, quiz feedback, image cropping, and form behavior. This session checked JavaScript syntax, local assets, section links, and key interaction logic; a browser was unavailable for visual verification.

Deploy the folder containing index.html, style.css, script.js, and images/. Use relative asset paths as provided. No build command is required.

### Netlify

For a manual deployment, use [Netlify Drop](https://app.netlify.com/drop) and drag in the project folder containing index.html and its assets. To use continuous deployment, connect the repository, leave the build command empty, and publish the repository root (.). See [Netlify's deployment documentation](https://docs.netlify.com/deploy/create-deploys/).

### GitHub Pages

Upload these files and images/ to the root of a GitHub repository. Open Settings → Pages. Under Build and deployment, select Deploy from a branch, choose your source branch (usually main), choose /(root), and Save. Wait for GitHub to provide the site URL. The relative paths support repository-based URLs. See [GitHub's publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The site has not been deployed by this task.
