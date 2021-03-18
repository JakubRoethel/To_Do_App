import {API_KEY, API_URL} from "./constants";

const updateTask = (id,task,successCallback) => {
    fetch(`${API_URL}/tasks/${id}` , {
        headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(task)
    })
    .then (response => response.json())
    .then (response => {
        if (response.error === false && typeof successCallback === "function") {
          successCallback(response.data);
        }
      })
      .catch(err => console.log(err));
}


export default updateTask