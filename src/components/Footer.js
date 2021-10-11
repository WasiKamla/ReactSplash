import "../css/footer.css"
const Footer = ({ isPending }) => {
  return (
    <footer>
      <div className="text-center">
        {isPending && <h5 className="fw-light">
          Made by <a className="fw-bold" href="#">Waseem Abbas</a>
        </h5>}
        {/* {!not && <h5 className="fw-light">
          Made by <a className="fw-bold" href="#">Waseem Abbas</a>
        </h5>} */}
      </div>
    </footer>
  );
}
export default Footer;