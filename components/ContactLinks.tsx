import { FaWhatsapp } from "react-icons/fa";
import { TbMailCode } from "react-icons/tb";
import { MdPhoneAndroid } from "react-icons/md";

const ContactLinks = () => {
  return (
    <div className='pt-4 flex justify-center sm:justify-start gap-8'>
      <FaWhatsapp className='w-8 h-8 text-green-500' />
      <TbMailCode className='w-8 h-8 text-green-500' />
      <MdPhoneAndroid className='w-8 h-8 text-green-500' />
    </div>
  );
};

export default ContactLinks;
