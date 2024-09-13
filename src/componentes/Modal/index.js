import React from "react";
import "./index.css"
import { useState } from "react";

export const Modal = ({onCLose,onSubmit,onCancel}) => {
    const [project, setProject] = useState('');

    function cadastrarUsuario(e) {
        e.preventDefault();
        onSubmit();  
    }

    function handleChange(e){

        setProject({ ...project,[e.target.name] : e.target.value})

    }

    return (
        <form onSubmit={cadastrarUsuario}>
            <div className="modal-container">
                <div className="modal">
                    <div className="modal-header">
                        <p className="close" onClick={() => onCLose()}>&times;</p>
                    </div>
                    <div className="modal-content">
                        <p>Nome</p>
                        <input 
                            placeholder="Nome" 
                            id="nome" 
                            name="name"
                            handleOnChange={handleChange}
                        />

                        <p>Idade</p>
                        <input 
                            placeholder="Idade"
                            name="idade"
                            handleOnChange={handleChange}

                        />
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn-cadastrar">Cadastrar</button>
                        <button type="button" className="btn-cancelar" onClick={() => onCancel()}>Cancelar</button>
                    </div>
                </div>
            </div>
        </form>
       
    )
    
}
