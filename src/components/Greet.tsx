import React from 'react'

type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

const greet = (props: GreetProps) => {
  const {messageCount = 0} = props
  return (
    <div>
        <h2>
            {
              props.isLoggedIn 
              ? `Hello! Hi, ${props.name}! You have ${messageCount} unseen message!` 
              : `Welcome Guest!`
            }
        </h2>
    </div>
  )
}

export default greet