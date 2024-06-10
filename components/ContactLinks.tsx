import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { TbMailCode } from "react-icons/tb";
import { Button } from "./ui/button";

const ContactLinks = () => {
  return (
    <div className='pt-4 flex justify-center sm:justify-start gap-6 z-40'>
      <Button
        asChild
        variant='outline'
        size='icon'
        className='p-6 bg-green-300 dark:bg-gray-700 z-40 transition duration-700 rounded-full hover:rounded-lg hover:scale-125 hover:rotate-[360deg] hover:bg-green-200  '>
        <Link href='https://wa.me/2348063856120'>
          <FaWhatsapp className='w-6 h-6 shrink-0 text-white hover:text-green-600' />
        </Link>
      </Button>
      <Button
        asChild
        variant='outline'
        size='icon'
        className='p-6 bg-green-300 dark:bg-gray-700 z-40 transition duration-700 rounded-full hover:rounded-lg hover:scale-125 hover:rotate-[360deg] hover:bg-green-200  '>
        <Link href='mailto:ask@soft-lutions.com.ng'>
          <TbMailCode className='w-6 h-6  shrink-0 text-white hover:text-green-600' />
        </Link>
      </Button>

      <Button
        asChild
        variant='outline'
        size='icon'
        className='p-6 bg-green-300 dark:bg-gray-700 z-40 transition duration-500 rounded-full hover:rounded-lg hover:scale-125 hover:rotate-[360deg] hover:bg-green-200  '>
        <Link href='tel:+2348063856120'>
          <MdPhoneAndroid className='w-6 h-6  shrink-0 text-white hover:text-green-600' />
        </Link>
      </Button>
    </div>
  );
};

export default ContactLinks;
