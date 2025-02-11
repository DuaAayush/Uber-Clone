import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainlogin = () => {
     const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [captainData, setcaptainData] = useState('')
        const submitHandler = (e) => {
            e.preventDefault();
            setcaptainData({
                email: email,
                password: password
            })
           
            setEmail('')
            setPassword('')
        }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-20 mb-3' src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png" alt="Uber Logo" />
     <form onSubmit={(e)=>{
         submitHandler(e)
     }

     }>
         <h3 className='text-lg font-medium mb-2'>What's your email</h3>
         <input 
         required 
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
         type="email" placeholder="email@example.com" 
         />
         <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
         <input 
         required 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' 
         type="password" placeholder="password" />
         <button className='bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
     </form>
     <p className='text-center'>Want to be Captain? <Link to="/captian-signup" className='text-blue-600'>Register as Captain</Link></p>
    </div>
    <div>
    <img className='w-50 h-30 mb-2' src="public/DALL·E 2025-02-07 21.02.11 - A minimalistic black silhouette illustration in PNG format, featuring a sleek black car with a woman stepping out holding a suitcase. She is standing -Photoroom copy.png" alt="Uber car" />
    <Link to='/login' className='bg-[#555454] flex items-center justify-center text-white mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login as User</Link>
    </div>
    <div>
    <p className='text-[10px] leading-tight'>By proceeding, you concent to get mails, including by automated means, from Uber and its afiillites to the mail provided.</p>
   <p className='text-[10px] leading-tight underline'>Privacy Policy</p>
    </div>
 </div>
  )
}

export default Captainlogin