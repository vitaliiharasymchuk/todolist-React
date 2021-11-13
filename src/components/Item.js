export default function Item(props) {

    const styleForDiv = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        margin: 20
    }

    const styleForBtn = {
        marginLeft: 100
    }

    function handleDeleteButtonClick(e) {
        props.deleteItem(props.id);
    }

    function handleModifyButtonClick(e) {
        props.modifyItem(props.id);
    }

    return (
        <div style={styleForDiv}>
            <div>{props.text}</div>
            <button style={styleForBtn} onClick={handleDeleteButtonClick}>Delete</button>
            <button onClick={handleModifyButtonClick}>Modify</button>
        </div>
    );
}