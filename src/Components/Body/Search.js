import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Search.css';

function Search() {
    return (
        <div className='my-4 searchParentDiv'>
            <Form>
                <Row className='mx-auto'>
                    <Col lg={9} sm={10} xs={9}>
                        <label htmlFor='addItem' className='labelSearch'>Add Item</label>
                        <Form.Control type="text" placeholder="add item here..." id='addItem' />
                    </Col>
                    <Col lg={{ span: 1, offset: 1 }} sm={{ span: 1 }} xs={2}>
                        <Button variant="outline-success" className='button'>+</Button>
                    </Col>
                    <Col xs={12} sm={12} className='mt-3'>
                        <label htmlFor='searchItems' className='labelSearch'>Search</label>
                        <Form.Control type="text" placeholder="search here..." id="searchItems" />
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Search