import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contactbody from "./components/contactbody";
import Footer from "./components/footer";
import Header from "./components/header";
import Homebody from "./components/homebody";
import Portfolio from "./components/portfolio";
import Workofart from "./components/workOfArt";
import Privacy from "./components/privacy-policy";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homebody />} />
          <Route path="/workofart" element={<Workofart />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/clients" element={<Contactbody />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Homebody />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
