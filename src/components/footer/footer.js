export const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-sm  ">
      <div className=" grid grid-cols-5 gap-10">
        <div className="w-full  text-left col-span-2">
          <h3 className="text-[#ff9f00] text-lg">About Us</h3>
          <p className="text-gray-400  mt-3">
            Our restaurant has been a beloved staple in the community for over
            20 years. We pride ourselves on using the freshest ingredients and
            offering a wide variety of dishes to please every palate. Stop by
            and see us today!
          </p>
        </div>
        <div className="w-full text-left">
          <h3 className="text-[#ff9f00] text-lg">Contact</h3>

          <p className="text-gray-400 mt-3">123 Main Street</p>
          <p className="text-gray-400">Anytown, USA 12345</p>
          <p className="text-gray-400">555-555-1212</p>
          <p className="text-gray-400">info@restaurant.com</p>
        </div>
        <div className="w-full text-left">
          <h3 className="text-[#ff9f00] text-lg">Hours</h3>
          <p className="text-gray-400 mt-3">Monday-Friday: 11am-9pm</p>
          <p className="text-gray-400">Saturday: 9am-10pm</p>
          <p className="text-gray-400">Sunday: 9am-9pm</p>
        </div>
        <div className="w-full text-left">
          <h3 className="text-[#ff9f00] text-lg">Follow Us</h3>
          <ul className="list-reset flex justify-start flex-wrap mt-6">
            <li className="mr-3">
              <a href="#" className="text-gray-400 hover:text-gray-100">
                Facebook
              </a>
            </li>
            <li className="mr-3">
              <a href="#" className="text-gray-400 hover:text-gray-100">
                Twitter
              </a>
            </li>
            <li className="mr-3">
              <a href="#" className="text-gray-400 hover:text-gray-100">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-700 py-4 mt-4">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full px-4 md:px-0 text-center md:text-left">
            <p className="text-gray-400 text-sm md:text-base">
              Copyright 2022 &#169; Machhan Restaurant All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
