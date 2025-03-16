import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
`;

export const LeftContainerLogin = styled.div`
width: 50%;
height: 100%;
box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
background-color: #45AFE9;
display: flex;
justify-content: start;
align-items:center;
flex-direction: column;
`;

export const LoginContainer = styled.div`
width: 50%;
height: 50%;
background-color: white;
`;

export const LoginNameContainer = styled.div`
width: 100%;
height: 15%;
background-color: #45AFE9;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const LoginName = styled.h1`
font-family: "Permanent Marker", serif;
font-weight: 400;
font-size: 25px;
color: white;
`;

export const FormDiv = styled.div`
width: 100%;
height: 80%;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  text-align: left;
`;

export const Label = styled.label`
display: flex;
justify-content: left;
font-size: 0.9rem;
margin-bottom: 0.5rem;
font-family: "Permanent Marker", serif;
font-weight: 400;
color: #45AFE9;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: "Permanent Marker", serif;
font-weight: 400;
  font-size: 15px;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4facfe;
    outline: none;
  }
`;

export const CustomLink = styled(Link)`
  color:  #45AFE9;
  text-decoration: none; 
  font-weight: bold; 
  
  &:hover {
    color: #45AFE9; 
    text-decoration: underline; 
  }
`;

export const RegisterRedirect = styled.div`
margin-top: 10px;
font-family: "Permanent Marker", serif;
font-weight: 400;
color:gray;
`;

export const Button = styled.button`
  background-color: #4facfe;
  font-family: "Permanent Marker", serif;
  font-weight: 400;
  color: white;
  font-size: 25px;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 80%;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Name = styled.h1`
font-family: "Permanent Marker", serif;
font-weight: 400;
font-size: 80px;
font-style: normal;
color: white;
`;


export const RightContainerImage = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const ImageLamp = styled.img`
width:75%;
margin: 0 auto;
`;