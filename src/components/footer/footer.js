export const Footer = () => {
  return (
    <footer class="bg-gray-800 p-4 text-sm ">
      <div class=" grid grid-cols-5 gap-10">
        <div class="w-full  text-left col-span-2">
          <h3 class="text-[#ff9f00] text-lg">About Us</h3>
          <p class="text-gray-400  mt-3">
            Our restaurant has been a beloved staple in the community for over
            20 years. We pride ourselves on using the freshest ingredients and
            offering a wide variety of dishes to please every palate. Stop by
            and see us today!
          </p>
        </div>
        <div class="w-full text-left">
          <h3 class="text-[#ff9f00] text-lg">Contact</h3>

          <p class="text-gray-400 mt-3">123 Main Street</p>
          <p class="text-gray-400">Anytown, USA 12345</p>
          <p class="text-gray-400">555-555-1212</p>
          <p class="text-gray-400">info@restaurant.com</p>
        </div>
        <div class="w-full text-left">
          <h3 class="text-[#ff9f00] text-lg">Hours</h3>
          <p class="text-gray-400 mt-3">Monday-Friday: 11am-9pm</p>
          <p class="text-gray-400">Saturday: 9am-10pm</p>
          <p class="text-gray-400">Sunday: 9am-9pm</p>
        </div>
        <div class="w-full text-left">
          <h3 class="text-[#ff9f00] text-lg">Follow Us</h3>
          <ul class="list-reset flex justify-start flex-wrap mt-6">
            <li class="mr-3">
              <a href="#" class="text-gray-400 hover:text-gray-100">
                Facebook
              </a>
            </li>
            <li class="mr-3">
              <a href="#" class="text-gray-400 hover:text-gray-100">
                Twitter
              </a>
            </li>
            <li class="mr-3">
              <a href="#" class="text-gray-400 hover:text-gray-100">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-gray-700 py-4 mt-4">
        <div class="container mx-auto flex flex-wrap items-center">
          <div class="w-full px-4 md:px-0 text-center md:text-left">
            <p class="text-gray-400 text-sm md:text-base">
              Copyright 2022 &#169; Machhan Restaurant All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
