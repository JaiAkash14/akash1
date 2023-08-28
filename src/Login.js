import akash from './one.1.jpg';
import jai from './three.3.jpg';
import mutton from './three.3.jpg';
import TextField from '@mui/material/TextField';
import './App.css';
import hari from './paris.png';
import fish from './Group 15.png';
import dick from './gig.png';
import eat from './apple.png';
import { Visibility } from '@mui/icons-material';
import cat from './tap.png';
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();

    return (
        <div style={{ flexDirection: "row", display: "flex" }}>
            <div style={{ width: "50%", textAlign: "center", marginTop: "100px", flexDirection: "column", display: "flex", alignItems: "center" }}>
                <h1>Sign In</h1>

                <TextField id="standard-basic" label="E-mail" variant="standard" style={{ width: "50%", marginTop: "24px" }} />
                <div style={{ width: "50%", position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
                    <TextField id="standard-basic" label="Password" variant="standard" style={{ width: "100%", marginTop: "24px" }} type='password' />
                    <Visibility style={{ position: 'absolute', right: 4, marginTop: 26 }} />
                </div>
                <button onClick={() => {
                    navigate("/home")
                }} style={{ marginTop: "64px", width: "300px", height: "30px", backgroundColor: "black", color: "white", borderRadius: "4px", border: "2px" }}>SignIn</button>
                <div style={{ flexDirection: "row", display: "flex" }}>
                    <p style={{ paddingRight: "16px", marginTop: "32px" }}>doesn’t have an account ?</p>
                    <p  onClick={() =>{
                        navigate("/register")
                    }}style={{ color: "#6063EA", textDecorationLine: 'underline', marginTop: "32px" }}>Create account</p>
                </div>
                <div style={{ flexDirection: "row", display: "flex", height: "1px", alignItems: "center", justifyContent: "center", marginTop: "30px" }}>
                    <div style={{ border: "1px solid #C1C1C1", width: "45px", borderRadius: 4, marginRight: "5px" }}></div>
                    <p style={{ color: "#656565", paddingBottom: "6px" }}>Or Continue with</p>
                    <div style={{ border: "1px solid #C1C1C1", width: "45px", borderRadius: 4, marginLeft: "5px" }}></div>

                </div>


                <div style={{ flexDirection: "row", display: "flex", marginTop: "44px" }}>
                    <div style={{ border: "3px solid #EEEEEE", borderRadius: "12px", padding: "4px", alignItems: "center", justifyContent: "center" }}>
                        <img src={dick} style={{ width: "32px", height: "32px" }}></img></div>
                    <div style={{ border: "3px solid #EEEEEE", borderRadius: "12px", padding: "4px", alignItems: "center", justifyContent: "center", marginLeft: "46px", marginRight: "46px" }}>
                        <img src={eat} style={{ width: "32px", height: "32px" }}></img></div>
                    <div style={{ border: "3px solid #EEEEEE", borderRadius: "12px", padding: "4px", alignItems: "center", justifyContent: "center" }}>
                        <img src={cat} style={{ width: "32px", height: "32px" }}></img></div>


                </div>


            </div>
            <div style={{
                width: "50%", backgroundImage: "url(/Rectangle.png)", height: "100vh", backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', alignItems: "center", display: 'flex', flexDirection: 'column'
            }}>
                <img src={hari} style={{ height: "82px", width: "212px", objectFit: 'contain', marginTop: "150px" }} ></img>
                <img src={fish} style={{ objectFit: "contain", width: "500px", marginTop: "-80px" }}></img>

            </div>


        </div>


    );
}

export default Login;
