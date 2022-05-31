export const GET_CITIES = 'GET_CITIES';

const API_URL = 'https://mocki.io/v1/3af52c2f-442e-43fa-a39c-56e66c1edb1d';




export const getCities = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_CITIES,
                    payload: json
                });
            } else {
                alert('Unable to fetch!');
            }
        }
    } catch (error) {
        alert(error);
    }
}