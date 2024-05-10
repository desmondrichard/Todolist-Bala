import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Search.css';

function Search({ newItem, setnewItem, handleSubmitForm, handleSearchSubmit, searchItem, setSearchItem }) {
    return (
        <div className='my-4 searchParentDiv'>

            <Row className='mx-auto'>
                <Form onSubmit={handleSubmitForm} className='formAddItem'>
                        <label htmlFor='addItem' className='labelSearch'>Add Item</label>
                        <Form.Control type="text" placeholder="add item here..." id='addItem' value={newItem} onChange={(e) => setnewItem(e.target.value)} />
                
                        <Button type="submit" variant="outline-success" className='button'>+</Button>  
                </Form>
                <Form onSubmit={handleSearchSubmit}>
                    <Col xs={12} sm={12} className='mt-3'>
                        <label htmlFor='searchItems' className='labelSearch'>Search</label>
                        <Form.Control type="text" placeholder="search here..." id="searchItems" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
                    </Col>
                </Form>
            </Row>

        </div >
    )
}

export default Search