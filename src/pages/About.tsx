import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Crosshair,
  Medal,
  Shield,
  Target,
  UserPlus,
} from "lucide-react";

import bannerImage from "../images/banner3.webp";

function About() {
  const visionItems = [
    {
      title: "Professional Training",
      description:
        "Expert instruction from skilled marksmen for all experience levels",
      icon: Medal,
    },
    {
      title: "Safe Environment",
      description:
        "Rigorous safety protocols and supervised shooting experiences",
      icon: Shield,
    },
    {
      title: "Precision Focus",
      description: "Develop accuracy and technique through structured programs",
      icon: Crosshair,
    },
    {
      title: "Inclusive Community",
      description: "Welcoming space for all ages from 8 to 60+ years",
      icon: UserPlus,
    },
  ];

  return (
    <div className="bg-[#1C1C1C] text-white">
      <div className="relative overflow-hidden">
        <div className="relative px-4 py-16 mx-auto sm:py-24 max-w-7xl sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl sm:text-5xl font-bold text-center text-[#FFD700] md:text-6xl"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto text-lg text-center sm:text-xl text-zinc-300"
          >
            Precision is not luck — it’s the result of relentless focus.{" "}
          </motion.p>
        </div>
      </div>

      <div className="px-4 py-12 mx-auto sm:py-16 max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-8 md:gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 text-zinc-300"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#FFD700]">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg">
              At our range, precision and professionalism meet passion. We're
              not just a shooting range — we are a community where beginners
              become experts and marksmen become masters.
            </p>
            <p className="text-base sm:text-lg">
              Our mission is to offer top-tier firearms training and
              recreational shooting in a safe, inclusive, and cutting-edge
              facility.
            </p>
            <p className="text-base sm:text-lg">
              Whether you're pursuing sport, self-defense skills, or just an
              adrenaline-filled hobby, you'll find support, expertise, and
              camaraderie at every turn.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={bannerImage}
              alt="Hunting Shooting Range logo with the motto: 'A true marksman masters the wind, not fears it.'"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24"
        >
          <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center text-[#FFD700]">
            What we offer
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-black/50 border border-zinc-800 hover:border-[#FFD700]/30 transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#B22222] shadow-lg">
                  <item.icon
                    className="w-6 h-6 text-[#FFD700]"
                    aria-label={`Icon for ${item.title}`}
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-6 mt-12 border rounded-lg sm:mt-16 bg-black/30 border-zinc-800">
            <h3 className="mb-4 text-xl sm:text-2xl font-bold text-center text-[#FFD700]">
              Programs for All Ages
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-4 border rounded-lg bg-black/20 border-zinc-800"
              >
                <h4 className="mb-2 text-lg font-bold text-white">
                  Adults (12-60+)
                </h4>
                <p className="mb-3 text-zinc-400">
                  Professional training programs designed for all skill levels,
                  from beginners to expert marksmen.
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-[#FFD700]" />
                    <span>Flexible monthly training options</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="w-4 h-4 mr-2 text-[#FFD700]" />
                    <span>Skilled Sniper and Hunter specializations</span>
                  </li>
                  <li className="flex items-center">
                    <UserPlus className="w-4 h-4 mr-2 text-[#FFD700]" />
                    <span>Private training sessions available</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-4 border rounded-lg bg-black/20 border-zinc-800"
              >
                <h4 className="mb-2 text-lg font-bold text-white">
                  Children (8-14)
                </h4>
                <p className="mb-3 text-zinc-400">
                  Safe, educational, and fun recreational shooting courses
                  specially designed for young enthusiasts.
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-[#FFD700]" />
                    <span>Weekly sessions (4 per month)</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-[#FFD700]" />
                    <span>Safety-first approach with close supervision</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="w-4 h-4 mr-2 text-[#FFD700]" />
                    <span>Focus on fundamentals and enjoyment</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
