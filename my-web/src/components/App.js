import logo from "../static/images/logo.png";
import { searchPlaceholder } from "../utils/constants";
import React from "react";
import Drug from "./Drug";
import { getMatchingResults } from "../models/model";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSearchResults: false, searchResponse: [] };
  }
  render() {
    const { showSearchResults, searchResponse } = this.state;
    return (
      <div className="relative flex flex-col py-8 m-auto w-3/5 h-screen font-medium">
        <div className="sticky flex flex-col space-y-5 left-0 right-0 top-0 px-4 py-3">
          <div className="grid grid-cols-2">
            <img
              src={logo}
              className="w-12 h-12 md:w-12 md:h-auto"
              alt="logo"
            />
            <a
              className="text-gray-600 text-sm underline place-self-end mr-0"
              href="#"
              target="_blank"
            >
              external link
            </a>
          </div>
          <label className="text-gray-600 text-lg h-auto mx-2 my-8" id="search">
            Search
          </label>
          <input
            className="py-3 px-4 border-solid border-2 border-blue-400 rounded-md placeholder-gray-400 italic w-full text-gray-800 text-lg shadow-md focus:outline-none"
            htmlFor="search"
            type="search"
            placeholder={searchPlaceholder}
            onKeyUp={(e) => this.handleSearch(e)}
            onChange={(e) => this.handleClearTheSearch(e)}
          ></input>
          <h3
            className="text-gray-600 text-sm mx-2"
            hidden={!showSearchResults}
          >
            Showing {searchResponse.length} result(s)
          </h3>
        </div>
        <div className="relative overflow-auto pt-2 px-4 space-y-4 no-scrollbar">
          {showSearchResults &&
            searchResponse.map((drug) => <Drug key={drug.id} data={drug} />)}
        </div>
      </div>
    );
  }

  handleSearch = async (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      console.log("In handleSearch", e.key, e.target.value);
      const searchResponse = await getMatchingResults(e.target.value);
      console.log(searchResponse);
      this.setState({ showSearchResults: true, searchResponse });
    }
  };
  handleClearTheSearch = (e) => {
    if (e.target.value === "") {
      console.log("In handleClearTheSearch", e.target.value);
      this.setState({ showSearchResults: false, searchResponse: [] });
    }
  };
}

export default App;
