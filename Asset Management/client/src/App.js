// import logo from './logo.svg';
import "./App.css";

import Footer from "./layouts/footer/footer.component.js";
import Header from "./layouts/header/header.component.js";
import Sidebar from "./layouts/sidebar/sidebar.component.js";
import Router from "./routes/route.js";



const App = () => {
  return (
    <div className="wrapper">
      <div className="body-overlay"></div>

      <div className="content">
        <Header />

        <Sidebar />

        <div className="main-content">

<Router/>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
