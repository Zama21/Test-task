import './mainHeader.style.css';

export default function MainHeader() {
    const MainHeader = `
                    <header class="mainHeader">
                        <nav class="wrapperMainPages">
                            <button class="returnBtn">
                                <img
                                    src="/Test-task/svg-icons/mainHeader/BackOutline.svg"
                                    alt="BackOutline.svg"
                                />
                                <p class="longName"><span>User pages</span> - Profile</p>
                                <p class="shortName">Profile</p>
                            </button>
                            <ul class="wrapperLinks">
                                <li class="item">
                                    <img
                                        src="/Test-task/svg-icons/mainHeader/ChartOutline.svg"
                                        alt="ChartOutline.svg"
                                    />
                                    <p>Statistics</p>
                                </li>
                                <li class="item">
                                    <img
                                        src="/Test-task/svg-icons/mainHeader/ChartOutline.svg"
                                        alt="CalculateOutline.svg"
                                    />
                                    <p>Invoices</p>
                                </li>
                                <li class="item">
                                    <img
                                        src="/Test-task/svg-icons/mainHeader/ReceiptOutline.svg"
                                        alt="ReceiptOutline.svg"
                                    />
                                    <p>Schedule</p>
                                </li>
                            </ul>
                        </nav>
                    </header>
                `;
    return MainHeader;
}
