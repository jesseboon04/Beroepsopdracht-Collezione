import Navigation from "./Navigation/Navigation";
import ContentHome from "./Content_Homepage/Content";
import Features from "../Components/Features/Features";
import FeaturesSection from "../Components/FeaturesSection/FeaturesSection";
import ContactForm from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";
import Abonementen from "../Components/Abonementen/Abonementen";
import AbonementenSection from "../Components/AbonementenSection/AbonementenSection";


const Homepage = (props) => {

    return (
      <>
        <Navigation />
        <ContentHome />
        <FeaturesSection titleSection="Choise of sport">
                <div class="section__wrapper">
                    <Features image="truck.png"  h2="Fast delivery" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
                    <Features image="safety-111.png" h2="Safety" p="Safety contact with Companies, Brands and Persons" />
                    <Features image="truck.png"  h2="Fast delivery" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
                    <Features image="vier.png" h2="Nummer 1 vacaturensite" p="Nummer 1 vacaturensite met elke maand meer dan 300 miljoen gebruikers." />
                </div>
          </FeaturesSection>
         
          <AbonementenSection titleSection="Mystrie Boxen">
            <Abonementen image="voetbal.jpg" h2="Voetbal accessoires" p="Dit is een mystrie box met 5 voetbalaccesiores"/>
            <Abonementen image="tennes5.jpg" h2="Padel en Tennis accesiores" p="Dit is een mystrie box met 5 voetbalaccesiores"/>

            <Abonementen image="fitness.jpg" h2="Fitness accessoires" p="Dit is een mystrie box met 5 voetbalaccesiores"/>


          </AbonementenSection>
          <ContactForm />
          <Footer/>
      </>
      
    )
  }
  export default Homepage;