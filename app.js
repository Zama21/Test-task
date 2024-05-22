import { Router } from './Router';
import { Route } from './Router';
import MainHeader from './src/components/mainHeader/mainHeader';
import SecondaryHeader from './src/components/secondaryHeader/secondaryHeader';
import Map from './src/Pages/Map/Map';
import Profile from './src/Pages/Profile/Profile';
import Timer from './src/Pages/Timer/Timer';

async function loadHeader(component) {
    const headerElement = document.getElementById('header');
    headerElement.innerHTML += component;
}

loadHeader(MainHeader()).then(() => loadHeader(SecondaryHeader()));

const routes = [
    new Route('/Test-task/timer', new Timer()),
    new Route('/Test-task/map', new Map()),
    new Route('/Test-task/activity', new Profile()),
    new Route('*', new Profile()),
];

new Router(routes);
