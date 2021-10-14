const getMatchingResults = async (searchString) => {
  try {
    const url = "/search/" + searchString;
    const request = { headers: { accept: "application/json" }, method: "GET" };
    const response = await fetch(url, request);
    return new Promise(async (resolve, reject) => {
      const jsonResponse = response.json();
      if (response.ok) {
        resolve(jsonResponse);
      } else {
        reject(jsonResponse);
      }
    });
  } catch (e) {
    alert("Error: " + e);
  }
};
export { getMatchingResults };
