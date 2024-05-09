import React from 'react';
import './Content.css';
import Form from 'react-bootstrap/Form';

function Content() {
    return (
        <div className='divContent'>
            <ul className="flex-container">
                <li>
                    <div className="flex-items"><Form.Check /></div>
                    <div className="flex-items">Play</div>
                    <div className="flex-items trash"><i className="bi bi-trash3 "></i></div>
                </li>

            </ul>
        </div>
    )
}

export default Content