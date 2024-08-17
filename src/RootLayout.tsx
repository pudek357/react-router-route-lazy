import type { ComponentProps, ReactNode } from "react";
import {
  NavLink as BaseNavLink,
  Outlet,
  useLocation,
  useNavigation,
} from "react-router-dom";

const NavLink = ({
  to,
  children,
}: ComponentProps<typeof BaseNavLink> & { children: ReactNode }) => (
  <BaseNavLink
    to={to}
    className="nav-link"
    end={to === "/react-router-route-lazy/"}
    unstable_viewTransition
  >
    {({ isActive, isPending, isTransitioning }) => (
      <>
        <span className="nav-link-route">{children}</span>

        <span className="nav-link-state">
          {isActive && <span className="nav-link-state-item">A</span>}
          {isPending && <span className="nav-link-state-item">P</span>}
          {isTransitioning && <span className="nav-link-state-item">T</span>}
        </span>
      </>
    )}
  </BaseNavLink>
);

export const RootLayout = () => {
  const { pathname } = useLocation();
  const navigation = useNavigation();

  return (
    <div className="container">
      <div className="topbar">current pathname: "{pathname}"</div>

      <div className="main-content">
        <div className="sidebar">
          <div>
            <NavLink to="/react-router-route-lazy/">root</NavLink>
          </div>
          <div>
            <NavLink to="/react-router-route-lazy/foo">foo</NavLink>
          </div>
          <div>
            <NavLink to="/react-router-route-lazy/bar">bar</NavLink>
          </div>
        </div>

        <div className="content">
          <div className="card">
            <h2>Content</h2>

            <div>
              {navigation.state === "loading" ? (
                <div>Loading...</div>
              ) : (
                <Outlet />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
