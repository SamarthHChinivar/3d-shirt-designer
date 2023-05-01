import React from 'react'
import CustomButton from './CustomButton'


const AiPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
        placeholder='Ask AI...'
        className='aipicker-textarea'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className='flex flex-wrap gap-3'>

      </div>
    </div>
  )
}

export default AiPicker