import React from 'react'
import './index.css'

export const Title = (props) => {
    return (
        <h1 className={props.className}>{props.text}</h1>
    )
}

export const H2 = (props) => {
    return (
        <h2 className={props.className}>{props.text}</h2>
    )
}

export const Display = (props) => {
    return (
        <h3 className={props.className}>{props.text}</h3>
    )
}

export const P = (props) => {
    return (
        <p className={props.className}>{props.text}</p>
    )
}