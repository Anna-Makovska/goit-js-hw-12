import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "48861034-650d0692db40a28ff83f5fb54";


export function getImages(value) {

    let params = {
        key: API_KEY,
        q: value,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,

    };
    return axios
        .get(BASE_URL, { params })
        .then(res => {
        if (res.data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: "topRight",
                pauseOnHover: true,
                balloon: true,
            });
        }
        return res.data.hits;
    })
        .catch(error => {
            console.error(error);
            throw error;
    })
}

