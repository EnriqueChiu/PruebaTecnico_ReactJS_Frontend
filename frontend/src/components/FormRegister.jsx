import React from 'react'

function FormRegister(props) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <div className='form__input'>
          <label><h1 className='text-white '>Email</h1></label>
          <input className='form-control' type='text' name='email' onChange={props.onChange} value={props.formValues.email}/>
        </div>
        <div className='form__input'>
          <label><h1 className='text-white '>Password</h1></label>
          <input className='form-control' type='password' name='password' onChange={props.onChange} value={props.formValues.password} />
        </div>

        <div className='form__input'>
          <label><h1 className='text-white '>Confirm Password</h1></label>
          <input className='form-control' type='password' name='confirmpassword' onChange={props.onChange} value={props.formValues.confirmpassword} />
        </div>

        {props.error && (
            <h2 className="text-danger mt-4 ms-5">{props.error}</h2>
        )}

        <div className='container__button'>
          <button className='form__button' type="submit"><h3><strong>Register</strong></h3></button>
        </div>
      </form>
    </>
  )
}

export default FormRegister