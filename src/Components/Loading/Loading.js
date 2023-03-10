import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div className='loading'>
            <div class="spinner-box">
                <div class="pulse-container">
                    <div class="pulse-bubble pulse-bubble-1"></div>
                    <div class="pulse-bubble pulse-bubble-2"></div>
                    <div class="pulse-bubble pulse-bubble-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading