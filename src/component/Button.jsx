import React from 'react'

const Button = ({ item }) => {
    return (
        <div className='bg-gray-100  px-3 py-1 rounded-lg'>
            <button>{item}</button>
        </div>
    )
}

export default Button