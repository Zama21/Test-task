(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();function v(){const t=document.querySelectorAll("[data-link]"),e=window.location.pathname;t.forEach(s=>{s.getAttribute("href")===e?s.classList.add("active"):s.classList.remove("active")})}class O{constructor(e){this.routes=e,this.loadRoute(),this.init()}init(){document.body.addEventListener("click",e=>{const s=e.target.closest("[data-link]");if(e.target.matches("[data-link]")||s&&s.hasAttribute("data-link")){e.preventDefault();const n=s.getAttribute("href");this.navigateTo(n),document.querySelectorAll(".item").forEach(a=>{a.classList.remove("active")}),s.classList.add("active")}}),window.addEventListener("popstate",()=>{this.loadRoute(),v()}),window.addEventListener("load",()=>{if(v(),window.location.pathname==="/Test-task/"){const e=document.querySelector('[href="/Test-task/activity"]');e&&e.classList.add("active")}})}navigateTo(e){history.pushState(null,null,e),this.loadRoute(),window.dispatchEvent(new PopStateEvent("popstate"))}async loadRoute(){const e=this.routes.find(s=>s.path===location.pathname)||this.routes.find(s=>s.path==="*");document.querySelector("#app").innerHTML=await e.component.render()}}class o{constructor(e,s){this.path=e,this.component=s}}function k(){return`
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
                `}function y(){return`
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
`}let p;function C(t,e){ymaps.ready(()=>{var s=new ymaps.Map("map",{center:[t,e],zoom:10});[{coords:[56.7416,37.1741],hint:"Дубна",balloon:"Город Дубна"},{coords:[55.7558,37.6176],hint:"Москва",balloon:"Столица России"},{coords:[56.8666,37.3575],hint:"Кимры",balloon:"Кимры"},{coords:[56.8596,35.9118],hint:"Тверь",balloon:"Тверь"}].forEach(({coords:i,hint:a,balloon:r})=>{var w=new ymaps.Placemark(i,{hintContent:a,balloonContent:r});s.geoObjects.add(w)}),document.getElementById("loader").style.display="none"})}function g(){clearInterval(p),C(56.7416,37.1741)}document.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://api-maps.yandex.ru/2.1/?apikey=9158bc72-59d0-4f5d-bb92-1210f630ca4b&lang=ru_RU",window.location.pathname==="/map"&&(t.onload=g),document.head.appendChild(t)});function h(){window.location.pathname==="/Test-task/map"&&(p=setInterval(()=>{document.querySelector("#map")&&g()},100))}window.addEventListener("popstate",h);window.addEventListener("load",h);function S(){return{render(){return`
                 <div class="wrapperMainMap">
                    <div class="wrapperHeader">
                        <span class="mapText">Basic map</span>
                        <ul class="wrapperBtns">
                            <li class="item">
                                <img
                                    src="/Test-task/svg-icons/Timer/ChevronDownOutline.svg"
                                    alt="ChartOutline.svg"
                                />
                            </li>
                            <li class="item">
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
                    <div class="wrapperMap">
                        <div id="map"></div>
                        <div id="loader" class="loader">
                            <img
                                    src="/Test-task/svg-icons/Map/RedoOutline.svg"
                                    alt="ReceiptOutline.svg"
                                />
                        </div>
                    </div>
                </div>
                </div>
            `}}}const P="/Test-task/assets/abstractPurple-CRzWDdzD.jpg";function M(){return`
            <main class="profileMain">
                <div class="heroSection">
                    <div class="wrapperMainSection">
                        <img src=${P} alt="mainImg" />
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
            `}const A="/Test-task/assets/Avatar-Bdg_jx1q.jpg";function b(){return`
            <aside class="wrapperAside">
                <div class="headerAside">
                    <div class="wrapper">
                        <div class="avatar">
                            <img src=${A} alt="avatar" />
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
            `}function m(){return{async render(){return`
                <div class="wrapperMainProfile">
                    ${M()}
                    ${b()}
                </div>
            `}}}let f,c,l;function L(t){const e=Math.floor(t/3600),s=Math.floor(t%3600/60),n=t%60;return`${String(e).padStart(2,"0")}:${String(s).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function T(){f=Date.now()}function d(){c||(c=document.querySelector(".time"),E()),c.textContent=L(Math.floor((Date.now()-f)/1e3)),l=window.requestAnimationFrame(d)}function H(){window.location.pathname==="/Test-task/timer"?(c=void 0,l||window.requestAnimationFrame(d)):(window.cancelAnimationFrame(l),l=void 0)}function E(){document.querySelector(".resetTimerBtn").addEventListener("click",T)}window.addEventListener("popstate",H);window.addEventListener("DOMContentLoaded",()=>{T(),window.location.pathname==="/Test-task/timer"&&(l||(l=window.requestAnimationFrame(d)))});function R(){return{async render(){return`
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
            `}}}async function u(t){const e=document.getElementById("header");e.innerHTML+=t}u(k()).then(()=>u(y()));const D=[new o("/Test-task/timer",new R),new o("/Test-task/map",new S),new o("/Test-task/activity",new m),new o("*",new m)];new O(D);
