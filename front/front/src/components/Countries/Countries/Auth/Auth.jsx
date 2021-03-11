import React from 'react'
import './index.css'
export const Auth = () => {
    const  onChange = e => {
        const files = Array.from(e.target.files)
       
    
        const formData = new FormData()
    
        files.forEach((file, i) => {
          formData.append(i, file)
        })
    
        fetch(`/images/`, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json()) 
        .then(images => {
          console.log(images)
        })
      }
    return (
        <div className='wrapper'>
             <input type='file' id='avatar' onChange={onChange} />
             <input type='text' id='avatar' onChange={onChange} />
             <input type='text' id='avatar' onChange={onChange} />
        </div>
    )
}