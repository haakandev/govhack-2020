import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  button: {
    marginTop: theme.spacing(3),
    alignSelf: 'flex-end',
  },
}));

const InfoTooltip = ({
  open, handleClose, text, title,
}) => {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className={classes.modal}>
        <Typography variant="h5" id="modal-title">{title}</Typography>
        <Typography variant="body1" id="modal-description">{text}</Typography>
        <Button className={classes.button} variant="contained" color="primary" onClick={handleClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default InfoTooltip;
