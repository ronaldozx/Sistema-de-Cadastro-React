import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { Modal } from "../Modal";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
  `;

const Thead = styled.thead``;
const Tbody = styled.tbody``;
const Tr = styled.tr``;

const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }`
;

const Td = styled.td`
  padding-top: 15px;
  text-align: ${({ alignCenter }) => (alignCenter ? "center" : "start")};
  width: ${({ width }) => (width ? width : "auto")};

  @media (max-width: 500px) {
    ${({ onlyWeb }) => onlyWeb && "display: none"}
  }
`

const Grid = ({ users, setUsers, setOnEdit, getUsers, onEdit }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setOnEdit(null); 
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);
        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Telefone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item) => (
          <Tr key={item.id}> {/* Usar item.id como chave */}
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%" onlyWeb>{item.fone}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => {
                setModalOpen(true); 
                handleEdit(item); 
                
              }} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
      {modalOpen && (
        <Modal
          onSubmit={handleCloseModal} 
          onCancel={handleCloseModal} 
          onCLose={handleCloseModal}
          onEdit={onEdit}
          setOnEdit={setOnEdit} 
          getUsers={getUsers}
        />
      )}
    </Table>
  );
};

export { Grid };