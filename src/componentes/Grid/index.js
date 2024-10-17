import React from "react";
import "./index.css"; 
import { FiEdit, FiTrash2 } from "react-icons/fi";

export const Grid = ({ users, onEdit, onRemove  }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th className="col" scope="col">Nome</th>
            <th className="col" scope="col">Email</th>
            <th className="col" scope="col">Telefone</th>
            <th className="col-acao" scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>{user.fone}</td>
                <td className="btn">
                    <button className="btn-edit" onClick={() => onEdit(user)}>
                    <FiEdit/> 
                    </button>
                    <button
                    className="btn-remove"
                    onClick={() => onRemove(user.id)}
                    >
                    <FiTrash2 /> 
                    </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                Nenhum usuário cadastrado
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
