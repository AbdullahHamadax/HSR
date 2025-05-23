import { motion } from "framer-motion";
import { Baby, Check, Crosshair, Shield, Star, Target } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Membership() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [selectedTab, setSelectedTab] = useState("main");

  const membershipTiers = [
    {
      title: "The Skilled Sniper",
      price: "2,500 EGP/month",
      fullPrice: "5,000 EGP full price",
      tagline: "Perfect for beginners",
      icon: Target,
      features: [
        "2-month structured program",
        "Safe firearm handling introduction",
        "In-depth air gun knowledge",
        "Foundational shooting techniques",
        "Medium-range shooting practice",
        "Final marksmanship proficiency",
      ],
      color: "#FFD700",
      ageRange: "Ages 12 and above",
      pdfInfo:
        "Level One: Learn firearm safety, air gun mechanics, and build mid-range marksmanship. 3 months | 2,500 EGP/month. Special: 7,000 EGP when paying upfront (instead of 7,500 EGP).",
    },
    {
      title: "The Skilled Hunter",
      price: "3,500 EGP/month",
      fullPrice: "7,000 EGP full price",
      tagline: "Our most popular package",
      icon: Star,
      isPopular: true,
      features: [
        "Advanced air gun expertise",
        "Brand and caliber knowledge",
        "Long-range precision training",
        "Moving target engagement",
        "Final assessment & academy certificate",
        "PCP rifle operation certification",
        "Facility access & maintenance support",
      ],
      color: "#B22222",
      ageRange: "Ages 12 and above",
      pdfInfo:
        "Level Two: Precision, long-range shooting, and hunting scenarios. 3,500 EGP/month or 9,500 EGP when paying upfront (instead of 10,500 EGP).",
    },
    {
      title: "Private Training",
      price: "7,000 EGP per person",
      fullPrice: "13,500 EGP for two",
      tagline: "One-on-one excellence",
      icon: Shield,
      features: [
        "12 personalized sessions",
        "One-on-one professional instruction",
        "Safety, accuracy, and hunting focus",
        "Real-world scenario training",
        "Ideal for individuals or pairs (max 2)",
        "Flexible scheduling",
        "Hands-on coaching by experts",
      ],
      color: "#FFD700",
      ageRange: "Ages 12 and above",
      pdfInfo:
        "12 personalized sessions. Our exclusive private training course for hunters and shooting enthusiasts. Professional instruction with focus on safety, accuracy and advanced techniques.",
    },
  ];

  const additionalPrograms = [
    {
      title: "Children's Recreational Course",
      price: "1,500 EGP/month",
      fullPrice: "4,000 EGP full price",
      tagline: "For young enthusiasts",
      icon: Baby,
      features: [
        "For ages 8-14 years",
        "4 sessions per month (weekly)",
        "Fun and engaging approach",
        "Fundamentals of target shooting",
        "Parent supervision required",
        "Safe environment and equipment",
      ],
      color: "#1E90FF",
      ageRange: "Ages 8-14",
      pdfInfo:
        "Four training sessions per month, held once a week. The total cost is 1,500 EGP monthly or 4,000 EGP for three months paid upfront (instead of 4,500 EGP).",
    },
  ];

  const recreationalOptions = [
    {
      title: "Shooting Lane Rental",
      price: "500 EGP / 30 min",
      fullPrice: "950 EGP / hour",
      tagline: "Bring your own equipment",
      icon: Crosshair,
      features: [
        "Use your personal firearm & ammunition",
        "30 minutes: 500 EGP",
        "1 hour (discounted): 950 EGP",
        "Professional supervision",
        "Safe and regulated environment",
        "Available for all skill levels",
      ],
      color: "#4682B4",
    },
    {
      title: "Recreational Shooting",
      price: "200-300 EGP",
      fullPrice: "+100 EGP for Red Dot",
      tagline: "Quick fun sessions",
      icon: Target,
      features: [
        "Spring rifle shooting (15 rounds)",
        "Price varies based on floor level",
        "200-300 EGP per session",
        "Additional 100 EGP for Red Dot Sight",
        "No prior experience needed",
        "Great for beginners",
      ],
      color: "#4682B4",
    },
  ];

  const cardVariants = {
    normal: {
      scale: 1,
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: { duration: 0.3 },
    },
    selected: {
      scale: 1.05,
      boxShadow:
        "0 20px 25px -5px rgba(255, 215, 0, 0.25), 0 10px 10px -5px rgba(255, 215, 0, 0.1)",
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.03,
      boxShadow:
        "0 10px 15px -3px rgba(255, 215, 0, 0.2), 0 4px 6px -2px rgba(255, 215, 0, 0.05)",
      transition: { duration: 0.15 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  return (
    <div className="px-4 py-16 text-white bg-[#1C1C1C]">
      <div className="relative mb-16 overflow-hidden">
        <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-[#FFD700] mb-4">
              Membership Plans
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-zinc-400">
              Choose the perfect program to elevate your shooting or hunting
              skills — whether you're starting out or going pro.
            </p>
            <p className="mt-4 text-xl italic text-zinc-300">
              "A true marksman masters the wind, not fears it."
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-center gap-3 mb-8 sm:flex-row sm:mb-12 sm:gap-4">
          <button
            onClick={() => setSelectedTab("main")}
            className={`text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-md transition duration-300 ${
              selectedTab === "main"
                ? "bg-[#B22222] text-white"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            Main Programs
          </button>
          <button
            onClick={() => setSelectedTab("children")}
            className={`text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-md transition duration-300 ${
              selectedTab === "children"
                ? "bg-[#B22222] text-white"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            Children's Programs
          </button>
          <button
            onClick={() => setSelectedTab("recreational")}
            className={`text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-md transition duration-300 ${
              selectedTab === "recreational"
                ? "bg-[#B22222] text-white"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            Recreational Options
          </button>
        </div>

        {selectedTab === "main" && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={selectedTier === index ? "selected" : "hover"}
                whileTap="tap"
                variants={cardVariants}
                animate={selectedTier === index ? "selected" : "normal"}
                onClick={() =>
                  setSelectedTier(index === selectedTier ? null : index)
                }
                className={`relative flex flex-col h-full p-6 rounded-lg cursor-pointer ${
                  tier.isPopular
                    ? "border-2 border-[#B22222]"
                    : "border border-zinc-800"
                } bg-[#1C1C1C]`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 right-0 px-3 py-1 text-xs font-medium text-black translate-y-0 translate-x-0 bg-[#FFD700] rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center mb-4">
                  <div
                    className={`p-2 mr-3 rounded-full bg-${
                      tier.color === "#FFD700" ? "[#FFD700]" : "[#B22222]"
                    }/10`}
                  >
                    <tier.icon
                      className={`w-6 h-6 text-${
                        tier.color === "#FFD700" ? "[#FFD700]" : "[#B22222]"
                      }`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {tier.title}
                  </h3>
                </div>

                <p className="mb-1 text-sm text-zinc-400">{tier.tagline}</p>
                <p className="mb-1 text-xs text-zinc-400">{tier.ageRange}</p>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-white">
                    {tier.price}
                  </span>
                </div>
                <div className="mb-6">
                  <span className="text-sm text-zinc-400">
                    {tier.fullPrice}
                  </span>
                </div>

                <ul className="flex-grow mb-6 space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check
                        className={`w-5 h-5 mt-0.5 text-${
                          tier.color === "#FFD700" ? "[#FFD700]" : "[#B22222]"
                        }`}
                      />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="block w-full py-3 text-center font-medium text-white transition duration-300 bg-[#B22222] rounded-md hover:bg-[#FFD700] hover:text-black"
                  onClick={(e) => e.stopPropagation()}
                >
                  Inquire About This Plan
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {selectedTab === "children" && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {additionalPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover="hover"
                whileTap="tap"
                variants={cardVariants}
                className="relative flex flex-col h-full p-6 rounded-lg cursor-pointer border border-zinc-800 bg-[#1C1C1C]"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 mr-3 rounded-full bg-[#1E90FF]/10">
                    <program.icon className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {program.title}
                  </h3>
                </div>

                <p className="mb-1 text-sm text-zinc-400">{program.tagline}</p>
                <p className="mb-1 text-xs font-medium text-[#1E90FF]">
                  {program.ageRange}
                </p>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-white">
                    {program.price}
                  </span>
                </div>
                <div className="mb-6">
                  <span className="text-sm text-zinc-500">
                    {program.fullPrice}
                  </span>
                </div>

                <ul className="flex-grow mb-6 space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 mt-0.5 text-[#1E90FF]" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="block w-full py-3 text-center font-medium text-white transition duration-300 bg-[#1E90FF] rounded-md hover:bg-[#FFD700] hover:text-black"
                  onClick={(e) => e.stopPropagation()}
                >
                  Inquire About Children's Program
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover="hover"
              whileTap="tap"
              variants={cardVariants}
              className="relative flex flex-col h-full p-6 rounded-lg cursor-pointer border border-zinc-800 bg-[#1C1C1C] md:col-span-2"
            >
              <h3 className="mb-4 text-2xl font-bold text-[#1E90FF]">
                About Our Children's Program
              </h3>
              <p className="mb-6 text-zinc-300">
                Our recreational shooting course for children is specially
                designed to foster joy and excitement while teaching the
                fundamentals of target shooting in a safe, controlled
                environment.
              </p>

              <div className="p-4 mb-6 rounded-lg bg-black/40">
                <h4 className="mb-2 text-lg font-semibold text-[#FFD700]">
                  Safety First
                </h4>
                <p className="text-zinc-400">
                  All children are constantly supervised by our professional
                  instructors, with mandatory parent presence throughout the
                  sessions. We use appropriate, age-specific equipment to ensure
                  both safety and enjoyment.
                </p>
              </div>

              <div className="p-4 mb-6 rounded-lg bg-black/40">
                <h4 className="mb-2 text-lg font-semibold text-[#FFD700]">
                  Program Benefits
                </h4>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start space-x-2">
                    <Check className="w-5 h-5 mt-0.5 text-[#1E90FF]" />
                    <span>Develops focus and discipline</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-5 h-5 mt-0.5 text-[#1E90FF]" />
                    <span>Improves hand-eye coordination</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-5 h-5 mt-0.5 text-[#1E90FF]" />
                    <span>Builds confidence through skill mastery</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-5 h-5 mt-0.5 text-[#1E90FF]" />
                    <span>Creates lasting bonds through shared activities</span>
                  </li>
                </ul>
              </div>

              <p className="mt-auto italic text-zinc-300">
                "This program aims to foster happiness and excitement among
                children while teaching valuable skills in a safe environment."
              </p>

              <Link
                to="/contact"
                className="block w-full py-3 mt-6 text-center font-medium text-white transition duration-300 bg-[#1E90FF] rounded-md hover:bg-[#FFD700] hover:text-black"
                onClick={(e) => e.stopPropagation()}
              >
                Contact Us About Children's Programs
              </Link>
            </motion.div>
          </div>
        )}

        {selectedTab === "recreational" && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {recreationalOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover="hover"
                whileTap="tap"
                variants={cardVariants}
                className="relative flex flex-col h-full p-6 rounded-lg cursor-pointer border border-zinc-800 bg-[#1C1C1C]"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 mr-3 rounded-full bg-[#4682B4]/10">
                    <option.icon className="w-6 h-6 text-[#4682B4]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {option.title}
                  </h3>
                </div>

                <p className="mb-1 text-sm text-zinc-400">{option.tagline}</p>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-white">
                    {option.price}
                  </span>
                </div>
                <div className="mb-6">
                  <span className="text-sm text-zinc-500">
                    {option.fullPrice}
                  </span>
                </div>

                <ul className="flex-grow mb-6 space-y-3">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 mt-0.5 text-[#4682B4]" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="block w-full py-3 text-center font-medium text-white transition duration-300 bg-[#4682B4] rounded-md hover:bg-[#FFD700] hover:text-black"
                  onClick={(e) => e.stopPropagation()}
                >
                  Book This Option
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#FFD700]">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                question: "What equipment do I need to bring?",
                answer:
                  "All necessary equipment is provided including air guns, targets, and safety gear. You're welcome to bring your own equipment if you prefer, subject to our safety officers' approval.",
              },
              {
                question: "Are there age restrictions?",
                answer:
                  "For main programs, members must preferably be 12 years or older. We offer supervised junior programs for ages 8-14 with parental consent and presence required throughout the sessions.",
              },
              {
                question: "How long are the membership terms?",
                answer:
                  "Our programs run on 3-month cycles, but we offer flexible options for private training and corporate events.",
              },
              {
                question: "Is prior experience required?",
                answer:
                  "No prior experience is necessary. Our 'Skilled Sniper' program is designed specifically for beginners with comprehensive safety training.",
              },
              {
                question: "What are the shooting lane rental options?",
                answer:
                  "You can rent a lane for your personal firearm and ammunition for 30 minutes (500 EGP) or 1 hour (950 EGP, discounted from 1,000 EGP).",
              },
              {
                question: "Do you offer any recreational shooting options?",
                answer:
                  "Yes, we offer spring rifle shooting (15 rounds) ranging from 200-300 EGP based on the floor level. An additional fee of 100 EGP applies for using rifles with Red Dot Sight.",
              },
            ].map((faq) => (
              <div className="p-6 rounded-lg border border-zinc-800 bg-[#1C1C1C]">
                <h3 className="mb-3 text-xl font-semibold text-[#FFD700]">
                  {faq.question}
                </h3>
                <p className="text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
