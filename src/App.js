import {Header} from "./componentes/Header/index"
import {Main} from "./componentes/Main/index"
import { Grid} from "./componentes/Grid/index"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";



function App(){
    const [users,setUsers] = useState([])
    const [onEdit, setOnEdit] = useState(null)

    const getUsers = async () => {
        try {
          const res = await axios.get("http://localhost:8800");
          setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
        } catch (error) {
          toast.error(error);
        }
      };
    
      useEffect(() => {
        getUsers();
      }, [setUsers]);

    return (
        <>
            <Header/>
            <Main onEdit={onEdit}
            setOnEdit={setOnEdit} getUsers={getUsers} />
            <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>

        </>
    )
}
export{ App};