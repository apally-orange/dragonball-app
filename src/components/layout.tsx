import { RouterBreadcrumb } from "@/components/breadcrumb"
import { useRouter } from "@tanstack/react-router"
import { PropsWithChildren } from "react"
import { FaArrowLeft } from 'react-icons/fa6'
import "./layout.scss"
import { SideNav } from "./nav/side-nav"


interface LayoutProps {
    showNav?: boolean
}

export function Layout({
    showNav,
    children,
}: PropsWithChildren<LayoutProps>) {
    const router = useRouter()

    return (
        <div className="layout">
            {showNav && <SideNav />}
            <div className="layout__content">
                <div className="layout__content__breadcrumbs">
                    <button
                        onClick={() => router.history.back()}
                    >
                        <FaArrowLeft />
                    </button>
                    {showNav && <RouterBreadcrumb />}
                </div>
                {children}
            </div>
        </div>
    )
}