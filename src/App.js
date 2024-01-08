import Contactbody from "./components/contactbody";
import Footer from "./components/footer";
import Header from "./components/header";
import Homebody from "./components/homebody";
import Portfolio from "./components/portfolio";
import Workofart from "./components/workOfArt";

function App() {
  return (
    <div className="App">
      <Header />
      <Homebody />
      <Workofart />
      <Portfolio />
      <Contactbody />
      <Footer />
    </div>
  );
}

export default App;
