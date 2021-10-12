import "../css/home.css"
import HomePageForm from "../components/HomePageForm";
import { connect } from "react-redux"
import { HomeImages } from "../store/actions/actions"
import Masonry from 'react-masonry-css'
import { useEffect } from "react";

//...

const Home = (props) => {

  useEffect(() => {
    props.HomeImages()

  }
  )

  let images = props.images
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div>
      <div className="img-container">
        <img className="img-fluid homepage-img" src="https://images.unsplash.com/photo-1535968881874-0c39f1503640?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1bmdsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
      <div className="home-form-container text-white">
        <div className="mx-3">
          <h1 className="text-white">ReactSplash</h1>
          <p className="lead my-1 d-none d-md-flex">Internet's best source for &nbsp;<a href="#">Free-usable-images</a></p>
        </div>
        <HomePageForm />

      </div>
      <h2 className="author  text-white">Powered by&nbsp;<a href="#">Waseem Abbas</a></h2>
      <div className="row text-center" >

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images && images.map((image => (
            <div key={image.id} >
              <img className="img-fluid" src={image.urls.regular} className="card-img-top"
                alt="images" />
            </div>
          )))}</Masonry>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { images: state.HomePageImages }
}

export default connect(mapStateToProps, { HomeImages })(Home);