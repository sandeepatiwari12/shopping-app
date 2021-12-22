import * as React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@mui/material';

interface AlertProps {
    open: boolean;
    children: React.ReactNode | string;
    title: string;
    onClose: () => void;
}
const AlertDialog = ({ onClose, children, open, title }: AlertProps) => {

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}
export default AlertDialog
