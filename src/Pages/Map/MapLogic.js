let idUpdateInterval;

function initMap(latitude, longitude) {
    ymaps.ready(() => {
        var myMap = new ymaps.Map('map', {
            center: [latitude, longitude],
            zoom: 10,
        });

        const placemarks = [
            {
                coords: [56.7416, 37.1741],
                hint: 'Дубна',
                balloon: 'Город Дубна',
            },
            {
                coords: [55.7558, 37.6176],
                hint: 'Москва',
                balloon: 'Столица России',
            },
            { coords: [56.8666, 37.3575], hint: 'Кимры', balloon: 'Кимры' },
            { coords: [56.8596, 35.9118], hint: 'Тверь', balloon: 'Тверь' },
        ];

        placemarks.forEach(({ coords, hint, balloon }) => {
            var placemark = new ymaps.Placemark(coords, {
                hintContent: hint,
                balloonContent: balloon,
            });
            myMap.geoObjects.add(placemark);
        });

        document.getElementById('loader').style.display = 'none';
    });
}

function getLocation() {
    clearInterval(idUpdateInterval);
    initMap(56.7416, 37.1741);
}

document.addEventListener('DOMContentLoaded', () => {
    const ymapsScript = document.createElement('script');
    ymapsScript.src =
        'https://api-maps.yandex.ru/2.1/?apikey=9158bc72-59d0-4f5d-bb92-1210f630ca4b&lang=ru_RU';
    if (window.location.pathname === '/map') {
        ymapsScript.onload = getLocation;
    }
    document.head.appendChild(ymapsScript);
});

function handlePageChange() {
    if (window.location.pathname === '/Test-task/map') {
        idUpdateInterval = setInterval(() => {
            const mapElement = document.querySelector('#map');
            if (mapElement) getLocation();
        }, 100);
    }
}

window.addEventListener('popstate', handlePageChange);
window.addEventListener('load', handlePageChange);
