/*
React Bootstrap

React-Bootstrap is a complete re-implementation of the Bootstrap components using React. 

It has no dependency on either bootstrap.js or jQuery. If you have React setup and 
React-Bootstrap installed, you have everything you need.

The CSS and details of Bootstrap components are rather opinionated and lengthy. 
React-Bootstrap simplifies this by condensing the original Bootstrap into React-styled components.

https://react-bootstrap.netlify.app/docs/getting-started/introduction

The best way to consume React-Bootstrap is via the npm package which you can 
install with npm

=> npm install react-bootstrap bootstrap


How to Use : 

import Button from 'react-bootstrap/Button';

// or less ideally
import { Button, Alert } from 'react-bootstrap';

*/

import React from 'react'
import { Alert, Spinner, Card, Button, Container, Row, Col } from 'react-bootstrap'


function React_bootstrap() {

    var color = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ];

    return (
        <div>
            <Alert key='primary' variant='primary'>
                This is a 'primary' alert—check it out!
            </Alert>
            <hr />

            {
                color.map((value) => {
                    return (
                        <Alert key={value} variant={value}>
                            This is a {value} alert—check it out!
                        </Alert>
                    )
                })
            }
            <Button variant="primary" size="lg">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-secondary">Secondary</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-warning">Warning</Button>
            <Button variant="outline-danger">Danger</Button>
            <Button variant="outline-info">Info</Button>
            <Button variant="outline-light">Light</Button>
            <Button variant="outline-dark">Dark</Button>

            <hr />

            <Card style={{ width: '250px' }}>
                <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1a0dbe08119%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1a0dbe08119%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.20941543579102%22%20y%3D%2296.3334493637085%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <hr />

            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <Spinner animation="grow" variant="primary" />

            <hr />

            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={12} md={8}>
                        xs=12 md=8
                    </Col>
                    <Col xs={6} md={4}>
                        xs=6 md=4
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default React_bootstrap