import React from "react";
import { Sparkles, Users, BookOpen, Smile } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
    { number: 17000, suffix: "+", text: "Puja Performed", icon: <Sparkles className="w-10 h-10 text-red-600 mx-auto mb-2" /> },
    { number: 2000, suffix: "+", text: "Pandit ji Listed", icon: <Users className="w-10 h-10 text-red-600 mx-auto mb-2" /> },
    { number: 100, suffix: "+", text: "Type of Puja", icon: <BookOpen className="w-10 h-10 text-red-600 mx-auto mb-2" /> },
    { number: 95, suffix: "%", text: "Satisfied Customers", icon: <Smile className="w-10 h-10 text-red-600 mx-auto mb-2" /> },
];

const Booking = () => {
    return (
        <div className="bg-white text-gray-800">

            <section className="bg-gradient-to-b from-red-50 to-red-50 py-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-red-600">PANDIT BOOKING</span> – BOOK
                            PANDITJI FOR PUJA
                        </h2>
                        <p className="text-gray-700 font-bold leading-relaxed mb-4">
                            Panditji Online is the most trusted platform for availing Vedic and Hindu Puja Services like performing Vedic Rituals, Religious Ceremonies, Vastu Yagya and many more. We provide the best experienced and well-known purohits and pandits at your place to do puja. We are leading Pandit Booking website. Now, you can perform your pooja with our Professional Purohits & Pandits.
                        </p>
                        <p className="text-gray-700 font-bold leading-relaxed mb-4">
                            Our pandits perform rituals like Havan, Yagya, Shanti Vidhi, Shubh Vivah – Wedding Ceremony, Satyanarayan Katha, Griha Pravesh, Namkaran Sanskar, Nava Graha Shanti, Engagement, Festival Puja, Janeu, Ganesh Puja, Ram Katha, Mundan Sanskar, Shrimant Puja, Namkaran, Bhagwat Katha, Vastu Shanti, etc.
                        </p>
                        <p className="text-gray-700 font-bold leading-relaxed mb-4">
                            We provide highly qualified and experienced Panditji for all communities like Gujarati, Rajasthani, Marathi, Sindhi, Bihari, Bengali, and Panjabi.
                        </p>
                        <p className="text-gray-800 font-medium">
                            Book Pandit Online For Any Puja at Your Place In Just One Call - {" "}
                            <span className="text-red-600 font-bold">+91 96620 01600</span>,{" "}
                            <span className="text-red-600 font-bold">+91 70160 73654</span>
                        </p>
                        <motion.button
                            className="mt-6 bg-white text-red-500 border border-red-500 px-6 py-3 rounded-full shadow font-bold transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Know More →
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 gap-4 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.img src="/images/Book1.svg" alt="Puja" className="rounded-lg shadow-md" whileHover={{ scale: 1.05 }} />
                        <motion.img src="/images/Book2.svg" alt="Puja" className="rounded-lg shadow-md" whileHover={{ scale: 1.05 }} />
                        <motion.img
                            src="/images/Bookcenter.svg"
                            alt="Ganesh Ji"
                            className="absolute top-1/2 left-1/2 w-28 h-28 md:w-48 md:h-48 object-cover transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg rounded-full"
                            whileHover={{ scale: 1.1 }}
                        />
                        <motion.img src="/images/Book3.svg" alt="Puja" className="rounded-lg shadow-md" whileHover={{ scale: 1.05 }} />
                        <motion.img src="/images/Book4.svg" alt="Puja" className="rounded-lg shadow-md" whileHover={{ scale: 1.05 }} />
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-gradient-to-b from-red-50 to-red-50">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {stats.map((item, i) => (
                        <motion.div
                            key={i}
                            className="p-4 bg-white rounded-lg shadow"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            {item.icon}
                            <h3 className="text-3xl font-bold text-red-600">
                                <CountUp start={0} end={item.number} duration={2} separator="," />{item.suffix}
                            </h3>
                            <p className="text-gray-700">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section
                className="rounded-3xl max-w-7xl mx-auto py-12  text-white bg-cover bg-center relative"
                style={{ backgroundImage: "url('/images/bg-booking.svg')" }}
            >
                <div className="absolute inset-0 rounded bg-black/20"></div>
                <motion.div
                    className="relative z-10 max-w-4xl mx-auto px-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-6">
                        BOOK NOW - <span className="text-red-500">PANDITJEE ONLINE</span>
                    </h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-white/90 p-3 rounded text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="email"
                            placeholder="Email Id"
                            className="bg-white/90 p-3 rounded text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="text"
                            placeholder="Phone No."
                            className="bg-white/90 p-3 rounded text-black focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <select className="p-3 rounded text-black bg-white/90 focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option>--Please choose an option--</option>
                            <option>Ganesh Pooja</option>
                            <option>Lakshmi Pooja</option>
                            <option>Satyanarayan Katha</option>
                        </select>
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="md:col-span-2 p-3 rounded text-black bg-white/90 focus:outline-none focus:ring-2 focus:ring-red-500"
                        ></textarea>
                        <motion.button
                            className="bg-red-600 px-6 py-3 rounded-3xl text-white font-bold md:col-span-2 hover:bg-red-700 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit Now
                        </motion.button>
                    </form>
                </motion.div>
            </section>

            <section
                className="py-12 mx-auto max-w-7xl bg-cover bg-center relative rounded-3xl"
                style={{ backgroundImage: "url('/images/bg-services.svg')" }}
            >
                <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-8 text-white">
                        OUR SERVICES - <span className="text-red-400">HOW WE CAN HELP</span>
                    </h2>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            ["Lakshmi Pooja", "Lorem ipsum dolor sit amet consectetur. Aliquet cras blandit arcu volutpat.", "/images/services1.svg"],
                            ["Vishwakarma Pooja", "Lorem ipsum dolor sit amet consectetur. Aliquet cras blandit arcu volutpat.", "/images/services2.svg"],
                            ["Ganesh Pooja", "Lorem ipsum dolor sit amet consectetur. Aliquet cras blandit arcu volutpat.", "/images/services3.svg"],
                            ["Satyanarayan Katha", "Lorem ipsum dolor sit amet consectetur. Aliquet cras blandit arcu volutpat.", "/images/services4.svg"],
                        ].map(([title, desc, img], i) => (
                            <motion.div
                                key={i}
                                className="bg-white rounded-lg shadow p-4"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={img} alt={title} className="rounded mb-4 h-40 w-full object-cover" />
                                <h3 className="font-bold text-lg mb-2">{title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{desc}</p>
                                <p className="text-red-600 font-semibold">Price $ 100</p>
                                <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                                    Book Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <motion.div className="bg-red-50 container mx-auto px-6 py-12 space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-bold mb-6 text-center md:text-center">BHAGVAT KATHA</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <img src="/images/kathaa.svg" alt="Shrimad Bhagwat Katha" className="h-80 w-full object-cover rounded-lg shadow-lg" />
                        <div>
                            <p className="mb-6 leading-relaxed">
                                Shrimad Bhagwat is the image of the God of God and that is why it
                                is worshiped in reverence. By its recitation and hearing, both
                                enjoyment and salvation are accessible. There are no greater means
                                for the purification of the mind...
                            </p>
                            <p className="leading-relaxed">
                                How much and when to read – Because it is difficult to control the
                                mind for a long time and keep it in the rules, therefore the
                                method of listening to Bhagwat week is considered good...
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <img src="/images/kathaaa.svg" alt="Gujarati Dyra" className="h-80 w-full object-cover rounded-lg shadow-lg" />
                        <div>
                            <p className="mb-6 leading-relaxed">
                                Gujarati Dyra is a traditional folk devotional gathering...
                            </p>
                            <div className="leading-relaxed">
                                <p className="font-semibold mb-2">Main Features:</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Bhajans of Sant, Bhagwan & Dev-Devi</li>
                                    <li>Storytelling of Ramayan, Mahabharat, Bhagwat, Sant Vani</li>
                                    <li>Live music with folk rhythm (Dhol, Harmonium, Jhanjh)</li>
                                    <li>Audience participation with claps & chorus</li>
                                    <li>Creates spiritual and cultural bonding in society</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Booking;
