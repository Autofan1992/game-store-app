import { Form } from 'react-bootstrap'
import { OptionHTMLAttributes } from 'react'

export const createTextField = <NP extends string>(
    placeholder: string | undefined,
    name: NP,
    type?: string,
    props = {},
) => <Form.Control placeholder={placeholder} name={name} type={type} {...props}/>

export const createCheckbox = <NP extends string>(
    name: NP,
    props = {},
) => <Form.Check name={name} {...props}/>

export const createTextAreaField = <NP extends string>(
    placeholder: string | undefined,
    name: NP,
    props = {},
) => <Form.Control as='textarea' placeholder={placeholder} name={name} {...props}/>

export const createSelectField = <NP extends string>(
    defaultValue: string | undefined,
    name: NP,
    options: Array<OptionHTMLAttributes<HTMLOptionElement>>,
    props = {},
) => <Form.Select defaultValue={defaultValue} name={name} {...props}>
    {options.map((option, index) => <option key={index} {...option}>{option.label}</option>)}
</Form.Select>