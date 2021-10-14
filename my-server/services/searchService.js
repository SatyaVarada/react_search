// import dataset from "../data/dataset.json";
var dataset = require("../data/dataset.json");

const getSearchResults = (searchString) => {
  let response;
  response = dataset.drugs.filter((drug) => dynamicSearch(drug, searchString));
  return response;
};

const dynamicSearch = (drug, searchString) => {
  for (var key in drug) {
    if (key === "name" || key === "diseases") {
      if (
        drug[key].toString().toLowerCase().includes(searchString.toLowerCase())
      ) {
        return true;
      }
    }
  }
  return false;
};
module.exports = getSearchResults;
// export { getSearchResults };
