import {API_KEY, API_URL} from "./constants";

export const updateOperation = (id, operation, successCallback) => {
    fetch(`${API_URL}/operations/${id}`, {
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(operation)
    })
      .then(response => response.json())
      .then(response => {
        if (response.error === false && typeof successCallback === "function") {
          successCallback(response.data);
        }
      })
      .catch(err => console.log(err));
  };