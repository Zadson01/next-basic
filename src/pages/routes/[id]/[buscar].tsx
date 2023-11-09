import Link from "next/link"
import { useRouter } from "next/router"
export default function Buscar(){
    const router = useRouter()
    const codigo = router.query.id
    const nome = router.query.buscar
    console.log(router)

    return<>
    <div>
        <h1>Rotas / id / buscar</h1>
        <h2>Código: {codigo}</h2>
        <h2>Nome: {nome}</h2>
        <Link href="/routes"><button>Clique aqui</button></Link>
    </div>
    
    
    
    </>
}