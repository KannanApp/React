import axios from "axios";

export const fetchAPI = (start = 0) => {
    const pageNum = start === 0 ? start : start?.pageParam + 1;
    return axios.get(`${process.env.REACT_APP_API_PHOTOURL}_start=${pageNum}&_limit=5`)
}