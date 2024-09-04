function Navbar() {
  return (
    <>
      <div className="NavBox">
        <div className="NavLogo">
          <img className="NavLogoImg" src="./image/Logo.png" />
          <div className="NavLogoText">View Post</div>
        </div>
        <div className="NavRegister">
          <button className="NavButton NavText Signup">SignUp</button>
          <div className="NavText">About-Us</div>
          <div className="NavText">Plans</div>
          <button className="NavButton NavText Login">Login</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
