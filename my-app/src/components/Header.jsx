import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>STORE</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories  </a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
