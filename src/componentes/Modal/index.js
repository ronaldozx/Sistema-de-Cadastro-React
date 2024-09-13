import React, { useEffect, useRef } from "react";
import "./index.css"
import { useState } from "react";
import { toast } from "react-toastify";

export const Modal = ({onCLose,onSubmit,onCancel, onEdit}) => {

    const ref = useRef()
    
    useEffect(()=>{

        if(onEdit){
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.email.value = onEdit.email;
            user.telefone.value = onEdit.telefone;
            user.data_nascimento.value = onEdit.data_nascimento;

        }


    },[onEdit])

    const handleSubmit= async (e) =>{
        e.preventDefault();

        const user = ref.current;

        if(!user.nome.value ||
            !user.email.value ||
            !user.telefone.value ||
            !user.data_nascimento.value
        ){
            return toast.warn("Preencha todos os campos!")
        }
    }

    return (
        <form ref={ref}>
            <div className="modal-container">
                <div className="modal">
                    <div className="modal-header">
                        <p className="close" onClick={() => onCLose()}>&times;</p>
                    </div>
                    <div className="modal-content">
                    <label>Nome</label>
                    <input 
                            placeholder="" 
                            id="nome" 
                            name="nome"
                            
                        />

                        <label>Data de Nascimento</label>
                        <input 
                            placeholder=""
                            name="data_nascimento"
                           type="date"
                        />
                        <label>Telefone</label>
                        <input 
                            placeholder=""
                            name="fone"
                           type="date"
                        />
                        <label>Email</label>
                        <input 
                            name="email"
                            type="email"
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
