import './Main.css';
import Header from '../header/Header';
import ya from '../../images/ya.jpg';

function Main(props) {
  return (
    <div className='main container'>
      <Header />
      <div>
        <img src={ya} alt='ma baby' width={200} height={300} className='main__img'/>
        <div className='main__block'>
          <h2 className='main__title'>- I`m Alex Mun.<span className='main__title-span'>web developer</span></h2>
          <p className='main__subtitle'></p>
        </div>
      </div>
    </div>
  )
}

export default Main;