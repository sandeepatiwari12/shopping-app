/**
 * Formats a currency according to the user's locale
 * @param {string} currency The ISO currency code
 * @param {number} value The amount to format
 * @returns
 */
export const formatPrice = (currency: string, value: number) =>
  Intl.NumberFormat("en-US", {
    currency,
    minimumFractionDigits: 2,
    style: "currency",
  }).format(value);
