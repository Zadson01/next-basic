export default (req, res) =>{

if(req.method === "GET"){
    res.status(200).json({boasvindas:"Biene viendo"})
}else{
    res.status(405).json({boasvindas: "Errouuuuu"})
}
 res.status(200).json({metodo: req.method})
}