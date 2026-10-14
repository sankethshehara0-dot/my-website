ALL PDF CONVERTER — DEPLOYMENT NOTES

Contents:
- Responsive static website with homepage, six browser-based tools, guides, About, Contact, Privacy Policy, Terms, and Disclaimer.
- Merge PDF, extract a page range, rotate all pages, images-to-PDF, PDF-to-PNG, and PDF page checker.
- robots.txt, sitemap.xml, and an ads.txt placeholder.

BEFORE YOU PUBLISH:
1. Replace every instance of https://YOUR-DOMAIN.example with your real HTTPS domain.
2. Replace REPLACE-WITH-YOUR-REAL-CONTACT-EMAIL@example.com with a real monitored email address.
3. Review the Privacy Policy, Terms, and Disclaimer so they accurately describe your site, host, analytics, advertising, consent tools, and local legal requirements.
4. Test every tool on desktop and mobile with sample documents, including invalid and large files.
5. Upload the folder contents to a static host that supports HTTPS. The index.html file should be at the web root.
6. Verify all pages load, navigation works, canonical URLs and sitemap are correct, and the contact address works.
7. Submit the live site in Google AdSense only after adding useful original content and reviewing current policies. Approval is not guaranteed.
8. Only after you receive your own AdSense publisher details, add the exact code Google provides. For ads.txt, use the exact seller declaration shown in your AdSense account. Do not invent IDs or use another person's code.

TECH NOTES:
- The site uses client-side libraries loaded from public CDNs: pdf-lib, jsPDF, PDF.js, and Google Fonts.
- Internet access is needed to load these dependencies unless you self-host them.
- PDF-to-image rendering can use substantial memory. Large PDFs may not work on every device.
- These tools do not implement server-side conversion or server uploads.
- This is a starter project, not a promise of AdSense approval or legal compliance.
