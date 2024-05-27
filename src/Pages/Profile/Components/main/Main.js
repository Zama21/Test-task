import './Main.css';
import mainImg from './abstractPurple.jpg';

export default function Main() {
    const Content = `
            <main class="profileMain">
                <div class="heroSection">
                    <div class="wrapperMainSection">
                        <img src=${mainImg} alt="mainImg" />
                    </div>
                    <div class="whoCommented">
                        <img
                            src="/Test-task/svg-icons/Profile/Main/CommentOutline.svg"
                            alt="ChartOutline.svg"
                        />
                        <p>
                            <span>Jason Anderson</span> commented:
                        </p>
                    </div>
                    <div class="comment">
                        <p class="text">
                            Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face.
                        </p>
                        <p class="time">
                            – Jason, <i>10:30</i> am
                        </p>
                    </div>
                    <div class="meta">
                        <ul class="list">
                            <li class="item">
                                <img
                                    src="/Test-task/svg-icons/Profile/Main/CommentOutline.svg"
                                    alt="ChartOutline.svg"
                                />
                                <span>432</span>
                            </li>
                            <li>
                                <img
                                    src="/Test-task/svg-icons/Profile/Main/CommentOutline.svg"
                                    alt="ChartOutline.svg"
                                />
                                <span>47</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul class="comments">
                    <li class="comment">
                        <p>
                            Sunset Sunset Sunset
                        </p>
                        <div class="meta">
                            <img
                                src="/Test-task/svg-icons/Profile/Main/TimeOutline.svg"
                                alt="ChartOutline.svg"
                            />
                            <span>53 minutes ago</span>
                            <img
                                src="/Test-task/svg-icons/Timer/ChevronDownOutline.svg"
                                alt="ChartOutline.svg"
                            />
                        </div>
                    </li>
                    <li class="comment">
                        <p>
                            Sunset Sunset Sunset
                        </p>
                        <div class="meta">
                            <img
                                src="/Test-task/svg-icons/Profile/Main/TimeOutline.svg"
                                alt="ChartOutline.svg"
                            />
                            <span>53 minutes ago</span>
                            <img
                                src="/Test-task/svg-icons/Timer/ChevronDownOutline.svg"
                                alt="ChartOutline.svg"
                            />
                        </div>
                    </li>
                    <li class="comment">
                        <p>
                            Morning of Siberia
                        </p>
                        <div class="meta">
                            <img
                                src="/Test-task/svg-icons/Profile/Main/TimeOutline.svg"
                                alt="ChartOutline.svg"
                            />
                            <span>56 minutes ago</span>
                            <img
                                src="/Test-task/svg-icons/Timer/ChevronDownOutline.svg"
                                alt="ChartOutline.svg"
                            />
                        </div>
                    </li>
                    <li class="comment">
                        <p>
                            Sunset Sunset Sunset
                        </p>
                        <div class="meta">
                            <img
                                src="/Test-task/svg-icons/Profile/Main/TimeOutline.svg"
                                alt="ChartOutline.svg"
                            />
                            <span>53 minutes ago</span>
                            <img
                                src="/Test-task/svg-icons/Timer/ChevronDownOutline.svg"
                                alt="ChartOutline.svg"
                            />
                        </div>
                    </li>
                    <li class="comment">
                        <p>
                            Morning of Siberia
                        </p>
                        <div class="meta">
                            <img
                                src="/Test-task/svg-icons/Profile/Main/TimeOutline.svg"
                                alt="ChartOutline.svg"
                            />
                            <span>56 minutes ago</span>
                            <img
                                src="/Test-task/svg-icons/Timer/ChevronDownOutline.svg"
                                alt="ChartOutline.svg"
                            />
                        </div>
                    </li>
                </ul>
            </main>
            `;
    return Content;
}
