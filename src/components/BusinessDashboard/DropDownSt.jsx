import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import useStore from '../../store/store'

export default function DialogSelect({sale}) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [newStatus, setNewStatus] = React.useState('');
  const sales = useStore(state => state.sales);

  const handleChange = (event) => {
    setStatus((event.target.value));
    // console.log(status);
  };

  React.useEffect(() => {
  setNewStatus(status);    
  }, [status]);

  const handleRefreshSale = (saleId) => {
    // find the index of the sale you want to refresh
    const saleIndex = sales.findIndex(sale => sale._id === saleId);
    // create a new sale object with updated data
    const updatedSale = {
      ...sales[saleIndex],
      status: newStatus, // add new status here
    };
    // update the sales state with the new sale object
    useStore.setState({
      sales: [
        ...sales.slice(0, saleIndex),
        updatedSale,
        ...sales.slice(saleIndex + 1),
      ],
    });
  };
  

  const handleSubmit = () => {
    axios.put(`http://localhost:3001/orders/${sale._id}`, {
      userId: sale.userId,
      products: sale.products,
      amount: sale.amount,
      address: sale.address,
      status: newStatus,
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        handleRefreshSale(sale._id);
        setOpen(false);
      })
      .catch(error => {
        console.log(error);
      });
  };
  

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}><EditIcon></EditIcon></Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Change status</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Status</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={status}
                onChange={handleChange}
                input={<OutlinedInput label="Status" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Pending"}>Pending</MenuItem>
                <MenuItem value={"Declined"}>Declined</MenuItem>
                <MenuItem value={"Approved"}>Approved</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>handleSubmit()}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}