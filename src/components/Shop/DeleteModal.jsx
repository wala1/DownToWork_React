import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import axios from "axios";
import ProductPage from "./ProductPage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  border:0
};

export default function DeleteModal({ product, handleDelete }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDeleteClick = () => {
    axios.delete("http://localhost:3001/product/delete/"+product._id);
    console.log(product._id);
    handleDelete(product._id);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        {" "}
        {/* <DeleteOutlinedIcon  style={{color:"red"}}/> */}
        Delete
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Delete order
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Do you really want to delete this order?
          </Typography>
          <div style={
            {
                display:"flex",
                marginTop:"20px"
                
            }
          }>
          <Button variant="contained" onClick={() => handleDeleteClick()}
          style={{color:"white",backgroundColor:"red",marginRight:"10px"}}
          >
            Delete
          </Button>
          <Button variant="contained" onClick={() => handleClose()}>
            Cancel
          </Button>
          </div>
         
        </Box>
      </Modal>
    </div>
  );
}
