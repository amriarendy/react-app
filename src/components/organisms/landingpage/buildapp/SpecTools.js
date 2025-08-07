import { FaNode, FaNodeJs, FaReact, FaNpm } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiExpress, SiMysql } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";

const SpecTools = () => {
  return (
    <div className="text-justify pb-8">
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        #Tools and Tech Stack
      </h2>

      <div className="text-xl grid grid-cols-1 px-4 pt-6 lg:grid-cols-4 gap-4 mb-4 dark:bg-gray-800">
        <div className="col-start-2 col-span-2 rounded-lg border-gray-300 dark:border-gray-600 h-48 sm:col-start-1 md:col-start-1 md:h-72">
          <h3 className="font-semibold mb-3 dark:text-white">Tools Specification</h3>
          <ul className="mb-6 max-w-xl space-y-3 text-gray-600 dark:text-white">
            <li className="flex gap-x-3">
              <FaNodeJs className="mt-1 h-5 w-5 text-indigo-600 dark:text-white" />
              <span className="text-gray-900 dark:text-white">Node.js v20.14.0</span>
            </li>
            <li className="flex gap-x-3">
              <FaNpm className="mt-1 h-5 w-5 text-indigo-600 dark:text-white" />
              <span className="text-gray-900 dark:text-white">npm v10.8.1</span>
            </li>
            <li className="flex gap-x-3">
              <FaReact className="mt-1 h-5 w-5 text-indigo-600 dark:text-white" />
              <span className="text-gray-900 dark:text-white">React.js v18.2.0</span>
            </li>
          </ul>

          <h3 className="font-semibold mb-3 dark:text-white">Tech Stack (FrontEnd)</h3>
          <ul className="mb-6 max-w-xl space-y-3 text-gray-600 dark:text-white">
            <li className="flex gap-x-3">
              <FaReact className="mt-1 h-5 w-5 text-indigo-600 dark:text-white" />
              <span className="text-gray-900 dark:text-white">React.js</span>
            </li>
            <li className="flex gap-x-3">
              <RiTailwindCssFill className="mt-1 h-5 w-5 text-indigo-600 dark:text-white" />
              <span className="text-gray-900 dark:text-white">Tailwind CSS</span>
            </li>
            <li className="flex gap-x-3">
              <SiRedux className="mt-1 h-5 w-5 text-indigo-600 dark:text-white" />
              <span className="text-gray-900 dark:text-white">Redux</span>
            </li>
          </ul>

          <h3 className="font-semibold mb-3 dark:text-white">Tech Stack (BackEnd)</h3>
          <ul className="mb-6 max-w-xl space-y-3 text-gray-600 dark:text-white">
            <li className="flex gap-x-3">
              <FaNode className="mt-1 h-5 w-5 text-indigo-600 dark:text-white" />
              <span className="text-gray-900 dark:text-white">Node.js</span>
            </li>
            <li className="flex gap-x-3">
              <SiExpress className="mt-1 h-5 w-5 text-indigo-600 dark:text-white" />
              <span className="text-gray-900 dark:text-white">Express.js</span>
            </li>
            <li className="flex gap-x-3">
              <BsFiletypeJson className="mt-1 h-5 w-5 text-indigo-600 dark:text-white" />
              <span className="text-gray-900 dark:text-white">JSON Server</span>
            </li>
            <li className="flex gap-x-3">
              <SiMysql className="mt-1 h-5 w-5 text-indigo-600 dark:text-white" />
              <span className="text-gray-900 dark:text-white">MySQL</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecTools;
