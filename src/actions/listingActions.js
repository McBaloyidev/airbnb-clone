import {
  LISTING_LIST_REQUEST,
  LISTING_LIST_SUCCESS,
  LISTING_LIST_FAIL,
} from "../types/ListingTypes";
import axios from "axios";

export const listListing = () => async (dispatch) => {
  try {
    dispatch({ type: LISTING_LIST_REQUEST });

    const { data } = await axios.get("http://localhost:5000/listings");

    dispatch({ type: LISTING_LIST_SUCCESS, payload: data });
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    dispatch({ type: LISTING_LIST_FAIL, payload: errorMessage });
  }
};
