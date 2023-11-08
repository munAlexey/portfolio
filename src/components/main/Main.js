import './Main.css';
import Header from '../header/Header';
import ya from '../../images/image 1 (2).png';
function Main(props) {
  return (
    <div className='main container'>
      <Header />
      <div className='main__block'>
        <div className='main__img'>
          <img src={ya} alt='ma baby' width={300}/>
        </div>
        
        <div className='main__text-block'>
          <h2 className='main__title'>- I`m <span className='main__title-span'>Alex Mun.</span><br></br> Frontend developer</h2>
          <p className='main__subtitle'>English texts for beginners to practice reading and comprehension online and for free. Practicing your comprehension of written English will both improve your vocabulary and understanding of grammar and word order.</p>
        </div>
      </div>
    </div>
  )
}

export default Main;