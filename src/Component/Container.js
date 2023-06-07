import React from 'react'

function Container({title,content}) {
  return (
    <div className='flex flex-col  justify-center text-center pr-10 pl-10 '>
      <span className =" bg-red-50 border-solid border-2 border-red-200 rounded-md">
        {title}
      </span>
      <span className =" bg-emerald-50 border-solid border-2 border-emerald-200 rounded-md">
        {content}
      </span>
    </div>
  )
}

export default Container
