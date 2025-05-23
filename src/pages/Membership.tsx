import { motion } from "framer-motion";
import { Baby, Check, Crosshair, Shield, Star, Target } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Membership() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [selectedTab, setSelectedTab] = useState("main");

  const membershipTiers = [
    {
      title: t("membership.tiers.skilledSniper.title"),
      price: t("membership.tiers.skilledSniper.price"),
      fullPrice: t("membership.tiers.skilledSniper.fullPrice"),
      tagline: t("membership.tiers.skilledSniper.tagline"),
      icon: Target,
      features: t("membership.tiers.skilledSniper.features", { returnObjects: true }) as string[],
      color: "#FFD700",
      ageRange: t("membership.tiers.skilledSniper.ageRange"),
    },
    {
      title: t("membership.tiers.skilledHunter.title"),
      price: t("membership.tiers.skilledHunter.price"),
      fullPrice: t("membership.tiers.skilledHunter.fullPrice"),
      tagline: t("membership.tiers.skilledHunter.tagline"),
      icon: Star,
      isPopular: true,
      features: t("membership.tiers.skilledHunter.features", { returnObjects: true }) as string[],
      color: "#B22222",
      ageRange: t("membership.tiers.skilledHunter.ageRange"),
    },
    {
      title: t("membership.tiers.privateTraining.title"),
      price: t("membership.tiers.privateTraining.price"),
      fullPrice: t("membership.tiers.privateTraining.fullPrice"),
      tagline: t("membership.tiers.privateTraining.tagline"),
      icon: Shield,
      features: t("membership.tiers.privateTraining.features", { returnObjects: true }) as string[],
      color: "#FFD700",
      ageRange: t("membership.tiers.privateTraining.ageRange"),
    },
  ];

  const additionalPrograms = [
    {
      title: t("membership.children.title"),
      price: t("membership.children.price"),
      fullPrice: t("membership.children.fullPrice"),
      tagline: t("membership.children.tagline"),
      icon: Baby,
      features: t("membership.children.features", { returnObjects: true }) as string[],
      color: "#1E90FF",
      ageRange: t("membership.children.ageRange"),
    },
  ];

  const recreationalOptions = [
    {
      title: t("membership.recreational.laneRental.title"),
      price: t("membership.recreational.laneRental.price"),
      fullPrice: t("membership.recreational.laneRental.fullPrice"),
      tagline: t("membership.recreational.laneRental.tagline"),
      icon: Crosshair,
      features: t("membership.recreational.laneRental.features", { returnObjects: true }) as string[],
      color: "#4682B4",
    },
    {
      title: t("membership.recreational.shooting.title"),
      price: t("membership.recreational.shooting.price"),
      fullPrice: t("membership.recreational.shooting.fullPrice"),
      tagline: t("membership.recreational.shooting.tagline"),
      icon: Target,
      features: t("membership.recreational.shooting.features", { returnObjects: true }) as string[],
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
    <div className={`px-4 py-16 text-white bg-[#1C1C1C]${isRTL ? ' text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="relative mb-16 overflow-hidden">
        <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-[#FFD700] mb-4">
              {t("membership.title")}
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-zinc-400">
              {t("membership.subtitle")}
            </p>
            <p className="mt-4 text-xl italic text-zinc-300">
              {t("membership.quote")}
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
            {t("membership.tabs.main")}
          </button>
          <button
            onClick={() => setSelectedTab("children")}
            className={`text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-md transition duration-300 ${
              selectedTab === "children"
                ? "bg-[#B22222] text-white"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {t("membership.tabs.children")}
          </button>
          <button
            onClick={() => setSelectedTab("recreational")}
            className={`text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-md transition duration-300 ${
              selectedTab === "recreational"
                ? "bg-[#B22222] text-white"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {t("membership.tabs.recreational")}
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
                    {t("membership.tiers.skilledHunter.tagline")}
                  </div>
                )}

                <div className={`flex items-center mb-4${isRTL ? ' flex-row-reverse' : ''}`}>
                  <div
                    className={`p-2 ${isRTL ? 'ml-3' : 'mr-3'} rounded-full bg-${
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
                    <li key={idx} className={`flex items-start${isRTL ? ' flex-row-reverse' : ''} ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
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
                  {t("membership.buttons.inquire")}
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
                <div className={`flex items-center mb-4${isRTL ? ' flex-row-reverse' : ''}`}>
                  <div className={`p-2 ${isRTL ? 'ml-3' : 'mr-3'} rounded-full bg-[#1E90FF]/10`}>
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
                    <li key={idx} className={`flex items-start${isRTL ? ' flex-row-reverse' : ''} ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
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
                  {t("membership.buttons.inquireChildren")}
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
                {t("membership.children.aboutTitle")}
              </h3>
              <p className="mb-6 text-zinc-300">
                {t("membership.children.aboutDesc")}
              </p>

              <div className="p-4 mb-6 rounded-lg bg-black/40">
                <h4 className="mb-2 text-lg font-semibold text-[#FFD700]">
                  {t("membership.children.safetyTitle")}
                </h4>
                <p className="text-zinc-400">
                  {t("membership.children.safetyDesc")}
                </p>
              </div>

              <div className="p-4 mb-6 rounded-lg bg-black/40">
                <h4 className="mb-2 text-lg font-semibold text-[#FFD700]">
                  {t("membership.children.benefitsTitle")}
                </h4>
                <ul className="space-y-2 text-zinc-400">
                  {(t("membership.children.benefits", { returnObjects: true }) as string[]).map((benefit, idx) => (
                    <li key={idx} className={`flex items-start${isRTL ? ' flex-row-reverse' : ''} ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
                      <Check className="w-5 h-5 mt-0.5 text-[#1E90FF]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-auto italic text-zinc-300">
                {t("membership.children.quote")}
              </p>

              <Link
                to="/contact"
                className="block w-full py-3 mt-6 text-center font-medium text-white transition duration-300 bg-[#1E90FF] rounded-md hover:bg-[#FFD700] hover:text-black"
                onClick={(e) => e.stopPropagation()}
              >
                {t("membership.buttons.contactChildren")}
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
                <div className={`flex items-center mb-4${isRTL ? ' flex-row-reverse' : ''}`}>
                  <div className={`p-2 ${isRTL ? 'ml-3' : 'mr-3'} rounded-full bg-[#4682B4]/10`}>
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
                    <li key={idx} className={`flex items-start${isRTL ? ' flex-row-reverse' : ''} ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
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
                  {t("membership.buttons.book")}
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#FFD700]">
            {t("membership.faq.title")}
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {(t("membership.faq.questions", { returnObjects: true }) as { question: string; answer: string }[]).map((faq, index) => (
              <div key={index} className="p-6 rounded-lg border border-zinc-800 bg-[#1C1C1C]">
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
