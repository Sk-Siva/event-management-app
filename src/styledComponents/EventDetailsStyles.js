import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding: 20px;
  border-radius: 10px;
  background-image:url('https://img.freepik.com/free-photo/top-view-notebooks-desk-with-succulent-plant-paper-clips_23-2148415025.jpg');
  background-size:cover;
  min-height:100vh;
`;

export const Event = styled.div`
border:0 solid blue;
padding:10px;
border-radius:10px;
background-color:#0099ff;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#ffffff;

`

export const Button = styled.button`
  background-color:${(props) =>(props.color === "red" ? "#ff0000" : "#66ccff")};
  color:#ffffff;
  border-width:0px;
  border-radius:10px;
  padding:10px;
  cursor: pointer;
  margin:10px;
`

export const BtnContainer = styled.div`
display:flex;
justify-content:space-around;
`