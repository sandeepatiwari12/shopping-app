import Box from '@mui/material/Box';
import { Form, Field } from 'react-final-form'
import React from 'react'
import { TextField, Typography, Button } from '@mui/material';
import Flex from '@components/Flex';

interface ContactFormProps {
    formData: any;
    onSumbitForm: (obj:any) => void;
}

const Contact = ({onSumbitForm, formData}: ContactFormProps) => {
    const onSubmit = (e: any) => {
        onSumbitForm(e)
    }
    return (
        <Box>
            <Form
                onSubmit={onSubmit}
                initialValues={formData}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Typography variant='h5' mb={2}>Customer Details</Typography>
                        <Flex>
                            <Field name="fullName">
                                {props => (
                                    <TextField
                                        fullWidth
                                        required
                                        sx={{ margin: 1 }}
                                        label='Full Name'
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                    />
                                )}
                            </Field>
                            <Field name="phone" >
                                {props => (
                                    <TextField
                                        required
                                        sx={{ margin: 1 }}
                                        label='Phone'
                                        type={'tel'}
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                    />
                                )}
                            </Field>
                            <Field name="email">
                                {props => (
                                    <TextField
                                        required
                                        sx={{ margin: 1 }}
                                        label='Email'
                                        type={'email'}
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                    />
                                )}
                            </Field>
                        </Flex>
                        <Flex>
                            <Field name="address__line1">
                                {props => (
                                    <TextField
                                        required
                                        sx={{ margin: 1, width: '100%' }}
                                        label='Line 1'
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                    />
                                )}
                            </Field>
                            <Field name="address__line2">
                                {props => (
                                    <TextField
                                        sx={{ margin: 1, width: '100%' }}
                                        label='Line 2 (Optional)'
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                    />
                                )}
                            </Field>
                        </Flex>
                        <Flex>
                            <Field name="address__city">
                                {props => (
                                    <TextField
                                        required
                                        sx={{ margin: 1 }}
                                        label='City'
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                    />
                                )}
                            </Field>
                            <Field name="address__state">
                                {props => (
                                    <TextField
                                        required
                                        sx={{ margin: 1 }}
                                        label='State'
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                    />
                                )}
                            </Field>
                            <Field name="address__pincode">
                                {props => (
                                    <TextField
                                        required
                                        sx={{ margin: 1 }}
                                        label='Pincode'
                                        type={'number'}
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                    />
                                )}
                            </Field>
                        </Flex>
                        <Box padding={2} textAlign={'right'}>
                            <Button variant='contained' color='primary' size='large' type="submit">Proceed</Button>
                        </Box>
                    </form>
                )}
            />
        </Box>
    )
}

export default Contact
