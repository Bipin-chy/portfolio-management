import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/Layout/NavBar/NavBar";
import Routes from "./routes/routes";
import Footer from "./components/Layout/Footer/Footer";
import ScrollToTop from "./components/ScrollTop";
import { useEffect } from "react";
import { Dashboard } from "./Pages";
import UserPrivateRoutes from "./routes/userPrivateRoutes";
import { Transaction } from "./Pages";
import { Portfolio } from "./Pages";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const pageRoutes = () => {
    return (
      <div className="App">
        <div className="app-body">
          <ScrollToTop />
          <NavBar />
          <Routes />
          <Footer />
        </div>
      </div>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <UserPrivateRoutes
            path="/user/transaction"
            component={withRouter(Transaction)}
          />
          <UserPrivateRoutes
            path="/user/portfolio"
            component={withRouter(Portfolio)}
          />
          <Route exact component={pageRoutes} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
