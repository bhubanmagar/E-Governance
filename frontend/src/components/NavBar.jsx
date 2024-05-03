const Navbar = () => {
  return (
    <>
      <div className="mx-auto px-2 sm:px-6 lg:px-8  bg-gray-800">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto rounded-lg bg-gray-800"
                src="https://w7.pngwing.com/pngs/636/441/png-transparent-nepal-government-logo.png"
                alt="Your Company"
              />
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className=" text-white  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
