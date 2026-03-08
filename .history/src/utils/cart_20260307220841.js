export function getShortCartName(name) {
  return name.replace(/headphones|earphones|speaker|speakers/i, "").trim();
}