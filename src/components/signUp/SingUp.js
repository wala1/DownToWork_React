import { Component } from "react";
class SignUp extends Component{

    render(){
      




        return(
          
          <html>
          <head>
            
            

            
          </head>
          <body>
             <div>
           
            
           <div className="containerhass" >
     <div className="forms-containerhass">
       <div className="signin-signuphass">
         <form action="#" className="sign-in-formhass">
           <h2 className="titlehass">Sign in</h2>
           <div className="input-fieldhass">
             <i className="fas fa-user"></i>
             <input type="text" placeholder="Username" />
           </div>
           <div className="input-fieldhass">
             <i className="fas fa-lock"></i>
             <input type="password" placeholder="Password" />
           </div>
           <input type="submit" value="Login" className="btnhass solid" />
           <p className="social-texthass">Or Sign in with social platforms</p>
           <div className="social-mediahass">
             <a href="#" className="social-iconhass">
               <i className="fab fa-facebook-f"></i>
             </a>
             <a href="#" className="social-iconhass">
               <i className="fab fa-twitter"></i>
             </a>
             <a href="#" className="social-iconhass">
               <i className="fab fa-google"></i>
             </a>
             <a href="#" className="social-iconhass">
               <i className="fab fa-linkedin-in"></i>
             </a>
           </div>
         </form>
         <form action="#" className="sign-up-formhass">
           <h2 className="titlehass">Sign up</h2>
           <div className="input-fieldhass">
             <i className="fas fa-user"></i>
             <input type="text" placeholder="Username" />
           </div>
           <div className="input-fieldhass">
             <i className="fas fa-envelope"></i>
             <input type="email" placeholder="Email" />
           </div>
           <div className="input-fieldhass">
             <i className="fas fa-lock"></i>
             <input type="password" placeholder="Password" />
           </div>
           <input type="submit" className="btnhass" value="Sign up" />
           <p className="social-texthass">Or Sign up with social platforms</p>
           <div className="social-mediahass">
             <a href="#" className="social-iconhass">
               <i className="fab fa-facebook-f"></i>
             </a>
             <a href="#" className="social-iconhass">
               <i className="fab fa-twitter"></i>
             </a>
             <a href="#" className="social-iconhass">
               <i className="fab fa-google"></i>
             </a>
             <a href="#" className="social-iconhass">
               <i className="fab fa-linkedin-in"></i>
             </a>
           </div>
         </form>
       </div>
     </div>

     <div className="panels-containerhass" >
       <div className="panelhass left-panelhass">
         <div className="contenthass">
           <h3>New here ?</h3>
           <p>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
             ex ratione. Aliquid!
           </p>
           <button className="btnhass transparenthass" id="sign-up-btn">
             Sign up
           </button>
         </div>
         <img src="./assets/signup/img/log.svg" className="imagehass" alt="" />
       </div>
       <div className="panelhass right-panelhass">
         <div className="contenthass">
           <h3>One of us ?</h3>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
             laboriosam ad deleniti.
           </p>
           <button className="btnhass transparenthass" id="sign-in-btn">
             Sign in
           </button>
         </div>
         <img src="./assets/signup/img/register.svg" className="imagehass" alt="" />
       </div>
     </div>
     
   </div>
           
           
           </div>
           <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="./assets/app.js"></script>
   <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
          </body>
          </html>
          
          
           
            
        )
        
    }
}export default SignUp;