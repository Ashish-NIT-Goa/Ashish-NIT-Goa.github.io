import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Footer from "./components/Footer/Footer";

const siteProps = {
  name: "Ashish Singh",
  title: "Aspiring Data Scientist",
  email: "gm.ashishsingh@gmail.com",
  gitHub: "45H15H",
  instagram: "ashishsin9h159",
  linkedIn: "45h15h",
  medium: "",
  twitter: "",
  youTube: "",
  kaggle: "ashish51ngh",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Services />
      <Portfolio />
      <GetInTouch />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
