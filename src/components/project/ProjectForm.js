function ProjectForm() {

    return (
        <form>
            <div>
                <input type="text" placeholder="Inisira o nome do projeto"></input>
            </div>
            <div>
                <input type="number" placeholder="Insira o orçamento total" />
            </div>

            <div>
                <select name="category_id">
                    <option disabled selected>Selecione a Categoria</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Criar Projeto" />
            </div>
        </form>
    )
}

export default ProjectForm