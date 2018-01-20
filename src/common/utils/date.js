import format from 'date-fns/format';
import parse from 'date-fns/parse';
import ruLocale from 'date-fns/locale/ru';

export const getDate = date =>
  format(parse(date), 'd MMM YYYY, dd', { locale: ruLocale });
