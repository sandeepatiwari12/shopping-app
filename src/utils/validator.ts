export const required = (value: any) => (value ? undefined : "Required");
export const mustBeNumber = (value: any) => {
  return isNaN(value) ? "Must be a number" : undefined;
};
export const checkLength = (length: number) => (value: string) => {
  return value.length === length ? undefined : `Enter a valid card number`;
};
export const composeValidators =
  (...validators) =>
  (value: string) => {
    return validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
  };
