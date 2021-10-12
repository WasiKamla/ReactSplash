import Api from "../../api/Api"

export const searchImages = inputValue => async dispatch => {
  const response = await Api.get(`search/photos/query?${inputValue}`)
  dispatch({
    type: "SEARCH_IMAGES", payload: response.data.results
  })

}
export const HomeImages = () => async dispatch => {
  const response = await Api.get("/photos/random?count=20")
  dispatch({
    type: "HOME_PAGE_IMAGES", payload: response.data
  })
}

