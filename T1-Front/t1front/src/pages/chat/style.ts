import styled from "styled-components";
import BKIcon from "../../assets/BKIcon.png";

interface ButtonProps {
    bgColor?: string;
    textColor?: string;
  }

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
`;

export const Header = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    position: absolute;
    background-color: blue;
`;

export const HeaderLeft = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color:  #45AFE9;                
`;

export const ImgIcon = styled.img`
    width: 100px;
    height: 100px;   
`;

export const NameUser = styled.h1`  
    font-family: "Permanent Marker", serif;
    font-weight: 10;
    font-size: 25px;
    color: white;
`;

export const HeaderRight = styled.div`  
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  #45AFE9;
`;

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: brown;
`;

export const OthersUsers = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color:rgb(221, 217, 217);
`;

export const Chat = styled.div`
    width: 85%;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
`;

export const Messages = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    background-image: url(${BKIcon});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow-y: auto;
`;

export const WriteInput = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(239, 239, 239);
`;

export const FormUpdate = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    border-radius: 20px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background-color: white;
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

export const Name = styled.h1`
    font-family: "Permanent Marker", serif;
    font-weight: 400;
    font-size: 25px;
    font-style: normal;
    color: white;
    color: #45AFE9;
`;

export const Buttons = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const UpdateButton = styled.button<ButtonProps>`
  --button_radius: 0.5em;
  --button_color: ${(props) => props.bgColor || "#4facfe"}; 
  --button_outline_color: ${(props) => props.textColor || "#3b8dfe"};

  font-family: "Permanent Marker", serif;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => props.textColor || "white"};
  padding: 0;
  border: none;
  border-radius: var(--button_radius);
  cursor: pointer;
  width: 30%;
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
    color: ${(props) => props.textColor || "white"};
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

export const SendMessageInput = styled.input`
  width: 60%;
  height: 50%;
  border-radius: 25px;
  border: none;
  font-size: 20px;
  padding-left: 10px; 
  display: flex;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
  font-family: "Permanent Marker", serif;
  font-weight: 400;
`;

export const DivButtonSendMessage = styled.div`
  width: 35%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SendImg = styled.img`
  width: 70px;
  height: 30px;
`;