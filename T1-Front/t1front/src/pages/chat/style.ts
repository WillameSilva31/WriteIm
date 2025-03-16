import styled from "styled-components";

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
    background-color: red;
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
    background-color: aquamarine;
`;

export const WriteInput = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    background-color: blueviolet;
`;

export const FormUpdate = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
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

export const UpdateButton = styled.button`
    background-color: #4facfe;
    font-family: "Permanent Marker", serif;
    font-weight: 400;
    color: white;
    font-size: 20px;
    padding: 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 30%;
    transition: background-color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  `;