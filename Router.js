function updateActiveTab() {
    const links = document.querySelectorAll('[data-link]');
    const currentPath = window.location.pathname;
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

export class Router {
    constructor(routes) {
        this.routes = routes;
        this.loadRoute();
        this.init();
    }

    init() {
        document.body.addEventListener('click', e => {
            const linkElement = e.target.closest('[data-link]');
            if (
                e.target.matches('[data-link]') ||
                (linkElement && linkElement.hasAttribute('data-link'))
            ) {
                e.preventDefault();
                const pageHref = linkElement.getAttribute('href');
                this.navigateTo(pageHref);

                const links = document.querySelectorAll('.item');
                links.forEach(link => {
                    link.classList.remove('active');
                });
                linkElement.classList.add('active');
            }
        });

        window.addEventListener('popstate', () => {
            this.loadRoute();

            updateActiveTab();
        });

        window.addEventListener('load', () => {
            updateActiveTab();

            if (window.location.pathname === '/Test-task/') {
                const defaultTab = document.querySelector(
                    '[href="/Test-task/activity"]'
                );

                if (defaultTab) {
                    defaultTab.classList.add('active');
                }
            }
        });
    }

    navigateTo(url) {
        history.pushState(null, null, url);
        this.loadRoute();
        window.dispatchEvent(new PopStateEvent('popstate'));
    }

    async loadRoute() {
        const route =
            this.routes.find(r => r.path === location.pathname) ||
            this.routes.find(r => r.path === '*');
        document.querySelector('#app').innerHTML =
            await route.component.render();
    }
}

export class Route {
    constructor(path, component) {
        this.path = path;
        this.component = component;
    }
}
