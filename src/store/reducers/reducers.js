import { combineReducers } from "redux";

const ImagesReducer = (searchedImages = null, action) => {
  if (action.type === "SEARCH_IMAGES") {
    let payload = action.payload
    return payload
  }
  return searchedImages
}

export default combineReducers({
  Images: ImagesReducer,
})