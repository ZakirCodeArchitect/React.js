import './Header.css';
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <nav>
        <ul>
          <li><a href="#">{props.main}</a></li>
          <li><a href="#">{props.nav1}</a></li>
          <li><a href="#">{props.nav2}</a></li>
        </ul>
      </nav>
    </header>
  );
}

// validation for data type checking
Header.propTypes = {
  title: PropTypes.string.isRequired,  // for mandatort, must not be undefined. 
  main: PropTypes.string,
  nav1: PropTypes.string,
  nav2: PropTypes.string,
}

// used if in case the props are not passed, these are used as default.
Header.defaultProps = {
  title: "set title",
  main: "set main",
  nav1: "Set nav1",
  nav2: "Set nav2"
}

export default Header;
