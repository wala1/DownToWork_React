// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";

// function Star(props) {
//     // const [stars, setStars] = useState([5]);
//     const [prodRate1,setProdRate1]=useState(props.rate);
//     const [product, setProduct] = useState({});
//     const[rateNbr,setRateNbr]=useState(props.rateNbr);
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
    
//     const  handleRate = async (prodRate1) => {
//          const prodRate=(props.rate*props.rateNbr+prodRate1)/(rateNbr)
//         const prodRateNbr=rateNbr;
//         try {
//            await axios.put(`http://localhost:3001/product/update/${props.id}`,{prodRate1})
           
//             console.log(prodRate)
//         } catch (err) { console.log(err) }
//         //  window.location.reload();
//         // console.log(prodRate)
//         setRateNbr(rateNbr+1);
//     }
    

//     return (<div>
//         {[...Array(5)].map((star, i) => {
//             const ratingValue = i+1;

//             return (<label>
//                 <input type='radio' name='rating' value={ratingValue}  onClick={()=>{handleRate(ratingValue);setProdRate1(ratingValue)}}></input>
//                 <FaStar className="star" color={ratingValue <= prodRate1 ? "#ffc107" : "#e4e5e9"} size={20}></FaStar>
//             </label>)
//         })
//         }
//     </div>)
// }
// export default Star;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";

// function Star(props) {
//   const [prodRate, setProdRate] = useState(props.rate);
//   const [prodRateNbr, setProdRateNbr] = useState(props.rateNbr);
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/product/getById/${props.id}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getProducts();
//   }, []);

//   const handleRate = async (ratingValue) => {
//     const newProdRate = (prodRate * prodRateNbr + ratingValue) / (prodRateNbr + 1);
//     try {
//       await axios.put(`http://localhost:3001/product/update/${props.id}`, { prodRate: newProdRate, prodRateNbr: prodRateNbr + 1 });
//       setProdRate(newProdRate);
//       setProdRateNbr(prodRateNbr + 1);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       {[...Array(5)].map((star, i) => {
//         const ratingValue = i + 1;
//         return (
//           <label>
//             <input type="radio" name="rating" value={ratingValue} onClick={() => handleRate(ratingValue)} />
//             <FaStar className="star" color={ratingValue < prodRate ? "#ffc107" : "#e4e5e9"} size={20} />
//           </label>
//         );
//       })}
//     </div>
//   );
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