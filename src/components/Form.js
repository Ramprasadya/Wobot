import React from 'react'
import "./styles/Form.css"
const Form = () => {
  return (
    <div className="container-form">
       <p className='icon-1' > </p>
       <p className='icon-2' > </p>
       <p className='icon-3' > </p>
        <div className='main'>
        
        <h1>It's delight to have you</h1>
        <h1>onboard</h1></div>
        <div className='pra-head'>
        <p>Help us know you better.</p>
        <p>(This is how we optimize Wobot as per your business need)</p>
        </div>
        
        <form className='form-control' action="">
           <div>
           <label htmlFor="">Company name</label><br />
            <input type="text" placeholder="  e.g.Example Inc" />
           </div>
           <div className='label-shift'>
            <label htmlFor="" className='label-left'> Industry </label><br />
            <select class="option-head" aria-label="  Select">
             <option selected>Select</option>
             <option value="1">One</option>
             <option value="2">Two</option>
             <option value="3">Three</option>
            </select>
           </div>
           {/* <p className='bg-hide-1'></p> */}
          <div >
          <div><p className='para-title'>Company size</p><br /></div>
           <div className='d-flex'><p className='para'>1-20</p><p className='para'>21-50</p><p className='para'>51-200</p><p className='para'>201-500</p><p className='para'>500+</p></div>
          </div>
          <button type='submit' className='btn'>Get Started</button>
        </form>
        {/* <p className='bg-hide'></p> */}
    </div>
  )
}

export default Form