import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/practitioners/";

export function getPractitioners() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}


// export function deleteAuthor(authorId) {
//     return fetch(baseUrl + authorId, { method: "DELETE" })
//         .then(handleResponse)
//         .catch(handleError);
// }
