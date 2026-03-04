import { createLink, LinkComponent } from "@tanstack/react-router";
import React from "react";
import "./nav-link.scss";

interface NavLinkProps {
    isReduced?: boolean;
    pathIcon: string;
    children: React.ReactNode;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => (
    <div className="nav-link">
        <img className="nav-link__icon" src={props.pathIcon} />
        <a ref={ref} {...props} className="nav-link__text">
            {props.isReduced ? null : props.children}
        </a>
    </div>
));

export const TanStackLinkComponent = createLink(NavLink);

export const CustomNavLink: LinkComponent<typeof TanStackLinkComponent> = (
    props
) => {
    return (
        <TanStackLinkComponent
            preload={"intent"}
            activeProps={{
                variant: "default",
            }}
            {...props}
        />
    );
};