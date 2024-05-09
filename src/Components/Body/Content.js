import React, { useState } from 'react';
import './Content.css';


function Content() {
    const [items, setItems] = useState(
        [
            {
                id: 1,
                checked: true,
                label: "Playing"
            },
            {
                id: 2,
                checked: false,
                label: "Walking"
            },
            {
                id: 3,
                checked: true,
                label: "Eating"
            }
        ]
    )

    function handleCheckBoxClick(id) {
        console.log("ID", id)
        const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }

    function handleDeleteClick(id) {
        console.log("Clicked Delete btn");
        const listItems = items.filter((item) => (item.id !== id))
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }

    return (
        <div className='divContent'>
            <ul>
                {items.map((i) => (
                    <li className="flex-container" key={i.id}>
                        <input type="checkbox" checked={i.checked} onChange={() => { handleCheckBoxClick(i.id) }} />
                        <p className='pContent' style={(i.checked) ? { textDecoration: 'line-through' } : null} onDoubleClick={() => { handleCheckBoxClick(i.id) }}>{i.label}</p>
                        <button type="button" onClick={() => { handleDeleteClick(i.id) }}><i className="bi bi-trash3 "></i></button>
                    </li>
                )
                )}

            </ul>
        </div>
    )
}

export default Content