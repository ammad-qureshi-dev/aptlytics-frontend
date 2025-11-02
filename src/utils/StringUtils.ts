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

/**
 * Replaces URL params with ARGs. Example URL: /v1/business/:businessId/services
 * @param url url with params
 * @param args arguments to replace params
 */
export function urlFormat(url: string, params: Record<string, any>) {
  return url.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => {
    const value = params[key];
    if (value === undefined || value === null) {
      throw new Error(`Missing value for URL param "${key}"`);
    }
    return encodeURIComponent(String(value));
  });
}
