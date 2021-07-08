import styled from 'styled-components';

const ButtonView = styled.span`
  display:inline-block;
  padding: 12px;
  border:2px solid black;
  border-radius:6px;
  cursor:pointer;
  font-size:14px;
  color:black;
`;

function CountButton(props){
  return (
    <ButtonView onClick={props.buttonEvent}>{props.name}</ButtonView>
  )
}

export default CountButton;