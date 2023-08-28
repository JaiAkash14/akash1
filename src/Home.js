import sathya from './Ellipse 13.png';
import { Button } from '@mui/material';
import frank from "./Rectangle1.png";
import ravi from "./verify (1).png";
import you from "./Vector4.png";
import victor from "./image8.png";
import dash from "./PayFlex.png";
import resort from "./money.png";
import diamond from "./chocolate.png";
import dosa from "./burger.png";
import ring from "./flower.png";
import queen from "./king.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FollowTheSignsRounded } from '@mui/icons-material';
import date from "./date.png";
import history from "./history.png";
import point from "./point.png";
import signin from "./signin.png";
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate()
    return (
        <div style={{ backgroundColor: "black", height: "100vh", backgroundImage: "url(/Rectangle6.png)", backgroundRepeat: "no-repeat", color: 'white', flexDirection: "row", display: "flex" }}>
            <div style={{ width: "20%", alignItems: "center", backgroundColor: '#252525', display: 'flex', flexDirection: 'column', height: "741px", width: "235px", borderRadius: "20px", marginLeft: "25px", marginTop: "24px",position:"relative" }}>
                <div style={{ display: "flex", alignItems: "center", width: "70%", marginTop: "100px", }}>

                    <img src={queen} style={{ justifyContent: "flex-start", display: "flex" }}></img>
                    <p style={{ marginLeft: "20px" }}>Dashboard</p>
                </div>

                <div style={{ width: "70%", height: 1, backgroundColor: "#333333", borderRadius: "1px" }} />

                <div style={{ display: "flex", alignItems: "center", width: '70%' }}>
                    <img src={date} style={{ justifyContent: "flex-start", height: 24, width: 24 }}></img>
                    <p style={{ marginLeft: "20px" }}>History</p>
                </div>
                <div style={{ width: "70%", height: 1, backgroundColor: "#333333", borderRadius: "1px" }} />

                <div style={{ display: "flex", alignItems: "center", width: "70%" }}>
                    <img src={history} style={{ justifyContent: "flex-start", height: 24, width: 24 }}></img>
                    <p style={{ marginLeft: 20 }}>Wallet</p>
                </div>
                <div style={{ width: "70%", height: 1, backgroundColor: "#333333", borderRadius: "1px" }} />

                <div style={{ display: "flex", alignItems: "center", width: "70%" }}>
                    <img src={point} style={{ justifyContent: "flex-start", height: 24, width: 24 }}></img>
                    <p style={{ marginLeft: 20 }}>Report</p>
                </div>
                <div style={{position:"absolute", bottom:"40px", alignItems: "center", display: "flex"}}>
                <img src={signin} style={{ justifyContent: "flex-start", height: 24, width: 24 }}></img>
                    <p style={{ marginLeft: 16 }}>signout</p>
                </div>







            </div>
            <div style={{ width: "90%", justifyContent: "center", alignItems: "center", flexDirection: "column", display: "flex", alignSelf: 'flex-start', marginTop: "20px" }}>
                
                <div style={{ flexDirection: "row", display: "flex" }}>
                    <img src={sathya} style={{ objectFit: "contain" }}></img>
                    <h1 style={{ marginLeft: "20px", }}>Welcome back Akash !</h1>
                    <Button style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", height: "40px", width: "120px", borderRadius: "8px", marginRight: "22px", marginLeft: "400px" }}>Eligibility</Button>
                    <Button onClick={()=>{
                    navigate("/")}} style={{ backgroundColor: "#6063EA", color: "#FFFFFF", height: "40px", width: "120px", borderRadius: "8px" }}> Sign in</Button>
                </div>
                <div style={{
                    flexDirection: "row", display: "flex", backgroundImage: `url(${frank})`, height: '150px', width: '100%',
                    backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "346px", width: "90%", marginTop: "74px"
                }}>
                    <div style={{ width: '50%' }}>

                        <div style={{ flexDirection: "row", display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", marginTop: "20px" }}>
                            <h1 style={{ marginLeft: "50px", }}>Dashboard</h1>
                            <Button style={{ color: "white", border: "1px solid white ", height: "45px", width: "120px" }}> June</Button>



                        </div>

                        <p style={{ textAlign: "center", marginRight: "54px" }}>You can access your pay for the next month </p>
                        <div style={{ flexDirection: "row", display: "flex", alignItems: "center", marginLeft: "54px" }}>
                            <p style={{ paddingRight: "50px" }}>Repayment status </p>
                            <img src={ravi} style={{ height: "13.78px", width: "24px", objectFit: "contain" }}></img>
                            <p style={{ color: "#47ED9D" }}>Up to date</p>
                        </div>
                        <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-evenly", marginLeft: 30 }}>
                            <Button style={{ backgroundColor: "white", color: "black", marginTop: "56px", marginRight: "20px", borderRadius: "10px" }}> Access Your Pay</Button>
                            <div style={{ flexDirection: "row", display: "flex", }}>
                                <div style={{ height: "50px", width: "50px", borderRadius: "70px", backgroundColor: "white", justifyContent: "center", alignItems: 'center', display: "flex", marginRight: "20px", marginTop: "56px" }}>
                                    {/* TODO FONTAWESOME EXAMPLE */}
                                    {/* <FontAwesomeIcon icon={faPlay} color='black'/> */}
                                    <img src={you} style={{ height: "19px", width: "16px" }}></img>
                                </div><p style={{ marginRight: "42px", marginTop: "72px", textDecorationLine: "underline" }}>See how it works</p>
                            </div>



                        </div>



                    </div>

                    <div style={{ width: "30%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                        <img src={victor} style={{ height: "316px", width: "221px" }}></img>


                    </div>

                    <div style={{ width: '30%', position: "relative", justifyContent: 'flex-end', display: 'flex', padding: "10px" }}>
                        <img src={dash} style={{}}></img>
                        <img src={resort} style={{ marginRight: 23 }}></img>

                    </div>



                </div>
                <div style={{ flexDirection: "row", display: "flex", alignSelf: "flex-end", marginRight: "82px", }} >
                    <img src={diamond} style={{ marginTop: "10px", height: "45px", width: "111px" }}></img>
                    <p style={{ marginTop: "30px", marginLeft: "6px" }}>20K+ Users</p>

                </div>
                <div style={{ width: "90%", flexDirection: "row", display: "flex", justifyContent: "space-between" }} >
                    <h2 style={{ textAlign: 'left', textDecorationLine: "underline" }}>Eligibility <br />status</h2>
                    <div style={{ height: "172px", width: "312px", backgroundColor: "#2B2B33", borderRadius: "20px" }}>
                        <p style={{ textAlign: "center" }}>Eligible Pay</p>
                        <p style={{ textAlign: "center" }}>50,000</p>
                        <p style={{ textAlign: "center" }}>Eligibility is based on your <br />current salary </p>
                    </div>
                    <div style={{ height: "172px", width: "462px", backgroundColor: "#5F50D4", borderRadius: "20px", display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
                        <div style={{ flexDirection: "row", display: "flex", justifyContent: 'space-between' }}>
                            <p style={{ marginLeft: "20px" }}> Quick access</p>
                            <p style={{ marginRight: '20px' }}>Wallet details</p>

                        </div>
                        <h1 style={{ height: "35px", width: "110px", marginLeft: "20px" }}>20000</h1>
                        <div style={{ flexDirection: "row", display: "flex", marginBottom: 0, justifyContent: 'space-between' }}>
                            <p style={{ marginLeft: "20px" }}>Make Upi payments using <br />Playfelx wallet</p>
                            <Button style={{ backgroundColor: "#252525", height: "45px", width: "120px", color: "white", borderRadius: "8px", marginRight: 8 }}>Add more</Button>
                        </div>

                    </div>

                </div>


            </div>


        </div>
    )
}

export default Home