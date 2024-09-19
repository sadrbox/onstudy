import React, { useState } from 'react'
import { useContextTodo } from 'src/objects/Todos/Context';
import DataGridHeader from './DataGridHeader';


const DataGrid = () => {
  // const [fields, setFields] = useState();
  // const contextData = useContextTodo()
  // if (contextData) {
  //   // contextData.context
  //   // setFields()
  //   console.log(contextData)
  // }
  return (
    <div>
      <DataGridHeader />
    </div>
  )
}
export default DataGrid;