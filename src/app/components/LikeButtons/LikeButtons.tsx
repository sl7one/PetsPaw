import React from 'react'
import './like-buttons.scss'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'

export default function LikeButtons() {
  return (
    <div className='like-buttons'>
      <Button className='mint' width={80} height={80} >
        <Icon name='icon-like' width={30} height={30}/>
      </Button>
      <Button className='pink' width={80} height={80} >
        <Icon name='icon-favorite' width={30} height={30}/>
      </Button>
      <Button className='orange' width={80} height={80} >
        <Icon name='icon-dislike' width={30} height={30}/>
      </Button>
     
    </div>
  )
}
