Estudando react :D

### AVÁ

Sobre React:

    - React.js é uma biblioteca para criação de interfaces.
    - Utilizada para cosntruir Single Page Application (SPAS).
    - Baseada em componentes.
    - Utiliza JSX para renderizar HTML.
    - VIRTUAL DOM para realizar as alterações de DOM.
    - Para instalar o React usa-se create-react-app nome_app.
    - JSX nada mais é que HTML dentro do código JS.
    - É muito parecido com FLUTTER só que com JS.

Props:

    - PROPS são valores passados aos componentes, podem ser dinâmicos, mudando a execução devido ao valor da PROP.
    - O valor é passado como um atributo na chamada do componente, que precisa ser resgatado dentro de uma propriedade/argumento chamada props na função de definição do componente.
    - As PROPS são somente de leitura! - apenas recebe valores, não modifica.

Sobre CSS no React:

    - CSS pode ser adicionado de forma global na aplicação, como um index.css.
    - Mas da de usar a nivel de componente, usando css modules.
    - É só criar um arquivo como: Componente.module.css e chamar dentro do componente.

React Fragment:

    - Os React Fragmentes permitem a criação de componentes sem elemento pai. A fim de descomplicar os nós do DOM.
    - A sintaxe é <> e </>, não há um nome para a tag.
    - Criado no próprio JSX.

Mais sobre PROPS:
    usado no Item.js
    
    - Podemos definir tipos para as props, realizando uma espécie de validação.
    - Definimos em um objeto chamado propTypes no próprio componente.
    - E ainda há a possibilidade de definir um valor padrão.
    - Neste caso utilizamos o objeto defaultProps.

Eventos:

    - Os eventos de React são os mesmo eventos do DOM, ou seja, temos eventos para responder a um click, por exemplo.
    - O evento é atrelado a uma tag que irá executá-lo.
    - Geralmente um método é atribuido ao evento, este método deve ser criado no componente.

State:

    - UseState é um hook do React.
    - Com ele conseguimos manusear o estado de um componente de forma simples, funciona muito bem com os eventos.
    - Pode-se atrelar um evento a mudança de state.

Passando evento por props:

    - Os métodos tbm podem ser passados por props, ou seja, um componente filho pode ativar o método do seu ancestral.
    - O método é acessado por meio de um evento.
    - A sintaxe é a msm de uma props de dados: props.meuEvento

Listas:

    - Para renderizar uma lista será necessário um array.
    - Depois usa-se a função map, para percorrer cada um dos itens.
    - Podendo assim renderizar algo na tela.
    - É possível unir operadores condicionais com a renderização de listas.

State Lift:

    - Uma técnica utilizada para compartilhar o state;
    - É normal vários componentes dependerem do mesmo estado;
    - Então precisamos elevar o nível do mesmo a um componente pai;
    - Então centralizamos o state no pai, e definimos quem usa e quem define (setState).