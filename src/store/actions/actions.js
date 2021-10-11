import Api from "../../api/Api"

export const searchImages = inputValue => async dispatch => {
  const response = await Api.get("search/photos", {
    params: { query: inputValue },
  })
  dispatch({
    type: "SEARCH_IMAGES", payload: response.data.results
  })

}
