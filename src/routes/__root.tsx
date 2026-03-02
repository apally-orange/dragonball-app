import { Error } from '@/components/error';
import { Loading } from '@/components/loading';
import { SideNav } from '@/components/nav/side-nav';
import { TanStackDevtools } from '@tanstack/react-devtools';
import type { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  errorComponent: () => <Error />,
  pendingComponent: () => <Loading />,
  notFoundComponent: () => <div>Page not found</div>,
})

export interface RouterContext {
  queryClient: QueryClient
}

function RootComponent() {
  return (
    <>
      <div className="app-layout">
        <SideNav />
        <div className="main-content">
          <Outlet />
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'TanStack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        </div>
      </div>
    </>
  )
}
