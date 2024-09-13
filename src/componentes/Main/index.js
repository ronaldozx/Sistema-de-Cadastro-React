import styled from "styled-components"
import { Modal } from "../Modal"
import { useState } from "react"

const MainContainer = styled.div`

    width:100%;
    height:200px;
    background-color:#808080;
    display:flex;
    justify-content:right;

`
const Cadastrar = styled.button`

    width:100px;
    height:50px;
    background-color:#3CB371;
    color:white;
    border-radius: 10px;
    font-weight:bold;
    margin-top:20px;
    margin-right:100px

`
function Main(){
    const [modalOpen, setModalOpen] = useState(false);

    

    const handleButtonClick= () => {
        setModalOpen(false);
    }
    return(
        <MainContainer>
            <Cadastrar onClick={() => setModalOpen(true)}>Cadastrar</Cadastrar>
            {modalOpen && (
                <Modal onSubmit={handleButtonClick} onCancel={handleButtonClick} onCLose={handleButtonClick}>
                
            </Modal>
            )}
        </MainContainer>
    )
}
export {
    Main
}