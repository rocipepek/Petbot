import React from 'react';
import Jelly from './components/Jelly/Jelly';
import './Home.css';
import Fade from 'react-reveal/Fade';

const Home = ({history}) => {
    return (
        <div className='home-jellybot-container'>
            <div className='home-jellybot-content'>
                <Jelly history={history}/>
                <div className= 'home-jellybot-greeting'>
                    <Fade opposite>
                        <h2> ¡Hola Humano! </h2>
                    </Fade>
                    <Fade opposite>
                        <label> ¿Querés charlar? </label>
                        <label> Click sobre mí para comenzar</label>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Home;