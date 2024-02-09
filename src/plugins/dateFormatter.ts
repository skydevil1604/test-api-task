import { format } from 'date-fns';

type FormatDatetimeOptions = {
    format: string; // https://date-fns.org/v2.16.1/docs/format
}

const DEFAULTS: FormatDatetimeOptions = {
  format: 'dd.MM.yyyy',
};

export default function (
  value: string | number,
  optionsValue: FormatDatetimeOptions = DEFAULTS
) {
  const options: FormatDatetimeOptions = { ...DEFAULTS, ...optionsValue };

  return format(new Date(value), options.format);
}