import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
       <img
          src="/vk-website/images/email-image.png"
          alt="Vinay Krishna"
          className="max-w-[300px]"
        />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
