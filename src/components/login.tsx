import React, { FormEvent } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

interface loginProps {
    onIdSubmit: (p: string) => void;
}

export default function Login(props: loginProps) {
    let id: string;

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        props.onIdSubmit(id);
    };

    function createNewId() {
        props.onIdSubmit(uuidV4());
    }
  return (
    <Container className='align-items-center d-flex' style={{height: "100vh"}}>
        <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Group>
                <Form.Label>enter your Id</Form.Label>
                <Form.Control 
                    type="text"
                    onChange={(e) => {id = e.target.value}}
                >
                </Form.Control>
            </Form.Group>
            <Button type="submit" className='m-2'>login</Button>
            <Button onClick={createNewId} variant="secondary">create an id</Button>
        </Form>
    </Container>
  )
}
