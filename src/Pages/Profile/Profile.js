import './Profile.css';
import Main from './Components/main/Main';
import Aside from './Components/aside/Aside';

export default function Profile() {
    return {
        async render() {
            const Content = `
                <div class="wrapperMainProfile">
                    ${Main()}
                    ${Aside()}
                </div>
            `;
            return Content;
        },
    };
}
