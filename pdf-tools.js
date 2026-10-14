// Shared browser-side PDF helpers. Dependencies are loaded from jsDelivr CDN.
async function loadPdfLib(){if(!window.PDFLib)throw new Error("PDF processing library could not load. Check your internet connection and reload.");return window.PDFLib;}
