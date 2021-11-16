import styles from './Frase.module.css'
// para importar css tem que dar nome que nem no componente

function Frase() {
    // Esse componente vai ser impoortado dentro do componente HelloWorld
    // é um exemplo da reutilização de componente.
    return (
        // não pode dar o nome da classe com -, ex: styles.frase-container.
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente frase!</p>
        </div>
    )
}

export default Frase