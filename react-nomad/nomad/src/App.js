import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    if (toDos.length < 10) {
    setToDos((currentArray) => [toDo, ...currentArray]);
    } else {
      return alert("등록된 리스트가 너무 많습니다.");
    }
    setToDo("");
  };
  const onClick = (idx) => {
    setToDos(toDos.filter((_, toDoIdx ) => idx !== toDoIdx));
  }
  useEffect(() => {
    const data = localStorage.getItem('toDoList');
    if (data) {
      setToDos(JSON.parse(data));
    }
    
  }, []);
  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDos));
  }, [toDos]);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
        onChange={onChange}
        maxLength={15}
        value={toDo}
        type="text"
        placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
      {toDos.map((item, idx) => (
      <li 
      key={idx}
      >
        {item}
        <button onClick={() => onClick(idx)}>
          <span>delete_forever</span>
        </button>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default App;
