import React from 'react'
import { useParams } from 'react-router-dom'

const Department = () => {
  const { id } = useParams()
  console.log(id)


  return (
    <div>Department</div>
  )
}

export default Department