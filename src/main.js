import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createLogger } from "vite";

const form = document.querySelector(`.submit-form`);
form.addEventListener(`submit`, searchRequest);
function searchRequest(characteristics) {

    const BASE_URL = `https://pixabay.com/api/`;
    const API_KEY = `41768952-3eb5a1819d194e4ebd739434d`
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${characteristics}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(resp => {
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            console.dir(resp)
            return resp.json()
    })

}

searchRequest(`cat`).then(data => console.log(data)).catch(err => console.log(err))

iziToast.show({
    message: '❌ Sorry, there are no images matching your search query. Please try again!'
});

