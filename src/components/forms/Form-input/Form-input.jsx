import React from 'react'
import Group from './input.styles';

export default function FormInput({handleChange, label, ...otherProps}) {
    return (
        <Group value={otherProps.value.length}>
            <input onChange={handleChange} {...otherProps}/>
            {
                label ?
                (<label>
                    {label}
                </label>)
                : null
            }
        </Group>
    )
}
