import { Nav } from 'react-bootstrap';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <Nav activeKey='/' className='justify-content-between container'>

        <Nav.Item className={classes.header_logo}>
          <Nav.Link href='/'>
            Book-Store
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className={classes.header_icon}>
          <h1>Home</h1>
        </Nav.Item>

        <Nav.Item className={classes.header_icon}>
          <h1>About</h1>
        </Nav.Item>
        <Nav.Item className={classes.header_icon}>
          <h1>Locations</h1>
        </Nav.Item>
        <Nav.Item className={classes.header_icon}>
          <h1>Contact</h1>
        </Nav.Item>

        <Nav.Item className={classes.header_icon}>
          <button>book now</button>
        </Nav.Item>


        <Nav.Item className={classes.header_icon}>
        <i className="fa-brands fa-facebook-f" style={{ color: "#e0ae42" }} />        </Nav.Item>


        <Nav.Item className={classes.header_icon}>
        <i className="fa-brands fa-instagram" style={{ color: "#e8a83b" }} />        </Nav.Item>
      </Nav>
    </header>
  )
}

export default Header