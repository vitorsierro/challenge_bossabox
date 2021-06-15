import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        "Content-type": "application/json"
      }
})

export const busca = async(setDados) => {
    const resposta = await api.get('/tools')
            .then((res)=>(setDados(res.data)))
            .catch(() => (alert("Error não foi possivel pegar as informações")))}

export const enviar = async(dados)=>{
    dados = JSON.stringify(dados)
    const resposta = await api.post('/tools', dados)
    .then(()=>(console.log("Enviado com sucesso")))
    .catch((err)=> {
        alert("Não foi possivel enviar as informações");
        console.log(err)
        })};

export const deletePost = async(id)=>{
    const resposta = await api.delete(`tools/${id}`)
    .then(() => (console.log("Dados delato com sucesso")))
    .catch((err) => {
    alert("Error não foi deletar o dado!");
    console.log(err)
    })};

export const buscarTudo = async(pesquisa, setDados) =>{
    const resposta  = await api.get(`/tools?q=${pesquisa}`)
    .then((res)=>(setDados(res.data)))
    .catch((err) => {
        alert("Error não foi possivel buscar " + pesquisa);
        console.log(err)})}

export const buscarTag = async(tag, setDados)=>{
    const resposta  = await api.get(`/tools?tags_like=${tag}`)
    .then((res)=>(setDados(res.data)))
    .catch((err) => {
        alert("Error não foi possivel buscar a tag " + tag);
        console.log(err)})}