import {API_KEY, API_URL} from "./constants";

export const removeOperation = (id, successCallback) => {
    fetch(`${API_URL}/operations/${id}`, {
      headers: {
        "Authorization": API_KEY
      },
      method: "DELETE"
    })
      .then(response => response.json())
      .then(response => {
        if (response.error === false && typeof successCallback === "function") {
          successCallback();
        }
      })
      .catch(err => console.log(err));
  };