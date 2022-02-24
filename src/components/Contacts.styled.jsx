import styled from 'styled-components';


export const FormContainer = styled.div`
    margin-bottom: 20px;
    display: inline-flex;
    flex-direction: column;
    border: 1px solid black;
    padding:  20px 150px  25px 15px;
`;

export const LabelContainer = styled.div`
margin-bottom: 20px;
display: inline-flex;
flex-direction: column;
`;

export const Label = styled.label`
margin-bottom: 5px;
`;


export const FormButton = styled.button`
width: 100px;
:hover,
:focus {
  background-color: blue;
  color: white;
}
`;

export const List = styled.ul`
list-style: none;
display: inline-flex;
flex-direction: column;
`;

export const Contact = styled.li`
display: inline-flex;
margin-bottom: 20px;
align-items: center;
justify-content: space-between;
width: 300px;
`;

export const ContactButton = styled.button`
margin-left: 20px;
width: 70px;
height: 30px;
:hover,
:focus {
  background-color: blue;
  color: white;
}
`;
