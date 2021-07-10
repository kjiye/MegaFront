import styled from 'styled-components';

const Button = styled.span`
    display:inline-block;
    padding:12px;
    border:2px solid black;
    border-radius:8px;
    cursor:pointer;
    font-size:14px;
`;

function CountButton(props){
    return (
        <Button onClick={props.buttonEvent}>{props.name}</Button>
    );
}

export default CountButton;