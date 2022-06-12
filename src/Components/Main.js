import React from 'react'

function Main() {
  return (
    <div className='container'>
        <div className='profile' >
            <h3>Hakeem Grillo</h3>
            <h5>Frontend Developer</h5>
            <p>Ladigrillo48@gmail.com</p>
        </div>
        <div className='links'>
            <a className='mail' href='www.gmail.com'>Email</a>
            <a className='linkedin' href='https://www.linkedin.com/in/oladipupo-grillo-3a3830151/'>LinkedIn</a>
        </div>
        <div className='info'>
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                I try to keep up with the latest technologies and best practices,
                 and I'm always looking to acquire more knowledge.</p>
        </div>
        <div className='info' >
            <h3>Interests</h3>
            <p>Entrepreneurship, Agricultures, Workouts, Reading, Art, Music, Real Estate</p>
        </div>

    </div>
  )
}

export default Main