const Errors = ({ label, message }) => {
    return (
        <>
        <div className="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
            <div className="block mb-5 md:max-w-md">
                <img src="https://flowbite-admin-dashboard.vercel.app/images/illustrations/maintenance.svg" alt="maintenance image" />
            </div>
            <div className="text-center xl:max-w-4xl">
                <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">Under Maintenance</h1>
                <p className="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">Sorry for the inconvenience but we’re performing some maintenance at the moment. If you need to you can always <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">contact us</a>, otherwise we’ll be back online shortly!.</p>
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    Go back home
                </a>
            </div>
        </div>
        </>
    )
}

export default Errors;