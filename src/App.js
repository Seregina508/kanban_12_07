// import './App.css';
// import {v4 as uuidv4} from 'uuid';
// import {useState} from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import Column from "./Column";
// import CreateTaskModel from "./CreateTaskModel";
//
// const todo = [
//     {
//         id: uuidv4(),
//         name: 'Learn React',
//         status: 'todo',
//         priority: 1,
//         description: 'Learn React'
//     },
//     {
//         id: uuidv4(),
//         name: 'Learn JS',
//         status: 'in progress',
//         priority: 2,
//         description: 'Learn functions'
//     },
//     {
//         id: uuidv4(),
//         name: 'Learn React',
//         status: 'review',
//         priority: 3,
//         description: 'Learn Redux'
//     },
//     {
//         id: uuidv4(),
//         name: 'Learn Server',
//         status: 'done',
//         priority: 4,
//         description: 'Learn Todo'
//     },
// ]
//
// function App() {
//
//     const [tasks, setTasks] = useState(todo)
//     const [statuses, setStatuses] = useState(['todo', 'in progress', 'review', 'done']);
//     const [priority, setPriority] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//
//     const changePriority = (id, value) => {
//         const newTasks = tasks.map(el => el.id === id ? {...el, priority: el.priority + value} : el)
//         setTasks(newTasks)
//     }
//
//     const changeStatus = (id, value, status) => {
//         const currentIndex = statuses.indexOf(status)
//         const newStatus = statuses[currentIndex + value]
//         const newTasks = tasks.map(el => el.id === id ? {...el, status: newStatus} : el)
//         setTasks(newTasks)
//     }
//
//     const onDelete = (id) => {
//         const newTask = tasks.filter(el => el.id !== id)
//         setTasks(newTask)
//     }
//
//     const addNewTask = (newTask) => {
//         setTasks([...tasks, newTask])
//     }
//
//     return (
//         <div className="App">
//
//             <h1>Kanban</h1>
//             <div className="text-center">
//                 <CreateTaskModel statuses={statuses}
//                                  priority={priority}
//                                  addNewTask={addNewTask}
//                                  onDelete={onDelete}
//                 />
//                 <div className="row align-items-start">
//                     {statuses.map((el, ind) => <Column
//                             key={ind}
//                             status={el}
//                             statuses={statuses}
//                             tasks={tasks}
//                             changePriority={changePriority}
//                             changeStatus={changeStatus}
//                             onDelete={onDelete}
//                         />
//                     )}
//
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default App;


//12.07.22
// import {v4 as uuidv4} from 'uuid';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import React, {useState} from 'react';
// import Column from "./Column";
//
// const todo = [
//     {
//         id: uuidv4(),
//         name: 'Learn React',
//         status: 'todo',
//         priority: 1,
//         description: 'Learn React'
//     },
//     {
//         id: uuidv4(),
//         name: 'Learn JS',
//         status: 'in progress',
//         priority: 2,
//         description: 'Learn functions'
//     },
//     {
//         id: uuidv4(),
//         name: 'Learn React',
//         status: 'review',
//         priority: 3,
//         description: 'Learn Redux'
//     },
//     {
//         id: uuidv4(),
//         name: 'Learn Server',
//         status: 'done',
//         priority: 4,
//         description: 'Learn Todo'
//     },
// ]
//
// function App() {
//
//     const [tasks, setTasks] = useState(todo);
//     const [statuses, setStatuses] = useState(['todo', 'in progress', 'review', 'done']);
//
//     return (
//         <div className='App'>
//             <div className="container text-center">
//                 <div className="row align-items-start">
//                     {statuses.map((el, ind) => <Column
//                     key={ind}
//                     status={el}
//                     tasks={tasks}
//                     />)}
//                 </div>
//             </div>
//
//         </div>
//     );
// };
//
// export default App;


// import {v4 as uuidv4} from 'uuid';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import React, {useState} from 'react';
// import Column from "./Column";
//
// const todo = [
//     {
//         id: uuidv4(),
//         name: 'Learn React',
//         status: 'todo',
//         priority: 1,
//         description: 'Learn React'
//     },
//     {
//         id: uuidv4(),
//         name: 'Learn JS',
//         status: 'in progress',
//         priority: 2,
//         description: 'Learn functions'
//     },
//     {
//         id: uuidv4(),
//         name: 'Learn React',
//         status: 'review',
//         priority: 3,
//         description: 'Learn Redux'
//     },
//     {
//         id: uuidv4(),
//         name: 'Learn Server',
//         status: 'done',
//         priority: 4,
//         description: 'Learn Todo'
//     },
// ]
//
// function App() {
//
//     const [tasks, setTasks] = useState(todo);
//     const [statuses, setStatuses] = useState(['todo', 'in progress', 'review', 'done']);
//
//     return (
//         <div className='App'>
//             <div className="container text-center">
//                 <div className="row align-items-start">
//                     {statuses.map((el, ind) => <Column
//                         key={ind}
//                         status={el}
//                         tasks={tasks}
//                     />)}
//                 </div>
//             </div>
//
//         </div>
//     );
// };
//
// export default App;

// import 'bootstrap/dist/css/bootstrap.css';
// import {v4 as uuidv4} from 'uuid';
// import {useState} from "react";
// import Column from "./Column";
//
// const todo = [
//     {
//         id: uuidv4(),
//         name: 'Learn React',
//         status: 'todo',
//         priority: 1,
//         description: 'Learn React'
//     },
//     {
//         id: uuidv4(),
//         name: 'Learn JS',
//         status: 'in progress',
//         priority: 2,
//         description: 'Learn functions'
//     },
//     {
//         id: uuidv4(),
//         name: 'Learn React',
//         status: 'review',
//         priority: 3,
//         description: 'Learn Redux'
//     },
//     {
//         id: uuidv4(),
//         name: 'Learn Server',
//         status: 'done',
//         priority: 4,
//         description: 'Learn Todo'
//     },
// ]
//
// function App() {
//
//     const [tasks, setTasks] = useState(todo);
//     const [statuses, setStatuses] = useState(['todo', 'in progress', 'review', 'done']);
//
//     const changePriority = (id, value) => {
//         const newTasks = tasks.map(el => el.id === id ? {...el, priority: el.priority + value} : el)
//         setTasks(newTasks)
//     }
//
//     const changeStatus = (id, value, status) => {
//         const currentIndex = statuses.indexOf(status)
//         const newStatus = statuses[currentIndex + value]
//         const newTask =tasks.map(el => el.id === id ? {...el, status: newStatus} : el)
//         setTasks(newTask)
//     }
//
//     const onDelete = (id) => {
//         const newTask = tasks.filter(el => el.id !== id)
//         setTasks(newTask)
//     }
//
//
//     return (
//         <div>
//             <div className="container text-center">
//                 <div className="row align-items-start">
//                     {statuses.map((el, ind) =>
//                         <Column
//                             status={el}
//                             statuses={statuses}
//                             key={ind}
//                             tasks={tasks}
//                             changePriority={changePriority}
//                             changeStatus={changeStatus}
//                             onDelete={onDelete}
//                         />)}
//                 </div>
//             </div>
//
//         </div>
//     )
// }
//
// export default App;



//12.14.22
import 'bootstrap/dist/css/bootstrap.css';
import {v4 as uuidv4} from 'uuid';
import {useState} from "react";
import Column from "./Column";
import CreateTaskModel from "./CreateTaskModel";

const todo = [
    {
        id: uuidv4(),
        name: 'Learn React',
        status: 'todo',
        priority: 1,
        description: 'Learn React'
    },
    {
        id: uuidv4(),
        name: 'Learn JS',
        status: 'progress',
        priority: 2,
        description: 'Learn functions'
    },
    {
        id: uuidv4(),
        name: 'Learn React',
        status: 'review',
        priority: 3,
        description: 'Learn Redux'
    },
    {
        id: uuidv4(),
        name: 'Learn Server',
        status: 'done',
        priority: 4,
        description: 'Learn Todo'
    },
]

function App() {

    const [tasks, setTasks] = useState(todo);
    const [statuses, setStatuses] = useState(['todo', 'progress', 'review', 'done']);
    const [priority, setPriority] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const changePriority = (id, value) => {
        const newTasks = tasks.map(el => el.id === id ? {...el, priority: el.priority + value} : el)
        setTasks(newTasks)
    }

    const changeStatus = (id, value, status) => {
        const currentIndex = statuses.indexOf(status)
        const newStatus = statuses[currentIndex + value]
        const newTask =tasks.map(el => el.id === id ? {...el, status: newStatus} : el)
        setTasks(newTask)
    }

    const onDelete = (id) => {
        const newTask = tasks.filter(el => el.id !== id)
        setTasks(newTask)
    }

    const addNewTask = (newTask) => {
       setTasks([...tasks, newTask])
    }

    const updateTask = ( updatedTask) => {
        const newTask = tasks.map(el => el.id === updatedTask.id ? {...updatedTask} : el)
        setTasks(newTask)
    }


    return (
        <div>

            <div className="container text-center">
            <h1>Kanban</h1>
                <CreateTaskModel statuses={statuses}
                                 priority={priority}
                                 addNewTask={addNewTask}/>
                <div className="row align-items-start">
                    {statuses.map((el, ind) =>
                        <Column
                            status={el}
                            statuses={statuses}
                            key={ind}
                            tasks={tasks}
                            changePriority={changePriority}
                            changeStatus={changeStatus}
                            onDelete={onDelete}
                            priority={priority}
                            updateTask={updateTask}
                        />)}
                </div>
            </div>

        </div>
    )
}

export default App;













