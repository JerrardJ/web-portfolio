import ContactSocials from "./ContactSocials";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Contact() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Jerrard Joevin | Contact</title>
      </Helmet>
      <div className="flex w-full flex-col bg-mainBg px-8 pt-5">
        <ContactSocials />
      </div>
    </HelmetProvider>
  );
}

export default Contact;
