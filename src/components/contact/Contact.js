import React from 'react'
import './ContactStyles.css'

const Contact = () => {
    return (
        <div className='contact' data-aos="fade-up"
        data-aos-duration="3000">
            <div className="container">
                <div className="form-container">
                    <form>
                        <h1><span>Contact</span> Us</h1>
                        <div >
                            <label>Name</label>
                            <input type="text" placeholder='Enter your name'/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='4' placeholder='Enter your message'/>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
