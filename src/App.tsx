import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import "./App.css";
import Layout from "./components/layout";
import "./fonts/TestFinancierDisplay-Regular.otf";
import GlobalStyle from "./globalStyle";
import AboutMe from "./pages/aboutMe";
import HomePage from "./pages/home";
import MainTheme from "./theme/mainTheme";
import Navbar from "./components/navbar/navbar";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainTheme>
        <Navbar />
        <Layout width={"200vw"}>
          <div>
            <HomePage />
          </div>
          <div>
            <AboutMe />
          </div>
        </Layout>
      </MainTheme>
    </>
  );
};

export default App;
