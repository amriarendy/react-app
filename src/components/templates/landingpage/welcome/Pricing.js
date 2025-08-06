import TitleDescription from "../../../molecules/title/TitleDescription";

const Pricing = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <TitleDescription
          label={"Pricing"}
          description={
            "Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales."
          }
        />
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="tier-freelancer"
                className="text-lg font-semibold leading-8 text-gray-900 dark:text-white"
              >
                Freelancer
              </h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-white">
              The essentials to provide your best work for clients.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                $15
              </span>
              <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-white">
                /month
              </span>
            </p>
            <a
              href="#"
              aria-describedby="tier-freelancer"
              className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white"
            >
              Buy plan
            </a>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
            >
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                5 products
              </li>
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Up to 1,000 subscribers
              </li>
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Basic analytics
              </li>
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                48-hour support response time
              </li>
            </ul>
          </div>
          <div className="rounded-3xl p-8 ring-2 ring-indigo-600 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="tier-startup"
                className="text-lg font-semibold leading-8 text-indigo-600 dark:text-white"
              >
                Startup
              </h3>
              <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600 dark:text-white">
                Most popular
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-white">
              A plan that scales with your rapidly growing business.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                $30
              </span>
              <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-white">
                /month
              </span>
            </p>
            <a
              href="#"
              aria-describedby="tier-startup"
              className="mt-6 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white"
            >
              Buy plan
            </a>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
            >
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                25 products
              </li>
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Up to 10,000 subscribers
              </li>
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Advanced analytics
              </li>
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                24-hour support response time
              </li>
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Marketing automations
              </li>
            </ul>
          </div>
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="tier-enterprise"
                className="text-lg font-semibold leading-8 text-gray-900 dark:text-white"
              >
                Enterprise
              </h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-white">
              Dedicated support and infrastructure for your company.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                $60
              </span>

              <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-white">
                /month
              </span>
            </p>
            <a
              href="#"
              aria-describedby="tier-enterprise"
              className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-white"
            >
              Buy plan
            </a>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
            >
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Unlimited products
              </li>
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Unlimited subscribers
              </li>
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Advanced analytics
              </li>
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                1-hour, dedicated support response time
              </li>
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Marketing automations
              </li>
              <li className="flex gap-x-3 dark:text-white">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600 dark:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Custom reporting tools
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
