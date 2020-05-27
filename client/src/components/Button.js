import styled from 'styled-components';


export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border: none;
color:var(--lightBlue);

padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2remm 0;
transition:all 0.5s ease-in-out;
&:hover{
    
    color:var(--mainDark);  
}
&:focus{
    outline:none;
}
`
export default ButtonContainer;

// border: 0.05rem solid var(--lightBlue);
// bored-color: ${props => props.cart? "var(--mainYellow)":"var(--lightBlue)"};
// border-radius:0.5rem;