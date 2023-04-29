import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {updateProduct} from '../../services/shopService';

import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  border: 0,
  borderRadius: "10px",
  marginTop: "100px",
};


function UpdateModal({ product }) {
  const [prodName, setprodName] = useState("");
  const [prodDesc, setprodDesc] = useState("");
  const [prodImg, setprodImg] = useState("");
  const [prodPrice, setprodPrice] = useState("");
  const [prodBrand, setprodBrand] = useState("");
  const [prodCategroy, setProdCategory] = useState("");
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await updateProduct(product._id,prodName,prodDesc,prodImg,prodPrice,prodBrand,prodCategroy,user._id)
        handleClose();
  
    }
    catch (error) {
        console.log(error);}

   
    };


  return (
    <div>
      <Button onClick={handleOpen}>Update</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
             <h3> Update Product</h3>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form
                className="d-flex align-items-center "
                style={{ backgroundColor: "#ECF0F1", borderRadius: "10px" }}
                onSubmit={handleSubmit}
              ><div className="d-flex flex-md-row justify-content-around">
                <div
                  className="form-group "
                  style={{
                    width: "100%",
                    borderBottom: "#ba0000",
                    fontSize: "1.5rem",
                  }}
                >
                  <label style={{ fontSize: "0.8rem" }}>Name</label>
                  <input
                    type="textArea"
                    className="form-control"
                    onChange={(e) => {setprodName(e.target.value) ;console.log(prodName)}}
                    placeholder="Product Name"
                    defaultValue={product.prodName}
                    style={{
                      borderBottom: "2px solid grey",
                      borderRadius: "4px",
                    }}
                  ></input>
                </div>
                <div
                  className="form-group"
                  style={{ width: "100%", border: "#ba0000" }}
                >
                  <label>Description</label>
                  <input
                    type="textArea"
                    className="form-control"
                    onChange={(e) => setprodDesc(e.target.value)}
                    placeholder="Description"
                    defaultValue={product.prodDesc}
                    style={{
                      borderBottom: "2px solid grey",
                      borderRadius: "4px",
                    }}
                  ></input>
                </div>
                </div>
                <div
                  className="form-group"
                  style={{ width: "100%", border: "#ba0000" }}
                >
                  <label>Uplaod Image</label>
                  <input
                    className="form-control"
                    type="file"
                    encType="multipart/form-data"
                   // defaulValue={product.prodImg.imagrUrl}
                    onChange={(e) => setprodImg(e.target.files[0])}
                    style={{
                      borderBottom: "2px solid grey",
                      borderRadius: "4px",
                    }}
                  ></input>
                </div>
                <div className="d-flex flex-md-row justify-content-around">
                <div
                  className="form-group"
                  style={{ width: "100%", border: "#ba0000" }}
                >
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setprodPrice(e.target.value)}
                    placeholder="Price"
                    defaultValue={product.prodPrice}
                    style={{
                      borderBottom: "2px solid grey",
                      borderRadius: "4px",
                    }}
                  ></input>
                </div>
                <div
                  className="form-group"
                  style={{ width: "100%", border: "#ba0000" }}
                >
                  <label>Brand</label>
                  <input
                    type="textArea"
                    className="form-control"
                    onChange={(e) => setprodBrand(e.target.value)}
                    placeholder="Brand"
                    defaultValue={product.prodBrand}
                    style={{
                      borderBottom: "2px solid grey",
                      borderRadius: "4px",
                    }}
                  ></input>
                </div>
                </div>
                <div
                  className="form-group"
                  style={{ width: "100%", border: "#ba0000" }}
                >
                  <label>Category</label>
                  <input
                    type="textArea"
                    className="form-control"
                    onChange={(e) => setProdCategory(e.target.value)}
                    placeholder="Category"
                    defaultValue={product.prodCategroy}
                    style={{
                      borderBottom: "2px solid grey",
                      borderRadius: "4px",
                    }}
                  ></input>
                </div>
                <button
                  type="submit"
                  className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small alignleft sc_buttons_st1"
                  style={{ width: "200px", margin: "10px" }}
                >
                  Submit
                </button>
              </form>{" "}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default UpdateModal;
