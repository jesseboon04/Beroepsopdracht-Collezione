import Navigation from "./Navigation/Navigation";
import ContentHome from "./Content_Homepage/Content";
import Features from "../Components/Features/Features";
import FeaturesSection from "../Components/FeaturesSection/FeaturesSection";
import ContactForm from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";
import Abonementen from "../Components/Abonementen/Abonementen";
import AbonementenSection from "../Components/AbonementenSection/AbonementenSection";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Homepage = (props) => {
  return (
    <>
   
        <Navigation />
        <ContentHome />
        <FeaturesSection titleSection="Choise of sport">
          <div class="section__wrapper">
            <Features
              image="truck.png"
              h2="Gratis en snelle levering"
              p="In Nederland gratis en levering binnen een paar dagen."
            />
            <Features
              image="safety-111.png"
              h2="Veilig"
              p="Veilig en eerlijk bedrijf willen het beste voor de klant."
            />
            <Features
              image="phone.webp"
              h2="Klanten Service"
              p="Hebben een klanten service 9:00 t/m 20:00."
            />
            <Features
              image="vier.png"
              h2="Nummer 1 sportwinkel"
              p="De beste sportwinkel van nederland met het beste assortiment."
            />
          </div>
        </FeaturesSection>

        <AbonementenSection titleSection="Mystrie Boxen">
          <Abonementen
            image="voetbal.jpg"
            h2="Voetbal accessoires"
            p="Dit is een mystrie box met 5 voetbalaccesiores"
          />
          <Abonementen
            image="tennes5.jpg"
            h2="Padel en Tennis accesiores"
            p="Dit is een mystrie box met 5 voetbalaccesiores"
          />

          <Abonementen
            image="fitness.jpg"
            h2="Fitness accessoires"
            p="Dit is een mystrie box met 5 voetbalaccesiores"
          />
        </AbonementenSection>
        <ContactForm />
        <Footer />
     
    </>
  );
};
export default Homepage;
