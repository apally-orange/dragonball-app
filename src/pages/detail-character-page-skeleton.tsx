import { SkeletonItem } from "@/components/skeleton-item";
import './detail-character-page-skeleton.scss';

export function DetailCharactersSkeletonPage() {

    return (
        <div className="detail-character-skeleton">
            <SkeletonItem className="detail-character-skeleton__title" />
            <div className="detail-character-skeleton__body">
                <SkeletonItem className="detail-character-skeleton__body__image" />
                <div className="detail-character-skeleton__body__description">
                    <SkeletonItem className="detail-character-skeleton__body__description__line" />
                    <SkeletonItem className="detail-character-skeleton__body__description__line" />
                    <SkeletonItem className="detail-character-skeleton__body__description__line" />
                </div>
            </div>
        </div>
    )
}