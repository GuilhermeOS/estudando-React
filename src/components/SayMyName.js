function SayMyName(props) {
    // o props é tipo os parâmetros que podem ser passados nas funções Python
    return (
        <div>
            <p>Fala ai {props.nome}, suave ?</p>
        </div>

        // o props.algo aqui parece o self.algo das classes Python
    )
}

export default SayMyName