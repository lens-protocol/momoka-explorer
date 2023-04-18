const truncate = (str: string, max: number, suffix = '...') => {
  if (max <= suffix.length) {
    return suffix;
  }
  return str.length <= max ? str : `${str.substring(0, max - suffix.length)}${suffix}`;
};

export default truncate;
