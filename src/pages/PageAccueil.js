import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import PartOne from "../components/PartOne";
import PartQuiSuisJe from "../components/PartQuiSuisJe";
import PartProjet from "../components/PartProjet";
import PartExperience from "../components/PartExperience";
import PartQVT from "../components/PartQVT";
import PartCV from "../components/PartCV";
import PartForms from "../components/PartForms";
import Footer from "../components/Footer";
import PartPourquoiMoi from "../components/PartPourquoiMoi";
import ScrollToTopOverlay from "../components/ScrollToTopOverlay";

function PageAccueil() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash.substr(1));
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <PartOne />
        <PartQuiSuisJe />
        <PartProjet />
        <PartExperience />
        <PartQVT />
        <PartPourquoiMoi />
        <PartCV />
        <PartForms />
      </main>
      <footer>
        <Footer />
      </footer>
      <ScrollToTopOverlay />
    </div>
  );
}

export default PageAccueil;
