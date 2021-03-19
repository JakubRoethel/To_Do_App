import {API_KEY, API_URL} from "./constants";


const createOperation = (id, operation, successCallback) => {
    fetch(`${API_URL}/tasks/${id}/operations`, {
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(operation)
    })
      .then(response => response.json())
      .then(response  => {
        if (response.error === false && typeof successCallback === "function") {
          successCallback(response.data);
        }
      })
      .catch(err => console.log(err));
  };


  export default createOperation