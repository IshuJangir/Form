import React, { useState } from 'react'

export default function App() {

  const[formData,setFormData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    country:"India",
    address:"",
    state:"",
    city:"",
    zip:"",
    comments:false,
    candidates:false,
    offers:false,
    notification:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData)
  }


  return (
    <div className='flex justify-center mt-3 mb-3 '>
        <form className='flex  rounded flex-col gap-3  border-2 bg-slate-100 p-9' action="">
          <div className='flex flex-col'>
              <label htmlFor="">First Name:</label>
              <input placeholder='Ishu' className='border-2 p-1 rounded border-slate-400 w-[500px] ' type="text" name='firstname' value={formData.firstname} onChange={changeHandler} />
          </div>

          <div className='flex flex-col'>
              <label htmlFor="">Last Name:</label>
              <input placeholder='Jangir' className='border-2 p-1 rounded border-slate-400 w-[500px] ' type="text" name='lastname' value={formData.lastname} onChange={changeHandler} />
          </div>

          <div className='flex flex-col'>
              <label htmlFor="">Email:</label>
              <input placeholder='ishujangir0000@gmail.com' className='border-2  p-1 rounded border-slate-400 w-[500px] ' type="text" name='email' value={formData.email} onChange={changeHandler} />
          </div>

          <div className='flex flex-col'>
              <label htmlFor="">Country:</label>
              <select className='border-2  p-1 rounded border-slate-400 w-[500px] ' onChange={changeHandler} name='country' value={formData.country}>
                  <option name="country" id="country">India</option>
                  <option name="country" id="country">USA</option>
                  <option name="country" id="country">Mexico</option>
                  <option name="country" id="country">Japan</option>
              </select>
          </div>

          <div className='flex flex-col'>
              <label htmlFor="">Street address:</label>
              <input placeholder='1134 Main BT' className='border-2  p-1 rounded border-slate-400 w-[500px] ' type="text" name='address' value={formData.address} onChange={changeHandler} />
          </div>

          <div className='flex flex-col'>
              <label htmlFor="">State:</label>
              <input placeholder='Rajasthan' className='border-2  p-1 rounded border-slate-400 w-[500px] ' type="text" name='state' value={formData.state} onChange={changeHandler} />
          </div>

          <div className='flex flex-col'>
              <label htmlFor="">City:</label>
              <input placeholder='Alwar' className='border-2  p-1 rounded border-slate-400 w-[500px] ' type="text" name='city' value={formData.city} onChange={changeHandler} />
          </div>

          <div className='flex flex-col'>
              <label htmlFor="">Zip/Postal Code:</label>
              <input placeholder='301703' className='border-2  p-1 rounded border-slate-400 w-[500px] ' type="number" name='zip' value={formData.zip} onChange={changeHandler} />
          </div>

          <div className='flex flex-col gap-3 mt-5 '>
              <label  className='' htmlFor="">By Email</label>
              <div className='flex gap-3 ml-6'>
                <input placeholder='301703' className='border-2  p-1 rounded border-slate-400' type="checkbox" name='byemail' value={formData.byemail} onChange={changeHandler} />
                <div>
                  <p>Comments</p>
                  <p className='text-xs text-blue-400'>Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>


              <div className='flex gap-3 ml-6'>
                <input placeholder='301703' className='border-2  p-1 rounded border-slate-400' type="checkbox" name='byemail' value={formData.byemail} onChange={changeHandler} />
                <div>
                  <p>Candidates</p>
                  <p className='text-xs text-blue-400'>Get notified when a candidate applies for a job.</p>
                </div>
              </div>


              <div className='flex gap-3 ml-6'>
                <input placeholder='301703' className='border-2  p-1 rounded border-slate-400' type="checkbox" name='byemail' value={formData.byemail} onChange={changeHandler} />
                <div>
                  <p>Offers</p>
                  <p className='text-xs text-blue-400'>Get notified when a candidate accepts or rejects an offer.</p>
                </div>
              </div>
          </div>


          <div className='flex flex-col gap-3 mt-5 '>
              <label  className='' htmlFor="">Push Notifications</label>
              <p className='text-xs  text-slate-600 -mt-2'>These are delivered via SMS to youe mobile phone.</p>
              <div className='flex gap-3 ml-6'>
                <input placeholder='301703' className='border-2  p-1 rounded border-slate-400' type="radio" name='notification' value={formData.notification} onChange={changeHandler} />
                <div>
                  <label htmlFor="notification">Everything</label>
                  
                </div>
              </div>


              <div className='flex gap-3 ml-6'>
                <input placeholder='301703' className='border-2  p-1 rounded border-slate-400' type="radio" name='notification' value={formData.notification} onChange={changeHandler} />
                <div>
                  <label htmlFor="notification">Same as Email</label>
                         </div>
              </div>


              <div className='flex gap-3 ml-6'>
                <input placeholder='301703' className='border-2  p-1 rounded border-slate-400' type="radio" name='notification' value={formData.notification} onChange={changeHandler} />
                <div>
                  <label htmlFor="notification">No push notifications</label>
                  
                </div>
              </div>
              
          </div>

          <button onClick={submitHandler} className='w-16 h-10 rounded bg-blue-500 text-white'>Save</button>
        </form>
    </div>
  )
}
