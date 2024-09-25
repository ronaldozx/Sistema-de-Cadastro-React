import React, { useEffect, useRef } from "react";
import "./index.css"
import { toast } from "react-toastify";
import axios from "axios";

export const Modal = ({onCLose,onSubmit,onCancel,getUsers,onEdit, setOnEdit}) => {

    const ref = useRef()
    
    useEffect(()=>{

        if(onEdit){
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.email.value = onEdit.email;
            user.fone.value = onEdit.fone;

        }


    },[onEdit])

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const user = ref.current;
    
        if (
          !user.nome.value ||
          !user.email.value ||
          !user.fone.value
        ) {
          return toast.warn("Preencha todos os campos!");
        }
    
        if (onEdit) {
          await axios
            .put("http://localhost:8800/" + onEdit.id, {
              nome: user.nome.value,
              email: user.email.value,
              fone: user.fone.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
          await axios
            .post("http://localhost:8800", {
              nome: user.nome.value,
              email: user.email.value,
              fone: user.fone.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }
    
        user.nome.value = "";
        user.email.value = "";
        user.fone.value = "";
    
        setOnEdit(null);
        getUsers();
      };

    return (
        <form ref={ref} onSubmit={handleSubmit}>
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
                        <label>Telefone</label>
                        <input 
                            placeholder=""
                            name="fone"
                           type="fone"
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