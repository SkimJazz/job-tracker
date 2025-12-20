import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  /**
   * The error object returned by the useRouteError hook.
   * Contains information about the error encountered during route rendering.
   * @type {unknown}
   */
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error</h1>
      <Link to="/">back home</Link>
    </div>
  );
};
export default Error;
