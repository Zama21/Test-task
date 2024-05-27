import './Aside.css';
import avatar from './Avatar.jpg';

export default function Aside() {
    const Content = `
            <aside class="wrapperAside">
                <div class="headerAside">
                    <div class="wrapper">
                        <div class="avatar">
                            <img src=${avatar} alt="avatar" />
                        </div>
                        <div class="about">
                            <p class="name">Hanna Dorman</p>
                            <p class="work">UX/UI designer</p>
                        </div>
                        <ul class="wrapperSocialLinks">
                                <li class="item">
                                    <a href="#">
                                        <img
                                            src="/Test-task/svg-icons/Profile/Aside/telegram_logo_icon.svg"
                                            alt="ChartOutline.svg"
                                        />
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#">
                                        <img
                                            src="/Test-task/svg-icons/Profile/Aside/hh.ru.svg"
                                            alt="CalculateOutline.svg"
                                        />
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="#">
                                        <img
                                            src="/Test-task/svg-icons/Profile/Aside/Group.svg"
                                            alt="ReceiptOutline.svg"
                                        />
                                    </a>
                                </li>
                            </ul>
                    </div>
                </div>
                <div class="navigation">
                    <div class="header">
                        <div class="title">Navigation</div>
                        <div class="btn">
                            <img
                                src="/Test-task/svg-icons/Profile/Aside/ChevronDownOutline.svg"
                                alt="ReceiptOutline.svg"
                            />
                        </div>
                    </div>
                    <div class="sectionNavigation sectionNavigation1">
                        <ul class="listNavigation">
                            <li class="itemNavigation">
                                <img
                                    src="/Test-task/svg-icons/Profile/Aside/Union.svg"
                                    alt="ReceiptOutline.svg"
                                />
                                <span>My profile</span>
                            </li>
                            <li class="itemNavigation flex balance">
                                <div class="wrapper">
                                    <img
                                        src="/Test-task/svg-icons/Profile/Aside/balance.svg"
                                        alt="ReceiptOutline.svg"
                                    />
                                    <span>Balance</span>
                                </div>
                                <span class="counter">$ 1,430</span>
                            </li>
                            <li class="itemNavigation flex connections">
                                <div class="wrapper">
                                    <img
                                        src="/Test-task/svg-icons/Profile/Aside/SchemeOutline.svg"
                                        alt="ReceiptOutline.svg"
                                    />
                                    <span>Connections</span>
                                </div>
                                <span class="counter">29</span>
                            </li>
                            <li class="itemNavigation">
                                <img
                                    src="/Test-task/svg-icons/Profile/Aside/PeopleOutline.svg"
                                    alt="ReceiptOutline.svg"
                                />
                                <span>Friends</span>
                            </li>
                        </ul>
                    </div>
                    <div class="sectionNavigation">
                        <ul class="listNavigation">
                            <li class="itemNavigation flex events">
                                <div class="wrapper">
                                    <img
                                        src="/Test-task/svg-icons/Profile/Aside/CalendarOutline.svg"
                                        alt="ReceiptOutline.svg"
                                    />
                                    <span>Events</span>
                                </div>
                                <span class="counter">45</span>
                            </li>
                            <li class="itemNavigation">
                                <img
                                    src="/Test-task/svg-icons/Profile/Aside/SettingsOutline.svg"
                                    alt="ReceiptOutline.svg"
                                />
                                <span>Account settings</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="forms">
                    <div class="header">
                        <div class="title">Share your thoughts</div>
                        <div class="btn">
                            <img
                                src="/Test-task/svg-icons/Profile/Aside/ChevronDownOutline.svg"
                                alt="ReceiptOutline.svg"
                            />
                        </div>
                    </div>
                    <form id="myForm">
                        <textarea id="myTextarea" placeholder="Enter your message..."></textarea>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </aside>
            `;
    return Content;
}
