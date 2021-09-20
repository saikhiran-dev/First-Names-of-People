const peopleList = require("../country/state/city/index.js");

const returnFirstName = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleList) => {
  return returnFirstName(peopleList);
};

module.exports = getPeopleInCity;
