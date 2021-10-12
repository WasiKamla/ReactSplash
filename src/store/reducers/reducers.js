import { combineReducers } from "redux";


const HomeImagesReducer = (homeImages = null, action) => {
  if (action.type === "HOME_PAGE_IMAGES") {
    let payload = action.payload
    return payload
  }
  return homeImages
}


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
