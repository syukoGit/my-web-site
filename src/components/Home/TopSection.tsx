import { useTranslation } from 'react-multi-lang';
import TranslationSwitch from '../TranslationSwitch';
import './TopSection.scss';

const TopSection = () => {
  const t = useTranslation();

  return (
    <section className='top-section'>
      <TranslationSwitch />
      <div className='top-section__title'>
        <p>A</p>
        <p>n</p>
        <p>t</p>
        <p>o</p>
        <p>n</p>
        <p>i</p>
        <p>n</p>
        <p>&nbsp;</p>
        <p>L</p>
        <p>Y</p>
        <p>A</p>
        <p>Ë</p>
        <p>T</p>
      </div>
      <p className='top-section__subtitle'>{t('home.top-section.subtitle')}</p>
      <i className='top-section__arrow-down bi bi-arrow-down'></i>
    </section>
  );
};

export default TopSection;
