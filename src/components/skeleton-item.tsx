import { ReactNode } from "react";
import './skeleton-item.scss';

interface SkeletonItemProps {
    readonly className?: string
    readonly children?: ReactNode
}

export function SkeletonItem({
    className,
    children,
}: Readonly<SkeletonItemProps>) {
    return <div className={`${className || ''} skeleton-item `}>{children}</div>
}