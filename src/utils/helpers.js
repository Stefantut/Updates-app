// All helpers

export function replaceSpaceWithDash(item) {
  return item.toLowerCase().replace(/ /g, "-");
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getHour() {
  const date = new Date();
  const hour = date.getHours();
  return hour;
}

export function currentYear() {
  const date = new Date();
  const year = date.getFullYear();
  return year;
}
