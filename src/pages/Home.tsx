import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Award, Calendar, Shield, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

import gun from "../images/AK-47.svg";
import banner from "../images/banner.webp";
import banner2 from "../images/banner2.webp";

const Home = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const leftGunY = useTransform(scrollY, [0, 500], [0, -200]);
  const rightGunY = useTransform(scrollY, [0, 500], [0, -150]);
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);

  const textOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);
  const textY = useTransform(scrollY, [0, 300], [0, 50]);

  const cardVariants = {
    hidden: { y: shouldReduceMotion ? 0 : 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="text-white bg-[#1C1C1C]">
      <section className="relative h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${banner})`,
            filter: "brightness(0.4)",
            y: bgY,
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 z-10 hidden w-1/3 h-1/2 lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ y: leftGunY }}
        >
          <img
            src={gun}
            alt="Left Gun"
            loading="lazy"
            className="object-contain w-full h-full rotate-45"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-0 z-10 hidden w-1/3 h-1/2 lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          style={{ y: rightGunY }}
        >
          <img
            src={gun}
            alt="Right Gun"
            loading="lazy"
            className="object-contain w-full h-full -rotate-45 -scale-x-100"
          />
        </motion.div>

        <motion.div
          className="relative flex flex-col items-center justify-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
          style={{ opacity: textOpacity, y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              <motion.span
                className="text-[#FFD700]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Master the Shot
              </motion.span>{" "}
              <motion.span
                className="text-[#B22222]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                with Precision
              </motion.span>
            </h1>
            <motion.p
              className="max-w-2xl mx-auto mb-8 text-xl md:text-2xl text-zinc-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Begin your journey with elite training and real-world readiness.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <Link
                to="/membership"
                className="px-8 py-3 mt-4 text-lg font-medium text-white transition duration-300 bg-[#B22222] rounded-md hover:bg-[#FFD700] hover:text-black shadow-lg hover:shadow-xl hover:shadow-[#FFD700]/20"
              >
                Become a Member
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 bg-black">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-3xl font-bold text-center text-white md:text-4xl"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Safety First",
                content:
                  "We prioritize your safety with certified instructors and secure facilities, ensuring a controlled environment.",
                iconColor: "text-[#FFD700]",
              },
              {
                icon: Target,
                title: "Professional Training",
                content:
                  "Structured programs from beginner to advanced, with real-world application in mind.",
                iconColor: "text-[#B22222]",
              },
              {
                icon: Users,
                title: "Community",
                content:
                  "Train, connect, and grow with fellow enthusiasts in a supportive community.",
                iconColor: "text-[#B22222]",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(255, 215, 0, 0.1)",
                }}
                className="p-6 rounded-lg shadow-md bg-[#1C1C1C]"
              >
                <card.icon className={`w-12 h-12 mb-4 ${card.iconColor}`} />
                <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
                <p className="text-zinc-400">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t-2">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                Membership Benefits
              </h2>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start">
                  <Target className="w-6 h-6 text-[#B22222]" />
                  <p className="ml-3 text-lg">
                    Level One: Learn firearm safety, air gun mechanics, and
                    build mid-range marksmanship. 3 months | 2,500 EGP/month.
                    Special: 7,000 EGP upfront.
                  </p>
                </li>
                <li className="flex items-start">
                  <Calendar className="w-6 h-6 text-[#B22222]" />
                  <p className="ml-3 text-lg">
                    Level Two: Precision, long-range shooting, and hunting
                    scenarios. 3,500 EGP/month or 9,500 EGP upfront.
                  </p>
                </li>
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-[#FFD700]" />
                  <p className="ml-3 text-lg">
                    Academy certification and access to maintenance, gear
                    discounts, and shooting lanes.
                  </p>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-[#B22222]" />
                  <p className="ml-3 text-lg">
                    Partner-friendly training, group programs, and a vibrant
                    shooting community.
                  </p>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/membership"
                  className="px-6 py-3 text-lg font-medium text-white transition duration-300 bg-[#B22222] rounded-md hover:bg-[#FFD700] hover:text-black"
                >
                  View Membership Options
                </Link>
              </div>
            </div>
            <motion.div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={banner2}
                alt="Shooting Range Facility"
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
