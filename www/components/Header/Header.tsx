import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header class="header">
      <a href="/">
        <img class="header__logo" src="assets/images/vite.svg" alt="" />
      </a>

      <Navigation />
    </header>
  );
};

export default Header;
