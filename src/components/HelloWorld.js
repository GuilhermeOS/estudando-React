import Frase from "./Frase"

function HelloWorld() {
    // No React não retornamos um valor na função mas sim um conteúdo HTML dentro de ().
    // Os componentes são reutilizaveis.

    return (
        <div>
            <h1>Primeiro componente</h1>
            <Frase />
            <Frase />
            <Frase />
            <Frase />
        </div>
    )
}

export default HelloWorld