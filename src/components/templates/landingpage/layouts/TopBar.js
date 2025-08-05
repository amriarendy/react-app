import TopMenu from "../../../organisms/landingpage/layouts/TopMenu";

const TopBar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-gray-500 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <TopMenu />
        </div>
      </nav>
    </>
  );
};

export default TopBar;
