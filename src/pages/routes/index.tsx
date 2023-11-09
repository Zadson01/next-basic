import Link from "next/link";

export default function rotas(){
    return(
        <>
        <div>
            <h1>Rotas index</h1>
            Read<Link href="/routes/id/buscar"><button>This page!</button></Link>
        </div>
        </>
    )
}