import React, { useState } from 'react'

export const useForm = (initialobject = {}) => {

  const [Form, setForm] = useState("");
    
const changed  = ({target}) =>{

    const {name,value} = target;
    
    setForm({
      ...Form,
      [name] : value
    });

}


  return {
    Form,
    changed
  }
}
