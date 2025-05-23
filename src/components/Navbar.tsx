import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../images/logo.webp";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const linkStyle =
    "relative text-[#EFEFEF] hover:text-[#FFD700] font-medium transition-colors";
  const activeLinkStyle = "text-[#FFD700] font-semibold";

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  let navLinks = [
    { to: "/", label: t("common.home") },
    { to: "/about", label: t("common.about") },
    { to: "/membership", label: t("common.membership") },
    { to: "/contact", label: t("common.contact") },
  ];
  if (i18n.language === 'ar') navLinks = navLinks.reverse();

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-[#B22222] shadow-lg shadow-black/20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NavLink to="/" className="flex items-center space-x-2">
              <img src={logo} className="w-12" alt="Logo" />
              <span className="text-xl font-bold text-[#FFD700]">
                {t("navbar.title")}
              </span>
            </NavLink>
          </motion.div>

          <div className={`hidden items-center md:flex ${i18n.language === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${linkStyle} ${isActive ? activeLinkStyle : ""}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-[-20px] left-0 w-full h-0.5 bg-[#FFD700]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#EFEFEF] hover:text-[#FFD700]"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="overflow-hidden md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className={`px-2 pt-2 pb-3 space-y-1 border-t border-zinc-800 ${i18n.language === 'ar' ? 'text-right' : ''}` }>
                {navLinks.map((link) => (
                  <motion.div key={link.to} variants={itemVariants}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block py-2 pl-3 pr-4 rounded-md ${linkStyle} ${
                          isActive ? `${activeLinkStyle} bg-black/30` : ""
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="py-2 pl-3 pr-4">
                  <LanguageSwitcher isMobile={true} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
