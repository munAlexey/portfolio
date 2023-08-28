import home from '../../images/home-page.svg';
import portfolio from '../../images/portfolio-page.svg';
import contact from '../../images/contact-page.svg';
import aboutMe from '../../images/about-me-page.svg';
import hobby from '../../images/hobby-page.svg';
import './Nav.css';

function Nav() {
  return (
    <div className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a href="" className='nav__link'>
              <img src={home} className='nav__img'/>
            </a>
            </li>
          <li className='nav__item'>
            <a href="" className='nav__link'>
              <img src={aboutMe} className='nav__img'/>
            </a>
            </li>
          <li className='nav__item'>
            <a href="" className='nav__link'>
              <img src={hobby} className='nav__img'/>
            </a>
            </li>
          <li className='nav__item'>
            <a href="" className='nav__link'>
              <img src={portfolio} className='nav__img'/>
            </a>
            </li>
          <li className='nav__item'>
            <a href="" className='nav__link'>
              <img src={contact} className='nav__img'/>
            </a>
          </li>
        </ul>
      </div>
  )
}

export default Nav;