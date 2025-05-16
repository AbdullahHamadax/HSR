import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Award, Calendar, Star, Target, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import ReviewForm from "../components/ReviewForm";
import gun from "../images/AK-47.svg";
import banner from "../images/banner.webp";
import banner2 from "../images/banner2.webp";

const Home = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(0);

  const leftGunY = useTransform(scrollY, [0, 500], [0, -200]);
  const rightGunY = useTransform(scrollY, [0, 500], [0, -150]);
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);

  const textOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);
  const textY = useTransform(scrollY, [0, 300], [0, 50]);

  // Optimized card variants with faster animation
  const cardVariants = {
    hidden: { y: shouldReduceMotion ? 0 : 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1, // Reduced delay between animations
        duration: 0.3, // Reduced duration
      },
    }),
  };

  const testimonials = [
    {
      name: "Ahmed H.",
      rating: 5,
      text: "The instructors are world-class. I've improved my accuracy by 40% since joining. The safety protocols give me peace of mind while training.",
      position: "Member for 8 months",
    },
    {
      name: "Abeer I.",
      rating: 5,
      text: "As a beginner, I was nervous at first, but the patient instructors and supportive community made me feel welcome. Now I can't imagine my weekends without HSR!",
      position: "Member for 3 months",
    },
    {
      name: "Omar K.",
      rating: 4,
      text: "Professional training with real-world applications. The facilities are top-notch and the community is incredibly supportive. Highly recommend for all skill levels.",
      position: "Member for 1 year",
    },
  ];

  const stats = [
    { value: 2000, label: "Active Members", icon: Users },
    { value: 4.8, label: "Star Rating", icon: Star, decimal: true },
    { value: 250, label: "Training Hours", icon: Target },
    { value: 15, label: "Certified Instructors", icon: Award },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05 * i, duration: 0.2 }} // Faster star animations
        >
          <Star
            fill={i < rating ? "#FFD700" : "none"}
            stroke={i < rating ? "#FFD700" : "#6b7280"}
            className="w-5 h-5"
          />
        </motion.div>
      ));
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

      <section className="py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }} // Faster animation
                className="flex flex-col items-center justify-center p-4 text-center"
              >
                <div className="p-3 mb-4 rounded-full bg-[#B22222]/20">
                  <stat.icon className="w-6 h-6 text-[#FFD700]" />
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.3 }} // Faster animation
                  className="mb-1 text-4xl font-bold text-[#FFD700]"
                >
                  {stat.decimal ? stat.value : stat.value.toLocaleString()}
                </motion.span>
                <span className="text-sm font-medium text-zinc-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800 bg-[#1C1C1C]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-3xl font-bold text-center text-white md:text-4xl"
          >
            What Our Members Say
          </motion.h2>

          <div className="relative mt-10">
            <div className="relative flex overflow-hidden">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {testimonials.map((testimonial, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.2 }, // Fast hover animation
                      boxShadow: "0 10px 25px -5px rgba(255, 215, 0, 0.1)",
                    }}
                    className="flex flex-col p-6 bg-black border rounded-lg shadow-lg border-zinc-800"
                  >
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="mb-6 italic text-zinc-300">
                      "{testimonial.text}"
                    </p>
                    <div className="mt-auto">
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-zinc-400">
                        {testimonial.position}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }} // Reduced delay
            className="mt-12 text-center"
          >
            <a
              href="#leave-review"
              className="px-6 py-3 text-lg font-medium text-white transition duration-300 bg-[#B22222] rounded-md hover:bg-[#FFD700] hover:text-black inline-flex items-center"
            >
              <Star className="w-5 h-5 mr-2" fill="#FFD700" />
              Share Your Experience
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-zinc-800">
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
                    build mid-range marksmanship. 2 months | 2,500 EGP/month.
                    Special: 4,500 EGP instead of 5,000 EGP when you pay for 2
                    months upfront.
                  </p>
                </li>
                <li className="flex items-start">
                  <Calendar className="w-6 h-6 text-[#B22222]" />
                  <p className="ml-3 text-lg">
                    Level Two: Precision, long-range shooting, and hunting
                    scenarios. 3,500 EGP/month or 6,500 EGP instead of 7,000
                    EGP.
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

      {/* Review Form Section */}
      <section
        id="leave-review"
        className="py-20 border-t border-zinc-800 bg-black/30"
      >
        <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-[#FFD700] md:text-4xl">
              Share Your Experience
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-zinc-300">
              Your feedback helps us improve and guides others in their shooting
              journey.
            </p>
          </motion.div>

          <ReviewForm productName="Hunting Shooting Range" />
        </div>
      </section>
    </div>
  );
};

export default Home;
