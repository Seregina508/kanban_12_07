// import Task from "./Task";
//
// function Column(props) {
//     const {status, changePriority, changeStatus, statuses, onDelete} = props;
//
//     return (
//         <div className="col">
//             <h2>{status.toUpperCase()}</h2>
//             {props.tasks.filter(el => el.status === status).map(el =>
//                 <Task task={el}
//                       key={el.id}
//                       changePriority={changePriority}
//                       changeStatus={changeStatus}
//                       statuses={statuses}
//                       onDelete={onDelete}
//                 />)}
//
//         </div>
//
//
//     )
// }
//
// export default Column;


//12.07.22
// import React from 'react';
// import Task from "./Task";
//
// function Column (props) {
//
//     const {status, tasks} = props;
//
//     return (
//         <div className="col">
//             <h3>{status.toUpperCase()}</h3>
//             {tasks.map(el => <Task
//             task={el}
//             key={el.id}
//             />)}
//         </div>
//     );
// };
//
// export default Column;


// import React from 'react';
// import Task from "./Task";
//
// function Column (props) {
//
//     const {status, tasks} = props;
//
//     return (
//         <div className="col">
//             <h3>{status.toUpperCase()}</h3>
//             {tasks.map(el => <Task
//                 task={el}
//                 key={el.id}
//             />)}
//         </div>
//     );
// };
//
// export default Column;


// import React from 'react';
// import Task from "./Task";
//
// function Column(props) {
//
//     const {status, tasks, changePriority, changeStatus, statuses, onDelete} = props
//
//     return (
//         <div className="col">
//             <h2>{status.toUpperCase()}</h2>
//             {tasks.filter(el => el.status === status).map(el => <Task
//                 task={el}
//                 key={el.id}
//                 changePriority={changePriority}
//                 changeStatus={changeStatus}
//                 statuses={statuses}
//                 onDelete={onDelete}
//             />)}
//         </div>
//     );
// };
//
// export default Column;


//12.14.22
import React from 'react';
import Task from "./Task";

function Column(props) {

    const {status, tasks, changePriority, changeStatus, statuses, onDelete, priority, updateTask} = props

    return (
        <div className="col">
            <h3>{status.toUpperCase()}</h3>
            {tasks.filter(el => el.status === status).map(el => <Task
                task={el}
                key={el.id}
                changePriority={changePriority}
                changeStatus={changeStatus}
                statuses={statuses}
                onDelete={onDelete}
                priority={priority}
                updateTask={updateTask}
            />)}
        </div>
    );
};

export default Column;












