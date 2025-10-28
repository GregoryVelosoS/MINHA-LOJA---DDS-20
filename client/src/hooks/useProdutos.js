// url da API
const url = "http://localhost:5000";

//Importando o hook de useState para controlar as variáveis
import { useState, useEffect } from "react";

export function useListaCategorias(){
    // Variável para armazenar as categorias
    const [categorias, setCategorias] = useState([])
    //Puxa os dados da API assim que o componente é iniciado
    useEffect(()=>{
        async function fetchCategorias() {
            try{
                // Fetch abre conexão com a api, na rota específicada e guarda o resposta em req  
                const req = await fetch(`${url}/categorias`)
                // Como a resposta vem em texto, preciso converter para json para utilizar
                const res = await req.json()
                // Assim que tiver convertido, guarda na variável criada para guardar as categorias
                setCategorias(res)
            } 
            // Se tiver erro no tentativa de conexão com a api, mostrar qual foi no console
            catch(erro){console.log(erro.message);}
        }
        // Executa a função de buscar as categorias na api
        fetchCategorias()
    },[])
    // retorna pra quem chamou a função, a lista de categorias já preenchida
    return categorias
}


export function useListaMedidas(){
    // lista com medidas
    const [medidas] = useState([
        { 
            id:1, nome:"mL",
            id:2, nome:"L"
        }
    ])
    return medidas
}