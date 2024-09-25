import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "./componentes/Modal";
import { Grid } from "./componentes/Grid/index";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { useDisclosure } from "@chakra-ui/react";

const Cadastrar = styled.button`
    width: 100px;
    height: 50px;
    background-color: #3CB371;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    margin-top: 20px;
    margin-right: 100px;
`;

function App() {
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);
    const { isOpen, onOpen} = useDisclosure(); 
    const [ modalOpen, setModalOpen] = useState(false);

  const handleButtonClick= (user = null) => {
    setModalOpen(false);
}
   
  
    

    const getUsers = async () => {
        try {
            const res = await axios.get("http://localhost:8800");
            setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleOpenModal = (user = null) => {
        setOnEdit(user);
        setModalOpen(true); 
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <Cadastrar onClick={() => handleOpenModal()}>Cadastrar</Cadastrar>
            <Grid 
                users={users} 
                setUsers={setUsers} 
               
            />
            {modalOpen && (
            <Modal isOpen={isOpen} onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} onCancel={handleButtonClick} onCLose={handleButtonClick} />
          )}
            </>
    );
}

export { App };
