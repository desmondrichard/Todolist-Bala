import React from 'react';
import './Content.css';


function Content({ items, handleCheckBoxClick, handleDeleteClick }) {

    return (
        <div className='divContent'>
            <ul>
                {items.map((i) => (
                    <li className="flex-container" key={i.id}>
                        <input type="checkbox" checked={i.checked} onChange={() => { handleCheckBoxClick(i.id) }} />
                        <h3 className='pContent' style={(i.checked) ? { textDecoration: 'line-through' } : null} onDoubleClick={() => { handleCheckBoxClick(i.id) }}>{i.label}</h3>
                        <button type="button" onClick={() => { handleDeleteClick(i.id) }}><i className="bi bi-trash3 "></i></button>
                    </li>
                )
                )}

            </ul>
        </div>
    )
}

export default Content