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

export function currentDate() {
  let d = new Date();
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  const date = `${ye}-${mo}-${da}`;
  return date.toString();
}

// will convert the string to array of strings if the string includes comma
export function stringToArray(item) {
  const newArray = item.replace(/ /g, "").split(",");
  return newArray;
}

// remove element from array
export function arrayRemoveElement(array, value) {
  return array.filter(function (elem) {
    return elem !== value;
  });
}
