import './App.css';
import Content from './Components/Body/Content';
import Search from './Components/Body/Search';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function App() {

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo_list"))
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

  //Creating a new list item:
  const [newItem, setnewItem] = useState("");

  const addItem = ((label) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const addNewItem = { id, checked: false, label }
    const listItems = [...items, addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  })

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Submitted Form")
    addItem(newItem)
    setnewItem("") //to clear after submitting form
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  }

  // Adding Search Feature:
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className='divApp'>
      <div style={{ width: '75%', border: '1px dashed gray' }}>
        <Header title="Todo List App" />
        <Search newItem={newItem} setnewItem={setnewItem} handleSubmitForm={handleSubmitForm} handleSearchSubmit={handleSearchSubmit} searchItem={searchItem} setSearchItem={setSearchItem} />
        <Content items={items.filter((i) => ((i.label).toLowerCase()).includes(searchItem.toLowerCase()))} handleCheckBoxClick={handleCheckBoxClick} handleDeleteClick={handleDeleteClick} />
        <Footer items={items} />
      </div>
    </div>

  );
}


export default App;
