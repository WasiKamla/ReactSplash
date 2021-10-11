import "../css/imageslist.css"
import { connect } from "react-redux"
import Masonry from 'react-masonry-css'

//...

const ImagesList = (props) => {

  let images = props.images

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <div className="container my-container">
      {images && <h5 className="my-5 mx-3"> Showing: `{images.length}` results </h5>}
      <div className="container my-5">
        <hr />
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return { images: state.Images }
}

export default connect(mapStateToProps)(ImagesList);