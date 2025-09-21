import React from "react";

const plans = [
  {
    id: 1,
    title: "Celestial Seeker",
    subtitle: "Basic Membership",
    features: [
      "Basic natal chart analysis",
      "Monthly newsletter with celestial insights",
      "Member-only discounts on special readings and services",
    ],
    price: "$9.99/month",
    popular: false,
  },
  {
    id: 2,
    title: "Celestial Explorer",
    subtitle: "Premium Membership",
    features: [
      "All features of the Celestial Seeker plan",
      "Access to daily horoscopes",
      "Exclusive early access to monthly astrological forecasts",
    ],
    price: "$19.99/month",
    popular: true,
  },
  {
    id: 3,
    title: "Celestial Visionary",
    subtitle: "VIP Membership",
    features: [
      "All features of the Celestial Explorer plan",
      "Exclusive access to webinars and workshops",
      "Personalized monthly guidance sessions with a professional astrologer",
    ],
    price: "$49.99/month",
    popular: false,
  },
];

const Membership = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold">
        Check Our <span className="text-red-500">Membership Plan</span>
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="border rounded-2xl p-6 shadow hover:shadow-lg transition relative"
          >
            {plan.popular && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm px-4 py-1 rounded-b-md">
                Popular
              </span>
            )}
            <h3 className="text-3xl font-semibold">{plan.title}</h3>
            <p className="text-2xl font-semibold text-gray-500">{plan.subtitle}</p>
            <ul className="mt-4 text-gray-600 space-y-2 text-xl">
              {plan.features.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul>
            <p className="mt-6 text-5xl italic font-semibold">{plan.price}</p>
            <button className="cursor-pointer mt-4 border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Membership;
