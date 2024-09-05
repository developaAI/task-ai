import { Task } from "../types/task"

interface TaskItemProps {
    task:Task
}

export default function TaskItem({task}:TaskItemProps) {
    return (
        //  <div key={task.id} className="text-lg">
        //       {task.title}</div>
        <div>
        <label>
                <input type="checkbox" name="task" className="mr-2 scale-125" />
                <span className={ task.completed ? "line-through text-gray-400" : "" }>{ task.title}</span>
       </label>
            </div>
    )
}