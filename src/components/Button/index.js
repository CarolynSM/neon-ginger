import React from 'react'
import './index.css'

const Button = props => {
    const buildClassName = () => {
        const {isDisabled, isBusy, isSmall} = props
        let className = ['btn']
        
        isDisabled && className.push('isDisabled')
        isBusy && className.push('isBusy')
        isSmall && className.push('isSmall')
        
        return className.join(' ')
    }

    return (
        <button className={buildClassName()}>{props.text}</button>
    )
}

// TODO: add prop-types or flow
// className
// text

export default Button