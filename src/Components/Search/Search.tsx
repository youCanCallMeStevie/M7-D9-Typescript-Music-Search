import React from 'react'
import {RouteComponentProps} from 'react-router-dom';
import {Form} from 'react-bootstrap'

function Search(props: RouteComponentProps) {
    return (
        <>
      <Form.Group className="p-5">
        <Form.Label>Search</Form.Label>
        <Form.Control onChange={handleChange} />
      </Form.Group>
    </>
    )
}

export default Search
