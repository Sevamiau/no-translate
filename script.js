function preventTranslation() {
    console.log("Extension running.");

    if (!document.querySelector('meta[name="google"][content="notranslate"]')) {
        const meta = document.createElement('meta');
        meta.name = "google";
        meta.content = "notranslate";

        if (document.head) {
            document.head.appendChild(meta);
        } else {
            document.documentElement.appendChild(meta);
        }
    }

    if (document.documentElement) {
        document.documentElement.setAttribute('translate', 'no');
    }

    if (document.body) {
        document.body.classList.add('notranslate');
    }
}

preventTranslation();

window.addEventListener('DOMContentLoaded', preventTranslation);