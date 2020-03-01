import React from 'react'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <h2 className="logo">Climate Monitor</h2>
            <ul className='nav'>
                <li>Home</li>
                <li>Co2</li>
                <li>Temperature</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Navbar;