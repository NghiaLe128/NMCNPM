import React from 'react'

const Input = ({style, placeholder, bordered, style, ...rests}) => {
  return (
    <Input
        size = {size}
        placeholder = {placeholder}
        bordered = {bordered}
        style = {style}
        {...rests} 
    />
  )
}

export default Input
