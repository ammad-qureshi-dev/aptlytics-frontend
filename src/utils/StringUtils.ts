export function stringFormat(
  format: string,
  ...args: (string | number)[]
): string {
  let i = 0;

  return format.replace(/%(\.\d+)?[sdif]/g, (match, precision) => {
    const value = args[i++];

    if (value === undefined) return match;

    const specifier = match[match.length - 1];
    switch (specifier) {
      case "s":
        return String(value);

      case "d":
      case "i":
        return parseInt(String(value), 10).toString();

      case "f":
        const decimals = precision ? Number(precision.slice(1)) : 6;
        return parseFloat(String(value)).toFixed(decimals);

      default:
        return match;
    }
  });
}

export function capitalizeString(s: string) {
  if (!s) {
    return "";
  }

  let _s = s;
  _s = _s.toLowerCase();
  return _s.charAt(0).toUpperCase() + _s.substring(1);
}
