import './secondaryHeader.style.css';

export default function SecondaryHeader() {
    const SecondaryHeader = `
                <header class="secondaryHeader">
                    <nav class="wrapperProfilePages">
                        <ul class="wrapperLinks">
                            <li>
                                <a href="/Test-task/activity" class="item" data-link="/activity">
                                    <img
                                        src="/Test-task/svg-icons/secondaryHeader/MenuOutline.svg"
                                        alt="Activity"
                                    />
                                    <p>Activity</p>
                                </a>
                            </li>
                            <li>
                                <a href="/Test-task/map" data-link class="item">
                                    <img
                                        src="/Test-task/svg-icons/secondaryHeader/LocationOutline.svg"
                                        alt="Map"
                                    />
                                    <p>Map</p>
                                </a>
                            </li>
                            <li>
                                <a href="/Test-task/timer" class="item" data-link>
                                    <img
                                        src="/Test-task/svg-icons/secondaryHeader/TimeOutline.svg"
                                        alt="Time"
                                    />
                                    <p>Time</p>
                                </a>
                            </li>
                        </ul>
                        <div class="wrapperRightOptions">
                            <ul class="wrapperLinks">
                                <li>
                                    <a href="#" class="item" data-link>
                                        <img
                                            src="/Test-task/svg-icons/secondaryHeader/DocsOutline.svg"
                                            alt="Notes"
                                        />
                                        <p>Notes</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="item" data-link>
                                        <img
                                            src="/Test-task/svg-icons/secondaryHeader/PeopleOutline.svg"
                                            alt="Friends"
                                        />
                                        <p>Friends</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="item" data-link>
                                        <img
                                            src="/Test-task/svg-icons/secondaryHeader/JpgOutline.svg"
                                            alt="Photos"
                                        />
                                        <p>Photos</p>
                                    </a>
                                </li>
                            </ul>
                            <div class="wrapperSettings">
                                <img
                                    src="/Test-task/svg-icons/secondaryHeader/SettingsOutline.svg"
                                    alt="Settings"
                                /><img
                                    src="/Test-task/svg-icons/secondaryHeader/ArrowOutline.svg"
                                    alt="Arrow"
                                />
                            </div>
                        </div>
                    </nav>
                </header>
`;
    return SecondaryHeader;
}
