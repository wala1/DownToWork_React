import React from 'react';
import './Side.css';
import { useNavigate } from "react-router-dom";

const Side = ({username, email , postNumber,statut}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/business");
  };
  const goToMyProducts = () => {
    navigate("/myProducts");
  };
  return (
    <div>
      <div>
        <div className="cardd">
          <div className="lines" />
          <div className="content">
            <div className="details">
              <h2>{username}<br /><span>{statut}</span> <span>{email}</span></h2>
              <div className="data">
                <h3>{postNumber}<br /><span>Posts</span></h3>
                <h3>10<br /><span>Certifs</span></h3>
                <h3>150<br /><span>Products</span></h3>
              </div>
              <br />
            <div className="social">
                <a href="https://github.com/username">
                  <i className="fab fa-github" />
                </a>
                <a href="https://linkedin.com/in/username">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="https://instagram.com/username">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://facebook.com/username">
                  <i className="fab fa-facebook" />
                </a>
              </div>
              <div className="actionBtn">
                <button onClick={()=>handleNavigate()}>Orders</button>
                <button onClick={()=>goToMyProducts()} >Products</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;
