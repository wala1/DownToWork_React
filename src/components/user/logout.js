import { GoogleLogout } from 'react-google-login';

const clientId = "1075754340245-9uddfgn78s5sult6mmcfuvugr4s4v7fh.apps.googleusercontent.com";


function Logout(){
    const onSuccess = (res) => {
        console.log("Log out successfull!");
    }
    return(
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;