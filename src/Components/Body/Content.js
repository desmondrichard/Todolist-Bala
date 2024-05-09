import React, { useState } from 'react';
import './Content.css';
import Form from 'react-bootstrap/Form';

function Content() {


    return (
        <div className='divContent'>
            <ul >
                <li className="flex-container">
                    <input type="checkbox" checked="checked" />
                    <p style={{ marginTop: '15px' }}>Playing</p>
                    <i className="bi bi-trash3 "></i>
                </li>
            </ul>
        </div>
    )
}

export default Content