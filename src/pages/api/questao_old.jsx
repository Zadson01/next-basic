export default function questao(){

    fetch('http://localhost:4077/api/questao/1020')//Testar a chamada a API isso vai retornar uma promessa, na respota vai ter um método json, que vai trazer a respota
    //ele também vai retornar uma promessa.
    .then(resp => resp.json())// Aqui vai chegar a respota, que contem um método json
    .then(json => console.log(json))// aqui pega o Json recebido do back-and é mostrar
    return(
        <div>
            questao
        </div>
    )

}