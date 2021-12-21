import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

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
