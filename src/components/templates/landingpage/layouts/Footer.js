import Logo from "../../../elements/logo/Logo";
import BottomMenu from "../../../organisms/landingpage/layouts/BottomMenu";
import BottomMoreDetail from "../../../organisms/landingpage/layouts/BottomMoreDetail";
import { FaFacebookF, FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bottom-0 z-50 w-full bg-gray-900 text-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Logo route={"/"}>React.JS</Logo>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <BottomMenu
                label="Resources"
                links={[
                  ["Flowbite", "https://flowbite.com/"],
                  ["Tailwind CSS", "https://tailwindcss.com"],
                ]}
              />
              <BottomMenu
                label="Follow us"
                links={[
                  ["Github", "https://github.com/"],
                  ["Discord", "https://discord.com"],
                ]}
              />
              <BottomMenu
                label="Social Media"
                links={[
                  ["Instagram", "https://instagram.com/"],
                  ["Linkedin", "https://linkedin.com/"],
                ]}
              />
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <BottomMoreDetail
            detail="© 2025 Amria Rendy. All Rights Reserved."
            links={[
              [<FaFacebookF className="w-4 h-4" />, "https://facebook.com/"],
              [<FaTwitter className="w-4 h-4" />, "https://twitter.com/"],
              [<FaGithub className="w-4 h-4" />, "https://github.com/"],
              [<FaDiscord className="w-4 h-4" />, "https://discord.com/"],
            ]}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
