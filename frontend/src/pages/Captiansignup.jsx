import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Captiansignup = () => {
     const [email, setemail] = useState('')
        const [password, setpassword] = useState('')
        const [Firstname, setFirstname] = useState('')
        const [Lastname, setLastname] = useState('')
        const [UserData, setUserData] = useState({})
    
        const submitHandler = (e) => {
            e.preventDefault()
            setUserData({
                fullname:{Firstname: Firstname,
                    Lastname: Lastname},
                email: email,
                password: password,
            })
            
            setemail('')
            setFirstname('')
            setLastname('')
            setpassword('')
        }
  return (
    <div >
    <div className='p-7 h-screen flex flex-col justify-between'>
   <div>
   <img className='w-16 mb-2' src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png" alt="Uber Logo" />
    <form onSubmit={(e)=>{
        submitHandler(e)
    }
    }>
        <h3 className='text-base font-medium mb-2'>Name of Captain</h3> 
        <div className='flex gap-4 mb-2'>
        <input 
        required 
        className='bg-[#eeeeee]  rounded px-4 py-2 w-1/2 text-lg placeholder:text-base' 
        type="text" placeholder="First Name" 
        value={Firstname}
        onChange={(e)=>{setFirstname(e.target.value)}}
        />
        <input 
        className='bg-[#eeeeee]  rounded px-4 py-2 w-1/2 text-lg placeholder:text-base' 
        type="text" placeholder="Last Name" 
        value={Lastname}
        onChange={(e)=>{setLastname(e.target.value)}}
        />
        </div>
        <h3 className='text-base font-medium mb-2'>What's your email</h3>
        <input 
        required
        value={email}
        onChange={(e)=>{setemail(e.target.value)}} 
        className='bg-[#eeeeee] mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
        type="email" placeholder="email@example.com" 
        />
        <h3 className='text-base font-medium mb-2'>Create a Password</h3>
        <input 
        required 
        value={password}
        onChange={(e)=>{setpassword(e.target.value)}}
        className='bg-[#eeeeee] mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
        type="password" placeholder="password" />
        
        <button className='bg-[#111] text-white mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
    </form>
    <p className='text-center'>Already have a Captian? <Link to="/captian-login" className='text-blue-600'>Login as Captian</Link></p>
   </div>
   <div>
   <img className='w-50 h-30 mb-2' src="public/DALL·E 2025-02-07 21.02.11 - A minimalistic black silhouette illustration in PNG format, featuring a sleek black car with a woman stepping out holding a suitcase. She is standing -Photoroom copy.png" alt="Uber car" />
   <p className='text-[10px] leading-tight'>By proceeding, you concent to get mails, including by automated means, from Uber and its afiillites to the mail provided.</p>
   <p className='text-[10px] leading-tight underline'>Privacy Policy</p>
   </div>
</div>
</div>
  )
}

export default Captiansignup