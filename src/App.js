import "./App.css";
import AboutSection from "./components/About";
import ServicesSection from "./components/Services";
import SkillsSection from "./components/Skills";
import ResumeSection from "./components/Resume";
import WeaponsSection from "./components/Weapons";
import ContactSection from "./components/Contact";
import ProgressNav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <div className="App body-piling">
      <div className="wrapper">
        {/* <!-- Preloader --> */}
        <div className="preloader"></div>
        <Header />
        <div id="content">
          <div className="a-pagepiling full-page">
            <AboutSection />
            <ServicesSection />
            <SkillsSection />
            <ResumeSection />
            <WeaponsSection />
            <ContactSection />
            <ProgressNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
