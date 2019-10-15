function transformArg(arg) {
  if (typeof arg === `number` && !Number.isNaN(arg)) {
    return `number`;
  } else if (typeof arg === `string`) {
    return `string`;
  }
  return undefined;
};
  module.exports = transformArg;