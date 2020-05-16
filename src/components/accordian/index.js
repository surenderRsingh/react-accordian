import React,{useState,useRef,useEffect} from 'react'
import styled from 'styled-components';

import Header from './Header';





const Accordian = (props) => {
    const {defaultIsOpen=false} = props;
    const [isOpen,setIsOpen] = useState(defaultIsOpen);
    const [contentHeight,setContentHeight] = useState('0px');
    const contentRef = useRef(null);

    const renderContent = items => <div ref={contentRef} className='content'>{items}</div>

    const toggleAccordian = () => {
        setContentHeight(isOpen ? '0px' : `${contentRef.current.scrollHeight}px`);
        setIsOpen(!isOpen);
    }

    useEffect(()=>{
        setContentHeight(defaultIsOpen ?`${contentRef.current.scrollHeight}px`:'0px');
    },[defaultIsOpen])

    return (
        <StyledAccordianSection contentHeight={contentHeight}>
            <Header isOpen={isOpen} title={props.title} onClick={toggleAccordian} />
            {renderContent(props.children)}
        </StyledAccordianSection>
    )
}

const StyledAccordianSection = styled.div`
  display: flex;
  flex-direction: column;

  .content {
    background-color: white;
    overflow: hidden;
    transition: max-height 0.6s ease;
    max-height: ${props=> props.contentHeight}; 
    padding-left:20px;
  }
`;


export default Accordian
