import React from 'react'

import { FormikProps } from 'formik'
import { Form } from 'react-bootstrap'

import { TCreateGameFormValues } from '../../../../app/games/create/page'
import InputWithLabel from '../../../../components/InputWithLabel/InputWithLabel'
import { createSelectField, createTextField } from '../../../../utils/CustomField'
import { GAME_GENRE_OPTIONS, GAME_PLATFORM_OPTIONS } from '../../constants/games'

export default function CreateGameFormFields({
    values,
    handleChange,
    errors,
    setFieldValue
}: FormikProps<TCreateGameFormValues>) {

    const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]

        if (!file) {
            return
        }

        const twoMbInBytes = 2 * 1024 * 1024

        if (file.size > twoMbInBytes) {
            event.target.value = ''
            window.alert('The file is too large')

            return
        }

        setFieldValue('image', file)
    }

    return (
        <Form.Group className='d-grid gap-2 mb-3'>
            <InputWithLabel error={errors.image} label='Image'>
                {createTextField<keyof TCreateGameFormValues>('Image', 'image', 'file', {
                    onChange: onFileChange,
                    accept: 'image/*',
                })}
            </InputWithLabel>
            
            <InputWithLabel error={errors.name} label='Title'>
                {createTextField<keyof TCreateGameFormValues>('Game title', 'name', 'text', {
                    value: values.name,
                    onChange: handleChange,
                })}
            </InputWithLabel>

            <InputWithLabel error={errors.ageLimit} label='Age Limit'>
                {createTextField<keyof TCreateGameFormValues>('Age Limit', 'ageLimit', 'number', {
                    value: values.ageLimit,
                    onChange: handleChange,
                })}
            </InputWithLabel>

            <InputWithLabel error={errors.price} label='Price'>
                {createTextField<keyof TCreateGameFormValues>('Price', 'price', 'number', {
                    value: values.price,
                    onChange: handleChange,
                })}
            </InputWithLabel>

            <InputWithLabel error={errors.amount} label='Amount'>
                {createTextField<keyof TCreateGameFormValues>('Amount', 'amount', 'number', {
                    value: values.amount,
                    onChange: handleChange,
                })}
            </InputWithLabel>

            <InputWithLabel error={errors.genre} label='Genre'>
                {createSelectField<keyof TCreateGameFormValues>(
                    undefined,
                    'genre',
                    GAME_GENRE_OPTIONS,
                    {
                        value: values.genre,
                        onChange: handleChange,
                    },
                )}
            </InputWithLabel>

            <InputWithLabel error={errors.description} label='Description'>
                {createTextField<keyof TCreateGameFormValues>(
                    'Description',
                    'description',
                    'text',
                    {
                        value: values.description,
                        onChange: handleChange,
                    },
                )}
            </InputWithLabel>

            <InputWithLabel error={errors.platforms} label='Platforms'>
                {createSelectField<keyof TCreateGameFormValues>(
                    undefined,
                    'platforms',
                    GAME_PLATFORM_OPTIONS,
                    {
                        value: values.platforms,
                        onChange: handleChange,
                        multiple: true,
                    },
                )}
            </InputWithLabel>
        </Form.Group>
    )
}
