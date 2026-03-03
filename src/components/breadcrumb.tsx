import { AnyRouteMatch, Link, useRouterState } from "@tanstack/react-router";
import { FaChevronRight } from "react-icons/fa6";


export type BreadcrumbValue =
  | string
  | string[]
  | ((match: AnyRouteMatch) => string | string[]);

type ResolvedBreadcrumbItem = {
  path: string;
  label: string;
};

export function RouterBreadcrumb() {
  const matches = useRouterState({ select: (s) => s.matches })

  console.log("matches:", matches);

  const breadcrumbs: ResolvedBreadcrumbItem[] = matches.flatMap((match) => {
    const staticData = match.staticData;
    if (!staticData?.breadcrumb) return [];

    const breadcrumbValue =
      typeof staticData.breadcrumb === "function"
        ? staticData.breadcrumb(match)
        : staticData.breadcrumb;

    const items = Array.isArray(breadcrumbValue)
      ? breadcrumbValue
      : [breadcrumbValue];

    return items.map((item) => ({
      label: item,
      path: match.pathname,
    }));
  });

  if (breadcrumbs.length === 0) {
    return null;
  }

  console.log("Breadcrumbs:", breadcrumbs);

  return (
    <nav aria-label='Breadcrumb' className='breadcrumb'>
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <span className='breadcrumb__item' key={`${crumb.path}-${index}`}>
            {isLast ? (
              <span aria-current='page' className='breadcrumb__current'>
                {crumb.label}
              </span>
            ) : (
              <>
                <Link className='breadcrumb__item__link' to={crumb.path}>
                  {crumb.label}
                </Link>
                <FaChevronRight />
              </>
            )}
          </span>
        );
      })}
    </nav>
  );
}