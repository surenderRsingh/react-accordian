import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentContainer from './components/ContentContainer' ;
import Accordian from './components/accordian'
const App = (props) => (

    <React.Fragment>
        <ContentContainer>
            <Accordian title='I am accordian' defaultIsOpen = {true} >
                <div>random content  Excepteur enim quis sint enim laboris excepteur. Anim adipisicing ea ex commodo officia velit qui nulla dolor veniam magna. Anim est nulla magna quis consectetur sit velit ipsum pariatur quis magna laborum do ipsum. Proident anim sit officia aliquip veniam Lorem duis est sunt labore. Ipsum duis occaecat fugiat cupidatat sit dolore ex pariatur aliquip. Tempor occaecat ipsum labore excepteur veniam.</div>
            </Accordian>
        </ContentContainer>
    </React.Fragment>
)

export default App;
