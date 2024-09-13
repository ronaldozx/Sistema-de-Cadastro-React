import {db} from '../db.js'; 

export const getUsers = (_, res) => {
  const q = 'SELECT * FROM usuarios'; 
  db.query(q, (err, data) => {
    if (err) {
      console.error('Erro ao executar consulta SQL:', err);
      return res.json(err);
    }

    console.log('Consulta SQL executada com sucesso:', data);
    return res.status(200).json(data);
  });
};
export const insertUser = ( req,res) =>{
  const q = 
  "INSERT INTO usuarios(`nome`,`data_nascimento`, `email`,`fone`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.data_nascimento,
    req.body.email,
    req.body.fone
  ];

  db.query(q, [values], (err)=>{
    if(err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.")
  });
};
export const updateUser=(req,res) =>{
  const q = "UPDATE usuarios SET `nome` = ?, `data_nascimento` = ? WHERE `id`= ?"

  const values = [
    req.body.nome,
    req.body.data_nascimento,
    req.body.email,
    req.body.fone
  ];
  db.query(q, [...values, req.params.id], (err)=>{
    if(err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.")
  });
}

export const deleteUser=(req,res) =>{
  const q = "DELETE FROM usuarios WHERE `id` = ?";
  db.query(q, [...values, req.params.id], (err)=>{
    if(err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.")
  });
}

