import React, { useEffect, useRef, useState } from "react";
import "./index.css"; // Certifique-se de que o caminho está correto

export const Modal = ({ onClose, onSubmit, onCancel, getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  const [nome, setNome] = useState(onEdit ? onEdit.nome : "");
  const [email, setEmail] = useState(onEdit ? onEdit.email : "");
  const [fone, setFone] = useState(onEdit ? onEdit.fone : "");

  useEffect(() => {
    if (onEdit) {
      setNome(onEdit.nome);
      setEmail(onEdit.email);
      setFone(onEdit.fone);
    }
  }, [onEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !fone) {
      alert("Preencha todos os campos!");
      return;
    }

    const newUser = { nome, email, fone };

    if (onEdit) {
      setOnEdit(null);
      getUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === onEdit.id ? newUser : user))
      );
    } else {
      getUsers((prevUsers) => [...prevUsers, newUser]);
    }

    onClose();
  };

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <p className="close" onClick={onClose}>
              &times;
            </p>
          </div>
          <div className="modal-content">
            <label>Nome</label>
            <input
              placeholder="Digite o nome"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label>Telefone</label>
            <input
              placeholder="Digite o telefone"
              name="fone"
              type="text"
              value={fone}
              onChange={(e) => setFone(e.target.value)}
            />
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Digite o email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn-cadastrar">
              {onEdit ? "Atualizar" : "Cadastrar"}
            </button>
            <button type="button" className="btn-cancelar" onClick={onCancel}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
