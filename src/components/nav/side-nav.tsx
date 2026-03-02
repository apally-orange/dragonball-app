import { CustomNavLink } from "./nav-link";
import "./side-nav.scss";

export const SideNav = () => {
    return (
        <aside className="side-nav">
            <nav>
                <ul className="side-nav__list">
                    <CustomNavLink
                        pathIcon="src/images/dashboard.svg"
                        to='/'>
                        Dashboard
                    </CustomNavLink>
                    <CustomNavLink
                        pathIcon="src/images/account.svg"
                        to='/characters'>
                        Personnages
                    </CustomNavLink>
                    <CustomNavLink
                        pathIcon="src/images/information.svg"
                        to='/about'>
                        About
                    </CustomNavLink>
                </ul>
            </nav>
        </aside>
    )
}