import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
`;

export const LeftContainerImage = styled.div`
width: 50%;
height: 100%;
box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
`;

export const LoginContainer = styled.div`
width: 50%;
height: 50%;
background-color: white;
border-radius: 20px;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

export const LoginNameContainer = styled.div`
width: 100%;
height: 15%;
background-color: #45AFE9;
display: flex;
border-top-right-radius: 20px;
border-top-left-radius: 20px;
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
height: 87%;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  width: 90%;
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

export const RegisterRedirect = styled.div`
margin-top: 10px;
font-family: "Permanent Marker", serif;
font-weight: 400;
color:gray;
`;

export const Button = styled.button`
  --button_radius: 0.75em;
  --button_color: #4facfe; 
  --button_outline_color: #3b8dfe; 

  font-family: "Permanent Marker", serif;
  font-size: 15px;
  font-weight: 400;
  color: white;
  padding: 0;
  border: none;
  border-radius: var(--button_radius);
  cursor: pointer;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: var(--button_outline_color);
  transition: transform 0.1s ease, background-color 0.3s;

  .button_top {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 1.5em;
    background: var(--button_color);
    color: white;
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
    width: 100%;
  }

  &:hover .button_top {
    transform: translateY(-0.33em);
  }

  &:active .button_top {
    transform: translateY(0);
  }
`;

export const Name = styled.h1`
font-family: "Permanent Marker", serif;
font-weight: 400;
font-size: 80px;
font-style: normal;
color: white;
`;


export const RightContainerLogin = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: start;
align-items: center;
flex-direction:column;
background-color: #45AFE9;
`;

export const ImageLamp = styled.img`
width:75%;
margin: 0 auto;
`;

export const CustomLink = styled(Link)`
  color:  #45AFE9;
  text-decoration: none; 
  font-weight: bold; 
  
  &:hover {
    color:  #45AFE9; 
    text-decoration: underline; 
  }
`;