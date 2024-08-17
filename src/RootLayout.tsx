import { Link, Outlet, useLocation, useNavigation } from "react-router-dom";

export const RootLayout = () => {
  const { pathname } = useLocation();
  const navigation = useNavigation();

  return (
    <div className="container">
      <div className="topbar">current pathname: "{pathname}"</div>

      <div className="main-content">
        <div className="sidebar">
          <div>
            <Link to="/react-router-route-lazy/">root</Link>
          </div>
          <div>
            <Link to="/react-router-route-lazy/foo">foo</Link>
          </div>
          <div>
            <Link to="/react-router-route-lazy/bar">bar</Link>
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
