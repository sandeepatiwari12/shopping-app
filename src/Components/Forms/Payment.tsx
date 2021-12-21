import Box from '@mui/material/Box';
import { Form, Field } from 'react-final-form'
import React from 'react'
import { TextField, Typography, Button } from '@mui/material';
import Flex from '@components/Flex';
import { required } from '@utils/validator';
import { formatCreditCardNumber, formatExpirationDate, formatCVC } from '@utils/formatter'

interface PaymentFormProps {
    formData: any;
    onSumbitForm: (obj: any) => void;
}
const Payment = ({ onSumbitForm, formData }: PaymentFormProps) => {
    const onSubmit = (e: any) => {
        onSumbitForm(e)
    }
    return (
        <Box>
            <Form
                onSubmit={onSubmit}
                initialValues={formData}
                // validate={ }
                render={({ handleSubmit, submitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Typography variant='h5' mb={2}>Card details (Debit/Credit)</Typography>
                        <Flex>
                            <Field name="cardHolder" validate={required}>
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        required
                                        sx={{ margin: 1 }}
                                        label='Name on Card'
                                        {...input}
                                        error={meta.error && meta.touched}
                                        helperText={meta.error && meta.touched && <span>{meta.error}</span>}
                                    />
                                )}
                            </Field>
                            <Field name="cardNumber"
                                validate={required}
                                pattern="[\d| ]{16,22}"
                                format={formatCreditCardNumber}>
                                {({ input, meta }) => (
                                    <TextField
                                        fullWidth
                                        required
                                        sx={{ margin: 1 }}
                                        label='Card Number'
                                        {...input}
                                        error={meta.error && meta.touched}
                                        helperText={meta.error && meta.touched && <span>{meta.error}</span>}
                                    />
                                )}
                            </Field>
                            <Field name="carExpiry"
                                pattern="\d\d/\d\d"
                                format={formatExpirationDate}>
                                {({ input, meta }) => (
                                    <TextField
                                        required
                                        sx={{ margin: 1 }}
                                        label='Valid Thru (MM/YYYY)'
                                        {...input}
                                        error={meta.error && meta.touched}
                                        helperText={meta.error && meta.touched && <span>{meta.error}</span>}
                                    />
                                )}
                            </Field>
                            <Field name="cvv"
                                validate={required}
                                pattern="\d{3,4}"
                                format={formatCVC}
                            >
                                {({ input, meta }) => (
                                    <TextField
                                        required
                                        sx={{ margin: 1 }}
                                        label='CVV'
                                        {...input}
                                        error={meta.error && meta.touched}
                                        helperText={meta.error && meta.touched && <span>{meta.error}</span>}
                                    />
                                )}
                            </Field>
                        </Flex>

                        <Box padding={2} textAlign={'right'}>
                            <Button disabled={submitting} variant='contained' color='primary' size='large' type="submit">Confirm order</Button>
                        </Box>
                    </form>
                )}
            />
        </Box>
    )
}

export default Payment
