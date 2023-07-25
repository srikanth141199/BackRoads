import { links, social } from '../data'

function Footer() {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {links.map((link) => {
                    return (
                        <li>
                            <a href={link.href} className="footer-link"> {link.text} </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="footer-icons">
                {social.map((social) => {
                    const { id, href, target, synbol } = social
                    return (
                        <li key={id}>
                            <a href={href} target={target} rel="noreferrer" className='footer-icon'>
                                <i className={synbol}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer