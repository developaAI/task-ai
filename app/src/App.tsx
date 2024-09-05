// import { useState } from 'react'
import TaskItem from './component/TaskItem';
import { dummyData } from './data/task';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="font-mono py-10 h-screen mt-20">
      <h1 className="font-bold text-3xl text-center">Task AI ( Your Task Schedule)</h1>
      <div className="max-w-lg mx-auto mt-10">
        <div className="space-y-2">
          {dummyData.map(task => (
            <TaskItem task={task} />
          )
          )}
        </div>
      </div>
    </main>
  )
}

export default App
