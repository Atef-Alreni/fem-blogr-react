import './styles/Navbar.css';

function Navbar({children}){ 
    return (
        <>
            <div className="logo-nav-login-signup">
                <div className="logo-nav">
                    <h2 className="logo-nav__logo">Blogr</h2>
                    <nav className="logo-nav__nav">
                        <ul className="logo-nav__nav-items">
                            {children}
                        </ul>
                    </nav>
                </div>
                <div className="login-signup">
                    <ul className="login-signup__nav-items">
                        <li className="login">Login</li>
                        <li className="signup">Sign up</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;