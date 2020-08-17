import React from 'react'
import { Form } from 'react-bootstrap';

export default function SearchForm({ params, onParamChange }) {
    return (    
       <Form className="md-4">
           <Form.Row className="align-items-end">
               <Form.Group as={Col}>
                   <Form.Label>Description</Form.Label>
                   <Forn.Control onChange={onParamChange} value={params.description} name="description" type="text" />
               </Form.Group>
               <Form.Group as={Col}>
                   <Form.Label>Location</Form.Label>
                   <Forn.Control onChange={onParamChange} value={params.description} name="location" type="text" />
               </Form.Group>
               <Form.Groud as={Col} xs="auto" className="ml-2">
                   <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Only Full Time" type="checkbox" className="mb-2"/>
               </Form.Groud>
           </Form.Row>
       </Form>
    )
}