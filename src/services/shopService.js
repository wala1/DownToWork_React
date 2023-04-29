import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

//const url = 'http://localhost:3001/product/get';
const addProdUrl = 'http://localhost:3001/product/add';
const getProductsUrl ='http://localhost:3001/product/getAll';
const updateRateUrl='http://localhost:3001/product/update/';
const updateteProductUrl='http://localhost:3001/product/updateProduct/';


export const addProduct = async (prodName, prodDesc,prodImg, prodPrice,prodBrand,prodCateg,ownerId) => {
  const formData=new FormData()
      formData.append('prodName',prodName)
      formData.append('prodDesc',prodDesc) 
      formData.append('prodImg',prodImg)
      formData.append('prodPrice',prodPrice) 
      formData.append('prodBrand',prodBrand) 
      formData.append('prodCateg',prodCateg)
      formData.append('ownerId',ownerId)
    try {
        await axios.post(addProdUrl,formData)
        alert("product uploaded successfuly !")
           
    }
    catch (err) {
        console.log(err.message)
    }
}

export const updateProduct = async (prodId,prodName, prodDesc,prodImg, prodPrice,prodBrand,prodCateg,ownerId) => {
     
        try {
            await axios.put(updateteProductUrl+prodId,{prodName, prodDesc,prodImg, prodPrice,prodBrand,prodCateg,ownerId})
            alert("product updated successfuly !")
        }
        catch (err) {
            console.log(err.message)
        }
    }



export const getProducts = async () => {
    
      
      try {
          await axios.get(getProductsUrl)
         
             
      }
      catch (err) {
          console.log(err.message)
      }
  }
  

  export const rate =async (prodId)=> {
   
      
    try {
        await axios.put(updateRateUrl+prodId,"5")
        alert("product updated successfuly !")
        // console.log(prodRate)
           
    }
    catch (err) {
        console.log(err.message)
    }
  }