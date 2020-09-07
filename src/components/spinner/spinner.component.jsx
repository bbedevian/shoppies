import React from 'react';
import {motion} from 'framer-motion'
import './spinner.styles.scss'

const spinTransition = {
    loop: Infinity,
    duration: 1,
    ease: 'linear'
}

const Spinner = () => {
    return (
        <div className='container'>
            <motion.span className='circle' animate={{rotate: 360}} transition={spinTransition}/>
        </div>
    );
}



export default Spinner;
