import { useState } from 'react'

import { Formik } from 'formik'
import { Button, Card, Form, Spinner } from 'react-bootstrap'

import Avatar from '../../../../components/Avatar/Avatar'
import { createTextField } from '../../../../utils/CustomField'
import { CommentFragment } from '../../graphql/fragments/Comment.generated'
import { useDeleteCommentForGamePageMutation } from '../../graphql/mutations/DeleteCommentForGamePage.generated'
import { usePatchCommentForGamePageMutation } from '../../graphql/mutations/PatchCommentForGamePage.generated'

export default function CommentItem({ user, text, updatedAt, isEditable, isEdited, id }: CommentFragment) {
    // TODO: implement username on BE side
    const { avatar } = user
    const [isEditMode, setIsEditMode] = useState(false)
    const [patchComment, { loading: isPatchLoading }] = usePatchCommentForGamePageMutation()
    const [deleteComment, { loading: isDeleteLoading }] = useDeleteCommentForGamePageMutation({
        update: (cache, { data }) => {
            if (!data) return
            cache.evict({
                fieldName: 'commentConnection'
            })
        }
    })

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode)
    }

    const isLoading = isPatchLoading || isDeleteLoading

    // Sample updated time (you can replace this with your actual updated time)
    const updatedTime = new Date(updatedAt)

    // Format the date and time using Intl.DateTimeFormat
    const formattedTime = new Intl.DateTimeFormat(navigator.language, {
        timeStyle: 'short'
    }).format(updatedTime)

    const shouldShowActionButtons = isEditable && !isEditMode

    return (
        <Card>
            <Card.Header className='d-flex align-items-center gap-2'>
                <Avatar src={ avatar }/>
                <div>{ formattedTime }</div>
                { isEdited && <div className='text-muted'>(edited)</div> }
                { shouldShowActionButtons && (
                    isLoading ? <Spinner className='ms-auto'/> : <>
                        <button className='btn btn-dark ms-auto' onClick={ toggleEditMode }>Edit</button>
                        <button className='btn btn-danger'
                            onClick={ () => deleteComment({ variables: { input: { id } } }) }>Delete
                        </button>
                    </>
                )
                }
            </Card.Header>
            <Card.Body>
                <Formik
                    initialValues={ {
                        text,
                    } }
                    onSubmit={ async (values, formikHelpers) => {
                        if (values.text === text) {
                            toggleEditMode()
                            return
                        }

                        await patchComment({
                            variables: {
                                input: {
                                    text: values.text,
                                    id,
                                },
                            },
                        })
                        toggleEditMode()
                        formikHelpers.resetForm({ values: { text: values.text } })
                    } }
                >
                    { ({ handleSubmit, values, handleChange, dirty }) => {
                        const button = isLoading ?
                            <Spinner/> :
                            <Button className='ms-auto d-bloc' disabled={ !dirty || isLoading }
                                type='submit' variant='primary'>Save</Button>
                        return (
                            <Form onSubmit={ handleSubmit }>
                                <Form.Group className='me-3 position-relative w-100 flex-grow-1'>
                                    { isEditMode ? <div className='d-flex gap-3'>
                                        <label className='d-block flex-grow-1'>
                                            { createTextField('Type your comment...', 'text', 'text', {
                                                value: values.text,
                                                onChange: handleChange,
                                                onBlur: handleSubmit,
                                                autoFocus: true
                                            }) }
                                        </label>
                                        { button }
                                    </div> : text }
                                </Form.Group>
                            </Form>
                        )
                    } }
                </Formik>
            </Card.Body>
        </Card>
    )
}
