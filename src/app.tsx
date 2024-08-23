import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import CaseStudiesSection from "./components/sections/case-studies-section/case-studies-section";
import CompanySection from "./components/sections/company-section/company-section";
import ContactUsSection from "./components/sections/contact-us-section/contact-us-section";
import CtaSection from "./components/sections/cta-section/cta-section";
import HeroSection from "./components/sections/hero-section/hero-section";
import OurWorkingProcessSection from "./components/sections/our-working-process-section/our-working-process-section";
import ServicesSection from "./components/sections/services-section/services-section";
import TeamSection from "./components/sections/team-section/team-section";
import TestimonialsSection from "./components/sections/testimonials-section/testimonials-section";
import data from "./data";

const App = () => {
  return (
    <>
      <Navbar data={data.navlinks} />
      <HeroSection className={styles["hero-section"]} />
      <CompanySection
        className={styles["company-section"]}
        data={data.companies}
      />
      <ServicesSection
        className={styles["services-section"]}
        data={data.services}
      />
      <CtaSection className={styles["cta-section"]} />
      <CaseStudiesSection
        className={styles["case-studies-section"]}
        data={data.caseStudies}
      />
      <OurWorkingProcessSection
        className={styles["our-working-process-section"]}
        data={data.ourWorkingProcess}
      />
      <TeamSection className={styles["team-section"]} data={data.team} />
      <TestimonialsSection
        className={styles["testimonials-section"]}
        data={data.testimonials}
      />
      <ContactUsSection className={styles["contact-us-section"]} />
      <Footer navLinks={data.navlinks} socialMedia={data.socialMedia} />
    </>
  );
};

export default App;
