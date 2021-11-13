import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';

function App() {

    const [arrayOfItems, modifyArrayOfItems] = useState(JSON.parse(localStorage.getItem('Todos')));
    const [id, setId] = useState(arrayOfItems.length === 0 ? 0 : arrayOfItems[arrayOfItems.length - 1].id);
    const [itemToModify, setItemToModify] = useState({});


    const addItem = (text) => {
        let currentTodo = { id: id + 1, text: text, isCompleted: false };
        modifyArrayOfItems(arrayOfItems => [...arrayOfItems, currentTodo]);
        setId(id + 1);
    }

    const deleteItem = (itemID) => {
        modifyArrayOfItems(arrayOfItems.filter(el => el.id !== itemID));
    }

    const modifyItem = (itemID) => {
        setItemToModify(arrayOfItems.filter(el => el.id === itemID)[0]);
    }

    useEffect(() => {
        localStorage.setItem('Todos', JSON.stringify(arrayOfItems));
        console.log(itemToModify);
    });

    return (
        <div className="App">
            <Header />
            <Input addItem={addItem} />
            <List items={arrayOfItems} deleteItem={deleteItem} modifyItem={modifyItem} />
        </div>
    );
}

export default App;
