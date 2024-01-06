let routerTitle = '', siteTitle = '';

function setTitle() {
    if (!routerTitle && !siteTitle) {
        document.title = 'loading...';
    } else if (routerTitle && !siteTitle) {
        document.title = routerTitle;
    } else if (siteTitle && !routerTitle) {
        document.title = siteTitle;
    } else {
        document.title = `${routerTitle}-${siteTitle}`;
    }
}

export function setRouterTitle(title) {
    routerTitle = title;
    setTitle();
}

export function setSiteTitle(title) {
    siteTitle = title;
    setTitle();
}
