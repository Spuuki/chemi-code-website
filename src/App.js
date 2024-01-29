import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


import Logo from "./images/logo.webp";

function App() {
  return (
    <div>
      <header>
      </header>

      <body className="d-flex align-items-center justify-content-center vh-100 primary-background">
        <div className="">
          <img src={Logo} alt="" className="Logo"></img>
          <h2 className="text">Website in development,</h2>
          <h2 className="text">come back soon!</h2>
        </div>
      </body>

    </div>

  );
}

export default App;
