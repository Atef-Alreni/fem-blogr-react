import './styles/Footer.css';
import {links} from './data/links.js';

function Footer(){
    return (
        <footer class="footer">
            <div class="footer-flex contain-width">
                <div class="logo">Blogr</div>
                <div class="footer-links">
                    {links.map(( {title, links} ) => {
                        return (
                            <div className={title}>
                                <h5>{title}</h5>
                                <ul>
                                    {links.map(link => {
                                        return <li>{link}</li>
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
