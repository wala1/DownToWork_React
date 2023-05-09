// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";

// function Star(props) {
//     // const [stars, setStars] = useState([5]);
//     const [prodRate,setProdRate]=useState(props.rate);
//     const [product, setProduct] = useState({});
    
//     useEffect(()=>{ const getProducts = async () => {
//         axios.get(`http://localhost:3001/product/getById/${props.id}`)
//             .then(response => {
//                 setProduct(response.data);

//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };
//     getProducts();
    
//     }
      
//     ,[])
//     const  handleRate = async (prodRate) => {

//         try {
//            await axios.put(`http://localhost:3001/product/update/${props.id}`,{prodRate})
           
//             console.log(prodRate)
//         } catch (err) { console.log(err) }
//         //  window.location.reload();
//         // console.log(prodRate)
//     }
    

//     return (<div>
//         {[...Array(5)].map((star, i) => {
//             const ratingValue = i+1;

//             return (<label>
//                 <input type='radio' name='rating' value={ratingValue}  onClick={()=>{handleRate(prodRate);setProdRate(ratingValue)}}></input>
//                 <FaStar className="star" color={ratingValue <= prodRate ? "#ffc107" : "#e4e5e9"} size={20}></FaStar>
//             </label>)
//         })
//         }
//     </div>)
// }
// export default Star;

import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

function Star(props) {
  const [prodRate, setProdRate] = useState(props.rate);
  const [prodRateNbr, setProdRateNbr] = useState(props.rateNbr);
  const [product, setProduct] = useState({});
  const [rated, setRated] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/product/getById/${props.id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, [props.id]);

  const handleRate = async (ratingValue) => {
    if (rated) {
      return;
    }

    const newProdRate =
      (prodRate * prodRateNbr + ratingValue) / (prodRateNbr + 1);
    const newProdRateNbr = prodRateNbr + 1;

    try {
      await axios.put(`http://localhost:3001/product/update/${props.id}`, {
        prodRate: newProdRate,
        prodRateNbr: newProdRateNbr,
      });

      console.log(newProdRate);
      setProdRate(newProdRate);
      setProdRateNbr(newProdRateNbr);
      setRated(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                handleRate(ratingValue);
              }}
              disabled={rated}
            ></input>
            <FaStar
              className="star"
              color={ratingValue <= prodRate ? "#ffc107" : "#e4e5e9"}
              size={20}
            ></FaStar>
          </label>
        );
      })}
    </div>
  );
}

export default Star;