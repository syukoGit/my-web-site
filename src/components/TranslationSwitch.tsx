import { getLanguage, setLanguage, useTranslation } from 'react-multi-lang';
import './TranslationSwitch.scss';

const TranslationSwitch = () => {
  const language = getLanguage();
  const t = useTranslation();

  return (
    <button
      onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
      type='button'
      className='translation-switch'
    >
      <p className='translation-switch__label'>{t('language.name')}</p>
      {language === 'fr' && <i className='flag flag--fr'></i>}
      {language === 'en' && <i className='flag flag--usa'></i>}
    </button>
  );
};

export default TranslationSwitch;
