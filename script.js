function prenventTrasnlation () {
    if (!document.querySelector('meta[name="google"][content="notranslate"]')) {
        const meta = document.createElement('meta');
        meta.name = "google";
        meta.content = "notransalte";
        document.head.appendChild(meta);
    }
};