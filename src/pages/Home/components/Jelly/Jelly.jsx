import React from 'react';
import Lottie from 'react-lottie';
import animationJelly from './Jelly-data.json'
import './Jelly.css';

const Jelly = ({history}) =>{

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationJelly,
       
    }

    function handleOnclick(){
        history.push('./chat');
    }

    return (
        <div onClick={handleOnclick} 
            className='jelly-container'>
            <Lottie 
                options={defaultOptions}
                style= {{height: '300px', width:'70%'}}
            />
        </div>
    );
}

export default Jelly;