import React from 'react';
import './Header.css';

function Header({ title }) {
    return (
        <div className='divHeader'>
            <h3 style={{ whiteSpace: 'nowrap' }}>{title}</h3>
        </div>
    )
}

Header.defaultProps={
    title:'Untitled'
}


export default Header;

