import React from 'react';
import './Footer.css';

function Footer({ items }) {
    return (
        <div className='divFooter'>
            {items.length > 0 ?
                <h4>Currently {items.length} List {items.length < 2 ? "item" : "items"} in the list</h4>
                : <h4>Currently 0 item in the list</h4>
            }
        </div>
    )
}

export default Footer