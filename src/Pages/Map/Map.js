import './MapLogic';
import './Map.css';

export default function Map() {
    return {
        render() {
            const Content = `
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
            `;
            return Content;
        },
    };
}
