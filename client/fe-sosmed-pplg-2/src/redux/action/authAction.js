import { APISERVICES, config } from "../../utils/services"


export const fetchProfile = (token) => (dispatch) => {
    APISERVICES().get('/auth/me', config(token))
        .then((response) => {
            dispatch({
                type: 'FETCH_PROFILE_SUCCESS',
                payload: {
                    data: response?.data?.data
                }
            })
        })
        .catch(err => {
            console.log(err)
            if (err.response.status === 401) {
                window.location.href = '/login'
            }

            dispatch({
                type: 'FETCH_PROFILE_FAIL',
                payload: {
                    error: err?.response?.data
                }
            })
        })
}