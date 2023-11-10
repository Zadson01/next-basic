import { useEffect } from "react";
import { useState } from "react";

const LoadingSpinner = () => {
    return <div>Carregando...</div>;
};
export default function questao() {
    const [questao, setQuestao] = useState("");

    useEffect(() => {
        fetch('http://localhost:4077/api/questao/1020')
            .then(resp => resp.json())
            .then(questao => setQuestao(questao));

    }, []);
    if (!questao) {
        return <LoadingSpinner />;
    }
    return (
        <div>
            <h1>Questão</h1>
            <div>
                <span>{questao.enuciado}</span>
            </div>
        </div>
    );

}