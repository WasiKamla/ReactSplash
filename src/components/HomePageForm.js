import { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux"
import { searchImages } from "../store/actions/actions"
import "../css/homepageform.css"

const Form = (props) => {
  const [inputValue, setinputValue] = useState("")
  const history = useHistory()
  //Form handler
  const submitHandler = async (e) => {
    e.preventDefault()

    props.searchImages(inputValue)
    history.push("/search")
  }

  return (
    <div>
      <div className='container homepage-form-container'>
        <div className="form-container mb-2">
          <form onSubmit={(e) => submitHandler(e)} >
            <input
              onChange={(e) => setinputValue(e.target.value)}
              className=" home-search form-control"
              placeholder="Search free high-resoultion images"
              type="text"
              name="SearchInput"
              id="searchInput" />
          </form>
        </div>
      </div>
    </div>

  );
}

export default connect(null, { searchImages })(Form)