import { format, parseISO } from 'date-fns';

export default {
  applyDateMask(value: string) {
    return String(value)
      .trim()
      .replace(/\D/gi, '')
      .replace(/^(\d{2})(\d{2})(\d{4})(\d{2})(\d{2})$/, '$1/$2/$3 $4:$5');
  },
  formatToBrazilianDate(date: string) {
    return format(parseISO(date), 'dd/MM/yyyy HH:mm');
  },
};
