import React from 'react'
import CustomButton from './CustomButton'


const AiPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
  <div>
    <a href='./notAvailable.html' target='_blank' rel='noopener noreferrer'>Currently Not Available</a>
  </div>
  
    // <div className='aipicker-container'>
    //   <textarea
    //     placeholder='Ask AI...'
    //     className='aipicker-textarea'
    //     rows={5}
    //     value={prompt}
    //     onChange={(e) => setPrompt(e.target.value)}
    //   />

    //   <div className='flex flex-wrap gap-3'>
    //     {generatingImg ? (
    //       <CustomButton
    //         type='outline'
    //         title='Asking AI...'
    //         customStyles='text-xs'
    //       />
    //     ) : (
    //       <>
    //         <CustomButton
    //           type='outline'
    //           title='AI Logo'
    //           handleClick={() => handleSubmit('logo')}
    //           customStyles='text-xs'
    //         />

    //         <CustomButton
    //           type='filled'
    //           title='AI Full'
    //           handleClick={() => handleSubmit('full')}
    //           customStyles='text-xs'
    //         />
    //       </>
    //     )}
    //   </div>
    // </div>
  )
}

export default AiPicker