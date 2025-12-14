function prenventTrasnlation () {
    console.log("Extension running.")

    if (!document.querySelector('meta[name="google"][content="notranslate"]')) {
        const meta = document.createElement('meta');
        meta.name = "google";
        meta.content = "notransalte";
        document.head.appendChild(meta);
    }
};

if (document.body) {
    document.body.classList.add('notranslate');

    document.documentElement.setAttribute('translate', 'no');
};


prenventTrasnlation();

window.addEventListener('DOMContentLoaded', prenventTrasnlation);

