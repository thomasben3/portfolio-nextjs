import Drawer from '../components/Drawer/Drawer';
import Footer from '../components/Footer';
import GradientTitle from '../components/GradientTitle';
import { getTranslations } from 'next-intl/server';
import ContactCard from './ContactCard';
import { IoMail } from 'react-icons/io5';
import { FaLinkedin, FaPhone } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { AiFillGithub } from 'react-icons/ai';

const ContactsPage = async () => {
  const contactDict = await getTranslations("contact");

  return (
    <>
      <Drawer />
      <div className="flex flex-col flex-grow justify-between items-center min-h-screen p-[2rem] pt-20 bg-background">

        <div className="flex flex-col items-center">
          <GradientTitle>{contactDict("pageTitle")}</GradientTitle>
          <div className="w-28 bg-gray-400 my-2" style={{ height: "0.5px" }} />
          <p className="text-sm text-center mb-8" style={{ color: 'var(--foreground-secondary)' }}>
            {contactDict("pageDescription")}
          </p>
        </div>

        <div className="w-full max-w-4xl space-y-6">

          {/* Email Card */}
          <a href="mailto:thomasbensemhoun1@gmail.com" className='block'>
            <ContactCard title={contactDict("email")} icon={<IoMail color="black" size={32} />}>
              <span className='text-blue-500 text-lg'>thomasbensemhoun1@gmail.com</span>
            </ContactCard>
          </a>

          {/* Phone Card */}
          <a href="sms:+33674652562" className='block'>
            <ContactCard title={contactDict("phone")} icon={<FaPhone color="black" size={32} />}>
              <span className='text-blue-500 text-lg'>+33 6 74 65 25 62</span>
            </ContactCard>
          </a>

          {/* Social Media Cards */}
          <ContactCard title={contactDict("socialNetworks")} icon={<TbWorld color='black' size={32} />}>
            <div className='flex justify-evenly'>
              <a href='https://github.com/thomasben3' target='_blank' className='flex flex-col items-center group'>
                <AiFillGithub className='fill-black group-hover:fill-gray-700 transition-all duration-150' size={32} />
                <span className='text-blue-500 group-hover:text-blue-400 transition-all duration-150'>Github</span>
              </a>
              <a href='https://www.linkedin.com/in/thomas-bensemhoun-849495314/' target='_blank' className='flex flex-col items-center group'>
                <FaLinkedin className='fill-blue-600 group-hover:fill-blue-500 transition-all duration-150' size={32} />
                <span className='text-blue-500 group-hover:text-blue-400 transition-all duration-150'>Linkedin</span>
              </a>
            </div>
          </ContactCard>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactsPage;
