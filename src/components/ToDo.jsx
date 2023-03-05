import {useState} from 'react';

function ToDo(){
    const [items, setItems] = useState([]);
    const[newItem, setNewItem] = useState('');

    const addItem = () =>{//function to add item
        if(newItem.trim() !== ''){//to remove whitespaces and to check if the entry not blank
            setItems([//used to setItems in an array
                ...items ,//creates a copy of the items array
                {
                    id:Date.now(), // id is created when a new item is added
                    text:newItem.trim(), // input value is assigned to text variable
                    completed:false //completed is set to default 
                }])
                setNewItem(''); //setting the value of input field to empty for entering new list
        }
    };
    const toggleCompleted = (id) =>{ 
        setItems(// used to set the items that are completed
            items.map((item)=>{
                if(item.id === id){
                    return {
                        ...item,
                        completed: !item.completed
                }
                }else {
                    return item;
                }
            })
        );
    };
    const deleteItem = (id) => {//used to set the items that are needed to be deleted
        setItems(items.filter((item) => item.id !== id))
    };

    return(
        <div>
            <h1>ToDo</h1>
            <input 
                type= 'text'
                value={newItem}
                onChange={(e)=> setNewItem(e.target.value)} 
            />
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map((item) => (
                    <li key ={item.id}>
                        <input
                            type='checkbox'
                            checked={item.completed}
                            onChange={()  => toggleCompleted(item.id)} 
                        />
                        {item.text}
                        <button onClick ={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDo;