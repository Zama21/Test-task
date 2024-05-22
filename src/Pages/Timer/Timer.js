import './Timer.css';
import './TimerListener';

export default function Timer() {
    return {
        async render() {
            const Content = `
                <div class="wrapperMain">
                    <div class="wrapperHeader">
                        <span class="timer">Timer</span>
                        <ul class="wrapperBtns">
                                <li class="item">
                                    <img
                                        src="/Test-task/svg-icons/Timer/ChevronDownOutline.svg"
                                        alt="ChartOutline.svg"
                                    />
                                </li>
                                <li class="item resetTimerBtn">
                                    <img
                                        src="/Test-task/svg-icons/Timer/UpdateOutline.svg"
                                        alt="CalculateOutline.svg"
                                    />
                                </li>
                                <li class="item">
                                    <img
                                        src="/Test-task/svg-icons/Timer/CloseOutline.svg"
                                        alt="ReceiptOutline.svg"
                                    />
                                </li>
                            </ul>
                    </div>
                    <div class="time"></div>
                </div>
            `;
            return Content;
        },
    };
}
