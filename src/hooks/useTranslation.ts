import useLocale from '@/hooks/useLocale';
import translation from '@/constants/translation';

const useTranslation = () => {
  const locale = useLocale();
  return translation[locale] ?? translation.en;
}

export default useTranslation;
