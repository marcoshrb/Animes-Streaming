//styles
import style from "./coments.module.css";
import userIcon from "../../assets/person.jpeg";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserIdContext } from "../../context/UserId";

function Coments({ VideoId }: any) {

  const { idUser } = useContext(UserIdContext);
  const [comentarios, setComentarios] = useState([]);
  const [newComentarios, setNewComentarios] = useState('');
  const [NameUser, setNameUser] = useState('');

  useEffect(() => {
    GetComent();
  }, []);

  async function GetComent() {
    try {
      const res = await axios.get(`http://localhost:8080/comentario/GetById/${VideoId}`);
      
      if (res.data && res.data.Comentarios) {
        // console.log("Comentários recebidos:", res.data.Comentarios);
        // Iterating through comments to fetch user names
        const comentariosWithUserNames = await Promise.all(res.data.Comentarios.map(async (comentario) => {
          const nome = await GetName(comentario.UserId);
          return {
            ...comentario,
            nome: nome
          };
        }));
        setComentarios(comentariosWithUserNames);
      } else {
        console.log("Resposta da API inesperada:", res);
        setComentarios([]); 
      }
  
    } catch (error) {
      console.log("Erro ao buscar comentários:", error);
      setComentarios([]);  
    }
  }

  async function GetName(idUserPass : any) {
    try {
      const res = await axios.get(`http://localhost:8080/user/GetById/${idUserPass}`);
      
      if (res.data && res.data.Nome) { 
        return res.data.Nome;
      } else {
        console.log("Resposta da API inesperada:", res);
        return 'Usuário não encontrado'; 
      }
  
    } catch (error) {
      console.log("Erro ao buscar comentários:", error);
      return 'Erro ao buscar usuário'; 
    }
  }

  async function CreateComent(event) {
    
    event.preventDefault();

    const json = {
      UserId: idUser,
      VideoId: VideoId,
      Conteudo: newComentarios  
    };

    try {
      const res = await axios.post(`http://localhost:8080/comentario`, json);
      if (res.data) {
        // console.log("Comentário criado:", res.data);
        setNewComentarios(''); 
        GetComent();  
      } else {
        console.log("Resposta da API inesperada:", res);
      }
    } catch (error) {
      console.log("Erro ao criar comentário:", error);
    }
  }

 

  useEffect(() => {
    GetComent();
    console.log("comentarios:", comentarios);
  }, [VideoId]);

  async function DeleteComent(comentarioId: any) {
    try {
      const res = await axios.delete(`http://localhost:8080/comentario/remove/${comentarioId}`);
      if (res.data) {
        // console.log("Comentário deletado:", res.data);
        setComentarios(comentarios.filter(comentario => comentario.Id !== comentarioId));
      } else {
        console.log("Resposta da API inesperada:", res);
      }
    } catch (error) {
      console.log("Erro ao deletar comentário:", error);
    }
  }

  return (
    <>
      {comentarios.map(comentario => (
        <div key={comentario.Id}>
          <div className={style["between"]}>
            <div className={style["indentify-User"]}>
              <img className={style["User-Photo"]} src={userIcon} alt="User" />
              <h1 className={style["Titles"]}>{comentario.nome}</h1>
            </div>
            <div>
              <Button
                onClick={() => DeleteComent(comentario.Id)}
                variant="btn btn-outline-danger"
                className="btn btn-outline-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </Button>
            </div>
          </div>
          <div className={style["indentify-User"]}>
            <div className={style["aling-coments"]}></div>
            <p>{comentario.Conteudo}</p>
          </div>
        </div>
      ))}
      <div>
        <Form className={style.form} onSubmit={CreateComent}>
          <Form.Floating className={style.input_form}>
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="Username:"
              className={style.input_group}
              value={newComentarios}
              onChange={(e) => setNewComentarios(e.target.value)}
            />
            <label htmlFor="floatingInputCustom">Deixe seu comentário aqui:</label>
          </Form.Floating>
          <Button
            type="submit"
            variant="btn btn-outline-danger"
            className="btn btn-outline-light">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Coments;
