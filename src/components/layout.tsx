import { PropsWithChildren } from "react"
import "./layout.scss"
import { SideNav } from "./nav/side-nav"


interface LayoutProps {
    showNav?: boolean
}

export function Layout({
    showNav,
    children,
}: PropsWithChildren<LayoutProps>) {
    return (
        <div className="layout">
            {showNav && <SideNav />}
            {children}
        </div>
    )
}