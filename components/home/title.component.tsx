import React from 'react'

interface TitleProps{
    title:string;
    subtitle:string;
}

const Title:React.FC<TitleProps> = ({title,subtitle}) => {
  return (
    <div className='home-title my-12'>
      <h2 className="css-text-desktop-h0 text-center">{title}</h2>
      <h3 className='css-text-desktop-h3 text-center'>{subtitle}</h3>
    </div>
  )
}

export default Title
