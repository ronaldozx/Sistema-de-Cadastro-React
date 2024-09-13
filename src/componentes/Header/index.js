import styled from "styled-components"
const HeaderContainer = styled.header`

    background-color: #696969;
    display:flex;
    justify-content:center;

`
const HeaderTitle = styled.h1`
    color:white;
`

function Header(){

    return (

        <HeaderContainer>
            <HeaderTitle>Olá, esse é o meu sistema de cadastro!!</HeaderTitle>
        </HeaderContainer>

    )

}
export{
    Header
}