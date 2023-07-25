import React from 'react'

const BotAvatar = () => {
    return (
        <div className='me-5'>
            <img
                className='h-14 w-14 object-contain rounded-[100px]'
                src={require('../../assets/images/botAvatar.jpg')}
                alt='Bot'
            />
        </div>
    )
}

export default BotAvatar