import { links, social } from '../data'
import logo from '../images/logo.svg'


function Nav() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {/* <!-- left this comment on purpose --> */}
                <ul className="nav-links" id="nav-links">
                    {links.map((link) => {
                        return (
                            <li>
                                <a href={link.href} className="nav-link"> {link.text} </a>
                            </li>
                        )
                    })}
                </ul>

                <ul className="nav-icons">
                    {social.map((social)=>{
                        const {id, href, target , synbol} = social
                        return(
                            <li key ={id}>
                                <a href = {href} target = {target} rel="noreferrer" className = 'nav-icon'>
                                    <i className = {synbol}></i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Nav
