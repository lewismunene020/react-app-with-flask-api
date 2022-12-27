import { useRouteError } from "react-router-dom";

import "./css/ErrorPage.css"
import "./css/Utils.css"


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);


  return (
    <div id="error-page" className="flex column top-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
          <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );

}

