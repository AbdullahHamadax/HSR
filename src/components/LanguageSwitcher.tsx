import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isMobile = false }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className={`flex items-center ${isMobile ? 'justify-start' : 'space-x-2'}`}>
      <button
        onClick={() => changeLanguage('en')}
        className={`p-2 rounded-full transition-transform hover:scale-110 ${
          i18n.language === 'en' ? 'ring-2 ring-red-600' : ''
        } ${isMobile ? 'hover:text-[#FFD700]' : ''}`}
        title="English"
      >
        <img
          src="https://flagcdn.com/w40/us.png"
          alt="US Flag"
          className="w-6 h-4 object-cover rounded"
        />
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={`p-2 rounded-full transition-transform hover:scale-110 ${
          i18n.language === 'ar' ? 'ring-2 ring-red-600' : ''
        } ${isMobile ? 'hover:text-[#FFD700]' : ''}`}
        title="العربية"
      >
        <img
          src="https://flagcdn.com/w40/eg.png"
          alt="Egypt Flag"
          className="w-6 h-4 object-cover rounded"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher; 