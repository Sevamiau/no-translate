function preventTranslation() {
    if (!document.querySelector('meta[name="google"][content="notranslate"]')) {
        const meta = document.createElement('meta');
        meta.name = "google";
        meta.content = "notranslate";
        (document.head || document.documentElement).appendChild(meta);
    }

    // Add HTML attribute (for Firefox)
    if (document.documentElement && document.documentElement.getAttribute('translate') !== 'no') {
        document.documentElement.setAttribute('translate', 'no');
    }

    if (document.body && !document.body.classList.contains('notranslate')) {
        document.body.classList.add('notranslate');
    }
}

preventTranslation();

window.addEventListener('DOMContentLoaded', preventTranslation);

const observer = new MutationObserver(preventTranslation);
observer.observe(document.documentElement, { attributes: true, childList: true, subtree: false });