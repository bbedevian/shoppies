import React from 'react';
import './homepage.styles.scss';
import SelectedContainer from '../../components/selected-container/selected-container.component';
import Search from '../../components/search/search.component';
import Directory from '../../components/directory/directory.component';


const HomePage = () => {
    return (
        <div className='homepage'>
            <SelectedContainer/>
            <Search/>
            <Directory/>
        </div>
    );
}

export default HomePage;
