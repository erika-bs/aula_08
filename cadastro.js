import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #f0f2f5;
`;

const CadastroBox = styled.div`
width: 350px;
padding: 40px;
background-color: white;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
border-radius: 10px;
text-align: center;
`;

const Title = styled.h2`
margin-bottom: 20px;
color: #333;
`;

const Input = styled.input`
width: 100%;
padding: 10px;
margin: 10px 0;
border: 1px solid #ddd;
border-radius: 5px;
font-size: 16px;
`;
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: #007bff;
color: white;
border: none;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
margin-top:20px;
&:hover {
    background-color: #0056b3;
}
`;

function Cadastro(){
    return (
    <Container>
        <CadastroBox>
            <Title>Faça seu cadastro</Title>
            <form>
                <Input type="text" placeholder="Digite seu nome"/>
                <Input type="text" placeholder="Digite seu sobrenome"/>
                <Input type="email" placeholder="Digite seu Email" required/>
                <Input type="text" placeholder="Digite seu telefone"/>
                <Input type="password" placeholder="Digite sua senha" required/>
                <Button type="submit">cadastrar</Button>
            </form>
        </CadastroBox>
    </Container>
    );
}

export default Cadastro;