import "./Hobby.css";
import Header from "../header/Header";
import sf from "../../images/sf.png";
import "../animation/Animation.css";
import transition from "../../utils/transition";

function Hobby(props) {
  return (
    <div className="main container">
      <Header />
      <div className="decor-el"></div>
      <div className="decor-el-1"></div>
      <div className="decor-el-2"></div>
      <div className="decor-el-3"></div>
      <div className="decor-el-4"></div>
      <div className="hobby__block">
        <div className="main__img">
          <img src={sf} alt="ma baby" width={300} height={312}/>
        </div>
        <div className="main__text-block">
          <h2 className="main__title">
            - I`m <span className="main__title-span">Alex Mun.</span>
            <br></br> Frontend developer
          </h2>
          <p className="main__subtitle">
            English texts for beginners to practice reading and comprehension
            online and for free. Practicing your comprehension of written
            English will both improve your vocabulary and understanding of
            grammar and word order.
          </p>
        </div>
      </div>
    </div>
  );
}

export default transition(Hobby);
