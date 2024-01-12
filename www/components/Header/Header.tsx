import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header class="header">
      <div class="wrapper">
        <a href="/">
          <img class="header__logo" src="assets/images/vite.svg" alt="" />
        </a>

        <Navigation />
      </div>
    </header>
  );
};

export default Header;
