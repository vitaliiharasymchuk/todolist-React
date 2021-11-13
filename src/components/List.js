import Item from "./Item";

export default function List(props) {

    return (
        <div >
            {props.items.map(item => <Item id={item.id} key={item.id} text={item.text} deleteItem={props.deleteItem} modifyItem={props.modifyItem} />)}
        </div>
    );
}