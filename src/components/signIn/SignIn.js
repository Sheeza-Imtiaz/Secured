import React from 'react'
import './SignInStyles.css'

const SignIn = () => {
    return (
        <div className='signin' data-aos="fade-up"
            data-aos-duration="3000">
            <div className="container">
                <div className="form-container">
                    <form>
                        <h1><span>Sign</span> In</h1>
                        <div>
                            <div>
                                <label>Email</label>
                                <input type="email" placeholder='Enter your email' />
                            </div>
                            <label>Password</label>
                            <input type="password" placeholder='Enter your password' />
                        </div>
                        {/* <div>
                            <label>Message</label>
                            <textarea rows='10' placeholder='Enter your name' />
                        </div> */}
                        <button className=''>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
