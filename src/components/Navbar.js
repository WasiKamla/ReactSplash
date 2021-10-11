import Form from "./Form"
import "../css/navbar.css"
const Navbar = () => {
  const logo = "https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg"

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <img src={logo} className="img-fluid" alt="ReactSplash Logo Image" />
          <a className="navbar-brand mx-2 d-none d-md-flex" href="#">ReactSplash</a>
          <a className="navbar-brand mx-2 me-auto d-flex d-md-none" href="#">ReactSplash</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-md-flex ">
            <Form />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;