import { Box } from "@mui/system";
import ActivePage from "../ActivePage";
import FlexBetween from "./FlexBetween";
import { Typography } from "@mui/material";
import ButtonWrapper from "./ButtonWrapper";
import { useNavigate } from "react-router-dom";
import {useMediaQuery} from "@mui/material";

const Home = ()=>{
    
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate("/upload")
    }

    return(
        <Box className={isNonMobileScreens && "home"}  id="homebg"
        sx={{
            paddingBottom: "25px"
        }}
        >

            {
                isNonMobileScreens ? (
                    <>
                    
                    <FlexBetween>
        
                        <Box>
                        
                            <Typography
                                sx={{
                                    fontFamily: "pacifico",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "24px",
                                    lineHeight: "42px",
                                    textAlign: "center",
                                    color: "#3EFF00"
                                }}
                                
                            >
                                Potato
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "Niramit",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "24px",
                                    lineHeight: "31px",
                                    textAlign: "center",
                                    color: "#FFFFFF",
                                    marginLeft: "43px"
                                }}
                                
                            >
                                classifier
                            </Typography>
                        </Box>
                        <FlexBetween
                                sx={{
                                    paddingRight: "35px"
                                }}
                        >
                        
                            <ActivePage>
                                Home
                            </ActivePage>
                            <ActivePage>
                                About
                            </ActivePage>
                            <ActivePage>
                                FAQ
                            </ActivePage>
                        </FlexBetween>
        
                    </FlexBetween>
                    </>
                ) : (
                    <Box width="256px" m="0 auto" p="20px 0 0" >
                        
                            <Typography
                                sx={{
                                    fontFamily: "pacifico",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "24px",
                                    lineHeight: "42px",
                                    textAlign: "center",
                                    color: "#3EFF00"
                                }}
                                
                            >
                                Potato
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "Niramit",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "24px",
                                    lineHeight: "31px",
                                    textAlign: "center",
                                    color: "#FFFFFF",
                                    marginLeft: "43px"
                                }}
                                
                            >
                                classifier
                            </Typography>
                        </Box>
                )
            }

            

            {
                isNonMobileScreens ? (
                    <>
                        <Box className="plant" sx={{
                            width: "385px",
                            height: "373px",
                            margin: "8px auto 0px"
                        }}></Box>

                        <Typography
                            sx={{
                                fontFamily: "Niramit",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "26px",
                                color: "#FFFFFF",
                                textAlign: "center"
                            }}
                        >
                            Potato Disease Classification. Every Potato Farmer's Go To Website.
                        </Typography>
                        <Box
                            sx={{
                                width: "882px",
                                fontFamily: "Niramit",
                                fontWeight: "400",
                                fontSize: "15px",
                                lineHeight: "26px",
                                color: "#FFFFFF",
                                textAlign: "center",
                                margin: "0 auto"
            
            
                            }}
                        >
                        Are you a Potato farmer? Are you tired of seeing your labor go to waste due to potato diseases?
                        Don't worry. We got you covered. We help you classify your potatoes into healthy, early bligt,
                        Or late blight. Upload your potato leaf to our website and we'll do the magic.
                        </Box>
            
                        <Box width="421px" height="100px" display="flex"
                            sx={{
                                margin: "10px auto",
                                background: "rgba(251, 251, 251, 0.1)",
                                borderRadius: "40px",
                            }}
                            
                        >
                        <FlexBetween width="363px" height="70px" m="auto" p="0 6px"
                            sx={{
                                boxSizing: "border-box",
                                border: "3px dashed #48BD23",
                                borderRadius: "40px",
                            }}
                        >
                            <ButtonWrapper myBackgroundColor="#000000" myColor="#FFFFFF" myWidth="158px" myHeight="50px"
                                sx={{
                                    "&:hover":{
                                        background: "#191825"
                                    }
                                }}
                            >Add</ButtonWrapper>
                            <ButtonWrapper myBackgroundColor="#3AE004" myColor="#000000" myWidth="158px" myHeight="50px" onClick={handleClick}
                            sx={{
                                "&:hover":{
                                    background: "#38E54D"
                                }
                            }}
                            >Add</ButtonWrapper>
                        
                        </FlexBetween> </Box>
                    </>
                ) : (
                    <>
                    <Box  sx={{
                        width: "300px",
                        height: "373px",
                        margin: "8px auto 0px"
                    }}><img key="./assets/plant.png" src="./assets/plant.png" alt="img"style={{ width: 300, height: 373 }}/></Box>
                    <Typography
                            sx={{
                                padding: "0 10px",
                                fontFamily: "Niramit",
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "26px",
                                color: "#FFFFFF",
                                textAlign: "center"
                            }}
                        >
                            Potato Disease Classification. Every Potato Farmer's Go To Website.
                        </Typography>
                        <Box
                            sx={{
                                width: "360px",
                                fontFamily: "Niramit",
                                fontWeight: "400",
                                fontSize: "15px",
                                lineHeight: "26px",
                                color: "#FFFFFF",
                                textAlign: "center",
                                margin: "0 auto"
            
            
                            }}
                        >
                        Are you a Potato farmer? Are you tired of seeing your labor go to waste due to potato diseases?
                        Don't worry. We got you covered. We help you classify your potatoes into healthy, early bligt,
                        Or late blight. Upload your potato leaf to our website and we'll do the magic.
                        </Box>
            
                        <Box width="300px" height="70px" display="flex"
                            sx={{
                                margin: "10px auto",
                                background: "rgba(251, 251, 251, 0.1)",
                                borderRadius: "40px"
                            }}
                            
                        >
                        <FlexBetween width="270px" height="50px" m="auto" p="0 6px"
                            sx={{
                                boxSizing: "border-box",
                                border: "3px dashed #48BD23",
                                borderRadius: "40px"
                            }}
                        >
                            <ButtonWrapper myBackgroundColor="#000000" myColor="#FFFFFF" myWidth="118px"
                                sx={{
                                    "&:hover":{
                                        background: "#191825"
                                    }
                                }}
                            >Add</ButtonWrapper>
                            <ButtonWrapper myBackgroundColor="#3AE004" myColor="#000000" myWidth="118px" onClick={handleClick}
                            sx={{
                                "&:hover":{
                                    background: "#38E54D"
                                }
                            }}
                            >Add</ButtonWrapper>
                        
                         </FlexBetween> 
                        </Box> </>
                )
            }
            
            
        </Box>
    )

}

export default Home;