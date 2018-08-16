import '../css/style.css';

if (process.env.NODE_ENV !== 'production') { console.log("dev mode"); }

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
        const oldRootElem = document.querySelector('body');
        const newRootElem = oldRootElem.cloneNode(false);
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        oldRootElem.parentNode.removeChild(oldRootElem);
    });
} else {
    enableProdMode();
}