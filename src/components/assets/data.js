export const fakearr = [
  {
    name: "All",
    emoji: "",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Pizza",
    emoji: "🍕",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Burgers",
    emoji: "🍔",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Desserts",
    emoji: "🍧",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Pork",
    emoji: "🥓",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Beef",
    emoji: "🥩",
    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Tea",
    emoji: "🫖",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Coffee",
    emoji: "☕️",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Pasta",
    emoji: "🍝",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Drinks",
    emoji: "🥂",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "All",
    emoji: "",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Pizza",
    emoji: "🍕",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Burgers",
    emoji: "🍔",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Desserts",
    emoji: "🍧",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Pork",
    emoji: "🥓",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Beef",
    emoji: "🥩",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Tea",
    emoji: "🫖",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Coffee",
    emoji: "☕️",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Pasta",
    emoji: "🍝",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
  {
    name: "Drinks",
    emoji: "🥂",

    date: new Date(
      Date.now() * Math.random() + 1 * Math.random()
    ).toLocaleDateString(),
  },
];
const minPrice = 1;
const maxPrice = 100;
const minRating = 1;
const maxRating = 5;
const minDiscount = 10;
const maxDiscount = 50;
const randomIndex = Math.floor(Math.random() * fakearr.length);

const newModifiedArr = [
  ...fakearr,
  ...fakearr,
  ...fakearr,
  ...fakearr,
  ...fakearr,
];

const modifiedFakearr = newModifiedArr.map((item, index) => {
  const modifiedItem = { ...item };
  if (Math.random() < 0.2) {
    modifiedItem.discount =
      Math.floor(Math.random() * (maxDiscount - minDiscount + 1)) + minDiscount;
  }
  modifiedItem.id = Math.random();
  modifiedItem.price =
    Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
  modifiedItem.rating =
    Math.floor(Math.random() * (maxRating - minRating + 1)) + minRating;
  return modifiedItem;
});
export { modifiedFakearr };
