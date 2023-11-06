import home from '../../images/home-page.svg';
import portfolio from '../../images/portfolio-page.svg';
import contact from '../../images/contact-page.svg';
import aboutMe from '../../images/about-me-page.svg';
import hobby from '../../images/hobby-page.svg';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link to='/' className='nav__link'>
              <img src={home} className='nav__img' alt='home-page'/>
            </Link>
            </li>
          <li className='nav__item'>
            <Link to='/aboutMe' className='nav__link'>
              <img src={aboutMe} className='nav__img' alt='about-me-page'/>
            </Link>
            </li>
          <li className='nav__item'>
            <Link to='/hobby' className='nav__link'>
              <img src={hobby} className='nav__img' alt='hobby-page'/>
            </Link>
            </li>
          <li className='nav__item'>
            <Link to='/portfolio' className='nav__link'>
              <img src={portfolio} className='nav__img' alt='portfolio-page'/>
            </Link>
            </li>
          <li className='nav__item'>
            <Link to='/contact' className='nav__link'>
              <img src={contact} className='nav__img' alt='contacts-page'/>
            </Link>
          </li>
        </ul>
      </div>
  )
}

export default Nav;