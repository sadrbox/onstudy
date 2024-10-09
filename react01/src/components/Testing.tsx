import React from 'react'
import { useContextInstance } from './ui/Grid/GridData/ContextProvider'



export const Testing = () => {

  const context = useContextInstance();
  console.log("Testing", context)
  return (
    <>
      Testing
    </>
  )
}