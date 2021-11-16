import Item from "./Item"

function List () {

    return (
        // Ao passar um parâmetro, as strings entre "", mas quando for um Number, por exemplo, deve ser entre {}
        <> 
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Uno" ano_lancamento={2021}/>
                <Item />
                <li>Item 2</li>
            </ul>
        </>
    )

}

export default List