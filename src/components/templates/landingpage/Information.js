import AboutBacgkround from "../../molecules/backgrounds/AboutBacgkround";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import ContactUs from "../../molecules/forms/ContactUs";

const Information = ({ useOpen }) => {
  console.log("useOpen: ", useOpen);
  return (
    <>
      <div className="relative isolate">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              {!useOpen && <AboutBacgkround />}
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                About & Contact Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-white">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <HiBuildingOffice2
                      className="h-7 w-10 text-gray-400"
                      fill="none"
                      viewBox="0 0 20 20"
                      strokeWidth="1.0"
                      stroke="currentColor"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    545 Mavis Island
                    <br />
                    Chicago, IL 99191
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <BsTelephone
                      className="h-7 w-10 text-gray-400"
                      fill="none"
                      viewBox="0 0 20 20"
                      strokeWidth="1.0"
                      stroke="currentColor"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="tel:+1 (555) 234-5678"
                    >
                      +1 (555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <CiMail
                      className="h-7 w-10 text-gray-400"
                      fill="none"
                      viewBox="0 0 20 20"
                      strokeWidth="1.0"
                      stroke="currentColor"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="mailto:hello@example.com"
                    >
                      hello@example.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action="#"
            method="POST"
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          >
            <ContactUs />
          </form>
        </div>
      </div>
    </>
  );
};

export default Information;
