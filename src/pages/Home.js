import "../css/home.css"

import HomePageForm from "../components/HomePageForm";


const Home = () => {
  return (
    <div>
      <div className="img-container">
        <img className="img-fluid homepage-img" src="https://images.unsplash.com/photo-1535968881874-0c39f1503640?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1bmdsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
      <div className="home-form-container text-white">
        <div className="mx-3">
          <h1 className="text-white">ReactSplash</h1>
          <p className="lead">Internet's best source for <a href="#">Free-usable-images</a></p>
        </div>
        <HomePageForm />
        <h2 className="text-center my-4">Powered by <a href="#">Waseem Abbas</a></h2>
      </div>
    </div>
  )
}

export default Home;