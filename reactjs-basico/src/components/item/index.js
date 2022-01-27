//props - propriedade
const Item = (props) => {
    return (
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">{props.texto}</a>
        //{props.texto} é atributo
    )
}

export default Item;