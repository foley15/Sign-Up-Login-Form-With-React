import React, {useState} from 'react'
import './loginSignup.css'

export const LoginSignup = () => {
  const [action, setAction] = useState('Login')

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Login'? <div></div> :  <div className="input">
          <label htmlFor="">Name:</label>
          <input type="text" />
        </div>}
        <div className="input">
          <label htmlFor="">Email:</label>
          <input type="email" />
        </div>
        <div className="input">
          <label htmlFor="">Password:</label>
          <input type="password" />
        </div>
      </div>
      {action === 'Sign Up'? <div></div> : <div className="forgot-password">Lost Password? <span>Click Here</span></div>}
      <div className="submit-container">
        <div className={action === 'Login'? 'submit gray' : 'submit'} onClick={() => {setAction('Sign Up')}}>Sign Up</div>
        <div className={action === 'Sign Up'? 'submit gray' : 'submit'} onClick={() => {setAction('Login')}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
