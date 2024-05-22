let startTime;
let timerInterval;
let timerIntervalLoadElement;
let timerElement;

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

function clearInter(interval) {
    clearInterval(interval);
    return undefined;
}

function updateTimerDisplay() {
    timerIntervalLoadElement = clearInter(timerIntervalLoadElement);
    timerElement.textContent = formatTime(
        Math.floor((Date.now() - startTime) / 1000)
    );
}

function waitLoad() {
    if (!timerIntervalLoadElement)
        timerIntervalLoadElement = setInterval(() => {
            timerElement = document.querySelector('.time');
            if (timerElement) {
                addEventListenerForResetBtn();
                updateTimerDisplay();
                timerInterval = setInterval(updateTimerDisplay, 1000);
            }
        }, 100);
}

function handlePageChange() {
    if (window.location.pathname === '/Test-task/timer') {
        waitLoad();
    } else {
        timerInterval = clearInter(timerInterval);
        timerIntervalLoadElement = clearInter(timerIntervalLoadElement);
    }
}

function addEventListenerForResetBtn() {
    const updateButton = document.querySelector('.resetTimerBtn');
    updateButton.addEventListener('click', () => {
        startTimer();
        updateTimerDisplay();
    });
}

window.addEventListener('popstate', handlePageChange);

window.addEventListener('DOMContentLoaded', () => {
    startTimer();
    if (window.location.pathname === '/Test-task/timer') {
        timerElement = document.querySelector('.time');
        timerInterval = setInterval(updateTimerDisplay, 1000);
        updateTimerDisplay();
        addEventListenerForResetBtn();
    } else {
        clearInterval(timerInterval);
    }
});
