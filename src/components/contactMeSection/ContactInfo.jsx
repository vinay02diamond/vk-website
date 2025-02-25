import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="vinay.krishna.nov30@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91-6360044825" Image={FiPhone} />
      <SingleInfo text="Bengaluru,Karnataka-India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
