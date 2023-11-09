export default function questao(req, res){
    if(req.method === "GET"){
        const id = req.query.id
        res.status(200).json({id,pergunta: "Qual é a sua cor preferida",
    respotas:[
        'Azul', 'Verde', 'Branco', 'Preto', 'Vermelho', 'Amarelo'
    ]
})
    }else{
        res.status(405).send()
    }
}