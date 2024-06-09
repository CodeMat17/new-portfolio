import { FaWhatsapp } from "react-icons/fa";
import { TbMailCode } from "react-icons/tb";
import { MdPhoneAndroid } from "react-icons/md";
import { Button } from "./ui/button";

const ContactLinks = () => {
  return (
    <div className='pt-4 flex justify-center sm:justify-start gap-6 z-40'>
      <Button
        variant='outline'
        size='icon'
        className='p-6 bg-green-300 dark:bg-gray-700 z-40 transition duration-700 rounded-full hover:rounded-lg hover:scale-125 hover:rotate-[360deg] hover:bg-green-200  '>
        <FaWhatsapp className='w-6 h-6 shrink-0 text-white hover:text-green-600' />
      </Button>
      <Button
        variant='outline'
        size='icon'
        className='p-6 bg-green-300 dark:bg-gray-700 z-40 transition duration-700 rounded-full hover:rounded-lg hover:scale-125 hover:rotate-[360deg] hover:bg-green-200  '>
        <TbMailCode className='w-6 h-6  shrink-0 text-white hover:text-green-600' />
      </Button>

      <Button
        variant='outline'
        size='icon'
        className='p-6 bg-green-300 dark:bg-gray-700 z-40 transition duration-500 rounded-full hover:rounded-lg hover:scale-125 hover:rotate-[360deg] hover:bg-green-200  '>
        <MdPhoneAndroid className='w-6 h-6  shrink-0 text-white hover:text-green-600' />
      </Button>
    </div>
  );
};

export default ContactLinks;
