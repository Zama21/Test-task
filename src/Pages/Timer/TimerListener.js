let startTime;
let timerElement;
let requestId;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
        2,
        '0'
    )}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
    startTime = Date.now();
}

function updateTimerDisplayWithRAF() {
    if (!timerElement) {
        timerElement = document.querySelector('.time');
        addEventListenerForResetBtn();
    }

    timerElement.textContent = formatTime(
        Math.floor((Date.now() - startTime) / 1000)
    );
    requestId = window.requestAnimationFrame(updateTimerDisplayWithRAF);
}

function handlePageChange() {
    if (window.location.pathname === '/Test-task/timer') {
        timerElement = undefined;
        if (!requestId) window.requestAnimationFrame(updateTimerDisplayWithRAF);
    } else {
        window.cancelAnimationFrame(requestId);
        requestId = undefined;
    }
}

function addEventListenerForResetBtn() {
    const updateButton = document.querySelector('.resetTimerBtn');
    updateButton.addEventListener('click', startTimer);
}

window.addEventListener('popstate', handlePageChange);

window.addEventListener('DOMContentLoaded', () => {
    startTimer();
    if (window.location.pathname === '/Test-task/timer') {
        if (!requestId)
            requestId = window.requestAnimationFrame(updateTimerDisplayWithRAF);
    }
});
