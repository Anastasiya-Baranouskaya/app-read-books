import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={StyleSheet.activeLink}
      >
        Home Page
      </NavLink>
      <NavLink
        to="/books"
        className={styles.link}
        activeClassName={StyleSheet.activeLink}
      >
        Search Books
      </NavLink>
    </nav>
  );
};
export default Navigation;
