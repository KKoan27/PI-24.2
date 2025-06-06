import React  from "react";
import { useState, useEffect } from "react";
import '../CompCss/Atendimento.css';
import { color } from "@mui/system";

export default function Atendimento(){
    const [ids, setIds] = useState([])
    const [resposta, setResposta] = useState(null)
    const token = JSON.parse(localStorage.getItem("token")) ;
    const [user, setUser] = useState(token['idUsuario'])
    const [enviado, setEnviado] = useState(false)

    const [form, setForm] = useState({
    
        idPedido: 0,
        titulo: "",
        descricao: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prevData) => ({ ...prevData, [name]: value }));
    
    }

    useEffect(() => {
        async function buscarPedidos(){

            const response = await fetch(`http://localhost/octocore_api/endpoints/order/order.php?user=${user}`)
            if (response.ok) {
            const data = await response.json()
            const pedidosIds = data['data'].map(element => element['idPedido'])
            setIds(pedidosIds);
            }
            
        }
        buscarPedidos()
        
    },[])
    async function criarTicket(e){
        e.preventDefault()
       

        const payload = {
            idUsuario: user,
            idPedido: parseInt(form.idPedido),
            titulo: form.titulo,
            descricao: form.descricao
        };
        const response1 = await fetch('http://localhost/octocore_api/endpoints/users/ticket.php', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
        if (!response1.ok) {
            setResposta(false);
        }
        else{
        setEnviado(true)
        setResposta(true)
        }
        
    }
   
    return(
        <div className="AtendiClass">
        
            <h1>Suporte Octocore</h1>
            <form id="formTicket" onSubmit={criarTicket}>
            <label htmlFor="idPedido">Id do Pedido:</label>
            <select name="idPedido" id="idPedido" onChange={handleChange} required>
                <option value="" >Selecione um ID de pedido...</option>
               {ids.length > 0 ? (ids.map((item, index) => (
                <option key={index} value={item}>
                    {item}
                </option>
                ))) : null}
            </select>
                <label htmlFor="titulo">Titulo:</label>
                <input name="titulo" id="titulo" onChange={handleChange} required/>
                <label htmlFor="descricao">Descrição do problema:</label>
                <textarea name="descricao" id="descricao" onChange={handleChange} required/>
                <button disabled={enviado}>Enviar Ticket</button>
                {resposta !== null ? (resposta ? 
                (<p style={{color: 'green'}}>Seu ticket de suporte foi criado com sucesso. Por favor, acompanhe seu e-mail para atualizações sobre o status do seu pedido.</p>) :
                (<p style={{color: 'red'}}>Erro ao criar o ticket</p>)) : null
                }
        
            </form>
        
        </div>

    )
}
