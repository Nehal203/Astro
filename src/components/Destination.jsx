import React from "react";
import { motion } from "framer-motion";

const Destination = () => {
    return (
        <div className="font-poppins text-gray-800">

            <motion.div
                className="relative bg-black bg-cover bg-center h-64 flex items-center justify-center text-white"
                style={{ backgroundImage: "url('/images/destination-bg.svg')" }}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-white bg-black/50 p-6 rounded">
                    <h1 className="text-3xl font-bold">DESTINATION WEDDING</h1>
                    <p className="text-sm mt-2">Home &gt;&gt; Destination Wedding</p>
                </div>
            </motion.div>

            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <p className="mb-6 leading-relaxed">
                        An opportunity for a couple to hold a wedding in a romantic location
                        without spending a fortune, a destination wedding removes many of the
                        stresses of planning a regular wedding. Every wedding detail can be
                        arranged at a resort destination to suit your taste from afar. After
                        the wedding ceremony, the celebration can last for hours or even days,
                        with meals and outings arranged for you and your guests.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        A destination wedding can be as cool and casual as you like. Want to
                        wear flip-flops or barefoot and dig your toes into the sand at a beach
                        wedding? You got it! No heavy brocade wedding gowns or stultifying
                        tuxedoes are required, either. Make the ceremony as short as you like,
                        then strip down to your bathing suits and swim away. Or head to a patio,
                        and start the music and champagne toasts for a party that can last until
                        the stars come out.
                    </p>

                    <p className="font-semibold mb-2">
                        Book Online Pandit Ji For Destination Wedding. Call Or Whatsapp on:
                    </p>
                    <p className="text-red-600 font-bold mb-6">
                        +91 96620 01600 &nbsp;&nbsp; +91 70160 73654
                    </p>

                    <motion.button
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        BOOK PANDIT NOW
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/images/destination-wedding.svg"
                        alt="Destination Wedding"
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Destination;
