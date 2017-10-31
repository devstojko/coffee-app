export const foursquare = require("react-foursquare")({
  clientID: "HRG20YWHDPFHGBLOD2NKSGCLHFVMBBCVWZKYRZCWMLXRWEN1",
  clientSecret: "IRMLCQ5WK4IS1H4U00EM4011R14LB5U2MJ3J1MVLBHI3UY42"
});

const coffeeId = "4bf58dd8d48988d1e0931735";

export const foursquareParams = {
  categoryId: coffeeId,
  limit: 10,
  radius: 1000,
  openNow: 1,
  sortByDistance: 1
};
