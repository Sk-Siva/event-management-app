import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-image:url('https://img.freepik.com/free-photo/top-view-international-worker-s-day-still-life_23-2150337550.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725148800&semt=ais_hybrid');
  background-size:cover;
  min-height:100vh;
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border-radius:10px;
  border-width:0px;
`;

export const Button = styled.button`
  background-color:#47d147;
  color:#ffffff;
  border-width:0px;
  border-radius:10px;
  padding:10px;
  cursor: pointer;
`;
