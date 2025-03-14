
(async () => {
    const isViteDevMode = !import.meta.env.DEV;
    if (!isViteDevMode) {
        await import('./main-script');
    } else {
        const a= '';
        await import(/* @vite-ignore */ './v1/main.min.js' + a);
    }
})();