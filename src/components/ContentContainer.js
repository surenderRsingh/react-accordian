import React from 'react';
import Container from 'react-bootstrap/Container';

const ContentContainer = props => (
    <Container>
        {props.children}
    </Container>
);

export default ContentContainer;
