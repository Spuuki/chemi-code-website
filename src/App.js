import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Helmet from "react-helmet";

import Logo from "./images/logo.webp";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chemi Code</title>
      </Helmet>

      <header>
      </header>

      <body>
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 primary-background">
          <img src={Logo} alt="" className="Logo img-fluid"></img>
          <h2 className="text">Website in development,</h2>
          <h2 className="text">come back soon!</h2>
        </div>
      </body>

    </div>

  );
}

export default App;
