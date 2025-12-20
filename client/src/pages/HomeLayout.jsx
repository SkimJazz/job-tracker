import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  /**
   * What ever elements you set around the <Outlet /> component will be
   * rendered on every page (All children pages) that uses this layout.
   * For example, a Navbar or Footer can be placed here.
   */
  return (
    <div>
      {/* add things like Navbar */}
      {/* <h1>home layout</h1> */}
      <Outlet />
    </div>
  );
};
export default HomeLayout;
