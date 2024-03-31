import React from 'react'

import { FormikProps } from 'formik'
import { Form } from 'react-bootstrap'

import InputWithLabel from '../../../../components/InputWithLabel/InputWithLabel'
import { TCreateGameFormValues } from '../../../../pages/games/create'
import { createSelectField, createTextField } from '../../../../utils/CustomField'
import { GAME_GENRE_OPTIONS, GAME_PLATFORM_OPTIONS } from '../../constants/games'

export default function CreateGameFormFields({ values, handleChange, errors }: FormikProps<TCreateGameFormValues>) {
    return (
        <Form.Group className='d-grid gap-2 mb-3'>
            <InputWithLabel error={ errors.name }>
                { createTextField<keyof TCreateGameFormValues>('Game title', 'name', 'text', {
                    value: values.name,
                    onChange: handleChange
                }) }
            </InputWithLabel>

            <InputWithLabel error={ errors.ageLimit }>
                { createTextField<keyof TCreateGameFormValues>('Age Limit', 'ageLimit', 'number', {
                    value: values.ageLimit,
                    onChange: handleChange
                }) }
            </InputWithLabel>

            <InputWithLabel error={ errors.price }>
                { createTextField<keyof TCreateGameFormValues>('Price', 'price', 'number', {
                    value: values.price,
                    onChange: handleChange
                }) }
            </InputWithLabel>

            <InputWithLabel error={ errors.amount }>
                { createTextField<keyof TCreateGameFormValues>('Amount', 'amount', 'number', {
                    value: values.amount,
                    onChange: handleChange
                }) }
            </InputWithLabel>

            <InputWithLabel error={ errors.genre }>
                { createSelectField<keyof TCreateGameFormValues>(
                    undefined,
                    'genre',
                    GAME_GENRE_OPTIONS,
                    {
                        value: values.genre,
                        onChange: handleChange
                    }
                ) }
            </InputWithLabel>

            <InputWithLabel error={ errors.imageUrl }>
                { createTextField<keyof TCreateGameFormValues>('Image URL ', 'imageUrl', 'text', {
                    value: values.imageUrl,
                    onChange: handleChange
                }) }
            </InputWithLabel>

            <InputWithLabel error={ errors.description }>
                { createTextField<keyof TCreateGameFormValues>('Description', 'description', 'text', {
                    value: values.description,
                    onChange: handleChange
                }) }
            </InputWithLabel>

            <InputWithLabel error={ errors.platform }>
                { createSelectField<keyof TCreateGameFormValues>(
                    undefined,
                    'platform',
                    GAME_PLATFORM_OPTIONS,
                    {
                        value: values.platform,
                        onChange: handleChange
                    }
                ) }
            </InputWithLabel>
        </Form.Group>
    )
}