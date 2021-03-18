import {API_KEY, API_URL} from "./constants";


const getOperation = (id,successCallback) => {
  fetch(`${API_URL}/tasks/${id}/operations`, {
    headers: {
      "Authorization": API_KEY
    }
  })
    .then(response => console.log(response.json()))
    
    // .then(response => {
    //   if (response.error === false && typeof successCallback === "function") {
    //     successCallback(response.data);
    //   }
    // })
    // .catch(err => console.log(err));
};


export default getOperation