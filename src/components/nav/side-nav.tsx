import { useState } from "react";
import { FaMattressPillow } from "react-icons/fa6";
import { CustomNavLink } from "./nav-link";
import "./side-nav.scss";

export const SideNav = () => {
    const [isReduced, setIsReduced] = useState<boolean>(false)

    return (

        <nav className={`side-nav ${isReduced ? 'side-nav--reduced' : ''}`}>
            <div className="side-nav__header">
                <button onClick={() => setIsReduced((prev) => !prev)}>
                    <FaMattressPillow size={20} />
                </button>
            </div>
            <ul className={`side-nav__list ${isReduced ? 'side-nav__list--reduced' : ''}`}>
                <CustomNavLink
                    isReduced={isReduced}
                    pathIcon="src/images/dashboard.svg"
                    to='/'>
                    Dashboard
                </CustomNavLink>
                <CustomNavLink
                    isReduced={isReduced}
                    pathIcon="src/images/account.svg"
                    to='/characters'>
                    Personnages
                </CustomNavLink>
                <CustomNavLink
                    isReduced={isReduced}
                    pathIcon="src/images/information.svg"
                    to='/about'>
                    About
                </CustomNavLink>
            </ul>
        </nav>
    )
}