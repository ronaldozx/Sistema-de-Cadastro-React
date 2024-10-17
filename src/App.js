import React, { useState } from "react";
import { Modal } from "./componentes/Modal"; 
import { Grid } from "./componentes/Grid"; 
import "./App.css"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const handleModalClose = () => {
    setIsOpen(false);
    setOnEdit(null);
  };

  const handleEditUser = (user) => {
    setOnEdit(user);
    setIsOpen(true);
  };

  const handleRemove = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
        <div className="divBtn"><button className="btn-modal" onClick={() => setIsOpen(true)}>Cadastrar</button></div>
      

      {isOpen && (
        <Modal
          onClose={handleModalClose}
          getUsers={setUsers}
          onEdit={onEdit}
          setOnEdit={setOnEdit}
        />
      )}

      <Grid users={users} onEdit={handleEditUser} onRemove={handleRemove} />
    </div>
  );
}

export { App };
