const toTitleCase = (str) =>
  str
    .toLowerCase()
    .split(' ')
    .map((text) => text.substring(0, 1).toUpperCase() + text.substring(1))
    .join(' ');

export default toTitleCase;
