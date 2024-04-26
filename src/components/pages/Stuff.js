import React, { useEffect } from 'react'

import AcademicDescription from '../layout/academicDescription'
import { useState } from 'react'

//changed class based component into functional component
export default function Stuff(){

  const [coders, setCoders] = useState([]);

  useEffect(() => {
      fetch("")
        .then(response => response.json())
        .then(data => setCoders(data));

  }, [])
  
  return (
    <>
      <AcademicDescription />
    </>
  ) 
}


