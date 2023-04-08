import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 'fit-content',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
    borderRadius: '10px',
    border:0
};

export default function KeepMountedInfoModal({sale}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}> <ZoomInIcon /> </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" style={{color:"blue", fontWeight:"bold",padding:10}}>
            Client Info :
          </Typography>
          <table>
            <tr>
                <td style={{fontWeight:'bold'}}>Client Name :</td>
                <td>{sale.customerName}</td>
            </tr>
            <tr>
                <td style={{fontWeight:'bold'}}>Address :</td>
                <td>{sale.address?.city}, {sale.address?.country}</td>
            </tr>
            <tr>
                <td style={{fontWeight:'bold'}}>Zip code :</td>
                <td>{sale.address?.postal_code}</td>
            </tr>
          </table>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" style={{color:"blue", fontWeight:"bold", padding:10}}>
            Order Info :
          </Typography>
          <table style={{display:'flex', flexDirection:'column'}}>
            {sale.products?.map((product) => (
             <td>
                 <tr>
                <td style={{fontWeight:'bold'}}>Product :</td>
                <td>{product.productId}</td>
            </tr>
            <tr>
                <td style={{fontWeight:'bold'}}>Quantity :</td>
                <td>{product.quantity}</td>
            </tr>
            <tr>
                
            </tr>
            <br />
             </td>
           
           
            ))}
            
           
          </table>
        </Box>
      </Modal>
    </div>
  );
}