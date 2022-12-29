import React from "react";

const testimonials = [
  {
    quote:
      "One of the best online shopping experience. Very easy to find products and the best part is that you can check the complete product review.",
    author: "Sabin Manandhar",
    role: "Customer",
  },
  {
    quote:
      "Ekdam reasonable price chha. Digital product haru sajilai pauna sakinchha. Ekdam trusted service. Customer service chai best part, phone and live chat support le garda.",
    author: "David Shrestha",
    role: "Customer",
  },
  {
    quote:
      "Very professional and talented individuals. Been to their office yet small but homely environment. They were prompt on their action and quick service. Loved their service.",
    author: "Rahul Zindal",
    role: "Customer",
  },
];

function Testimonials() {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center py-12">
      <div className="w-full">
        <div className="text-center text-3xl font-bold text-white mb-6">
          Our happy customer's reviews
          <p className="text-center text-xl text-gray-500 font-bold mt-1 mb-6">
            Check what other think about Us
          </p>
        </div>
        <div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="text-white rounded shadow-lg p-4 bg-[#ff9f00] transition ease-linear  hover:bg-[#ff9000]  hover:translate-y-[-4px]"
              >
                <div className="text-lg font-bold mb-2">
                  {testimonial.quote}
                </div>
                <div className="text-gray-700 text-sm">
                  {testimonial.author}
                </div>
                <div className="text-gray-500 text-xs">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
