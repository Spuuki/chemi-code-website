import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Helmet from "react-helmet";

import Logo from "./images/newlogo.webp";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chemi Code</title>
      </Helmet>

      <header>
      </header>

      <body className="d-flex flex-column align-items-center justify-content-center primary-background min-vh-100">
        <img src={Logo} alt="" className="Logo img-fluid"></img>
        <h2 className="text my-3">Website in development,</h2>
        <h2 className="text">come back soon!</h2>
      </body>

    </div>

  );
}

export default App;
