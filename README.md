# No-Translate Chrome Extension
A lightweight Google Chrome extension that prevents the browser from automatically translating web pages or showing the "Google Translate" popup.

##  Why this exists
Google Chrome often tries to be helpful by automatically translating pages that are not in your browser's default language. For language learners, developers, or bilingual users, this can be annoying. 

This extension forces the browser to respect the original content by injecting specific standard HTML tags that tell the translation engine to stop.

##  How it works
The extension runs a script immediately when a page starts loading (`document_start`) to inject three specific "do not translate" signals:

1.  **Meta Tag:** Adds `<meta name="google" content="notranslate">` to the head. This prevents the translation popup bubble from appearing.
2.  **HTML Attribute:** Adds `translate="no"` to the `<html>` tag.
3.  **Body Class:** Adds `class="notranslate"` to the `<body>` tag. This physically prevents the text from being swapped out, even if a user tries to force a translation.

### Technical Highlight
The script includes a robust fallback mechanism. Since it runs **immediately**, the `<head>` or `<body>` tags often do not exist yet. The script intelligently attaches the meta tag to the root `<html>` element if the head is missing, ensuring no crash occurs during fast page loads.

## Project Structure

no-translate-extension/
├── manifest.json   # Configuration (Manifest V3)
├── content.js      # The logic script
└── README.md       # Documentation

# Installation
Since this is a custom extension, you will install it via "Developer Mode":
Download or clone this folder to your computer.
Open Google Chrome and navigate to chrome://extensions.
Toggle Developer mode to ON (top right switch).
Click the Load unpacked button (top left).
Select the folder containing these files.

# How to Test
Right-click the page and select "Translate to English".
Result: The browser might say "Translated," but the text should remain in the original language. This confirms the notranslate class is blocking the engine.
Visual Check: Inspect the DOM (Right-click -> Inspect). You should see translate="no" on the <html> tag and class="notranslate" on the <body>.

# License
Feel free to use and modify this code for personal use.