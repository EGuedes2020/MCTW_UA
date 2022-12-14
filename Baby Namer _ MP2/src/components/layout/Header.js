import "./Header.css";

function Header() {
  return (
    <div className="pt-4 pb-2 bg-white header">
      <div className="justify-content-center">
        <img src="icons/logo.svg" alt="logo" className="logoSvg" />
      </div>
      <div className="text-center mt-2">
        <h1 className="logoTxt">Baby Namer</h1>
      </div>
    </div>
  );
}

export default Header;
