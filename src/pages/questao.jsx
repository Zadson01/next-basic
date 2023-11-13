import { useEffect, useState } from "react";


export default function questao() {
    const [questao, setQuestao] = useState("");

    useEffect(() => {
        fetch('http://localhost:4077/api/questao/1020')
            .then(resp => resp.json())
            .then(questao => setQuestao(questao));
    }, []);
 
    return (
        <div>
            <h1>Questão</h1>
            <h1>teste</h1>
            <div>
                <span>{questao.pergunta}</span>
                <span>{questao.respotas}</span>
            </div>
        </div>
    );

}