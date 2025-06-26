// import React, { useState } from 'react'


// function SingUp() {
//     const [formData, setFormData] = useState({
//         email:"",
//          password:"",
//           name:"",
//            country:""
//     })

//     const {email, password, name, country} = formData;

//     const handleOnChange = (e)=>{
//         setFormData((prev)=>({
//             ...prev,
//             [e.target.name] : e.target.value
//         }))
//     }

//     const handleOnSubmit = ()=>{
        
//     }
//   return (
//     <div className='w-full h-full bg-amber-50 flex'>
//         <div className='w-sm h-[500px] bg-gray-200 m-auto flex flex-col gap-6'>
//             <h1>Create An Account</h1>
//             <div>
//                 <form onSubmit={handleOnSubmit} className='flex flex-col gap-6'>
//                     <div className='w-full h-16 p-4'>
//                     <label htmlFor="name">Full Name</label>
//                     <input type="text"
//                     name='name'
//                     id='name'
//                     placeholder=''
//                     value={name}
//                     onChange={handleOnChange} 
//                     className=' w-full h-full focus:bg-white'/>
//                     </div>
//                     <div className='w-full h-16 p-4'>
//                     <label htmlFor="name">Full Name</label>
//                     <input type="text"
//                     name='name'
//                     id='name'
//                     placeholder=''
//                     value={name}
//                     onChange={handleOnChange} 
//                     className=' w-full h-full focus:bg-white'/>
//                     </div>
//                     <div className='w-full h-16 p-4'>
//                     <label htmlFor="name">Full Name</label>
//                     <input type="text"
//                     name='name'
//                     id='name'
//                     placeholder=''
//                     value={name}
//                     onChange={handleOnChange} 
//                     className=' w-full h-full focus:bg-white'/>
//                     </div>
//                     <div className='w-full h-16 p-4'>
//                     <label htmlFor="name">Full Name</label>
//                     <input type="text"
//                     name='name'
//                     id='name'
//                     placeholder=''
//                     value={name}
//                     onChange={handleOnChange} 
//                     className=' w-full h-full focus:bg-white'/>
//                     </div>
//                     <div>
//                         <button type='submit'> Create an Account</button>
//                     </div>
                    
//                 </form>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default SingUp