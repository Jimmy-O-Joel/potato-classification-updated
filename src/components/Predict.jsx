import FlexBetween from "./FlexBetween";
import { Typography } from "@mui/material";
import {Box, Button} from "@mui/material";
import { styled } from '@mui/system';
import ClassName from "./ClassName";
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from "react-router-dom";
import { ProductConsumer } from "../context";
import {useMediaQuery} from "@mui/material";

const Predict = ()=>{

    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const navigate = useNavigate()

    return(
        <ProductConsumer>

            {(value)=>{

                const {image, paths, confidence, data, clearData} = value;

                const isEarlyBlight = data.class === "Early Blight"
                const isLateBlight = data.class === "Late Blight"
                const isHealthy = data.class === "Healthy"

                const handleClick = ()=>{
                    navigate("/upload")
                    clearData()
                }


                return<Box
                    className={isNonMobileScreens && "predict"}
                    sx={{
                        background: "#000000",
                        paddingBottom: "75px"
                    }}
                >

                {

                    isNonMobileScreens ? (

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
                        
                            <Header>
                                Home
                            </Header>
                            <Header>
                                About
                            </Header>
                            <Header>
                                FAQ
                            </Header>
                        </FlexBetween>
        
                    </FlexBetween>
                    ) : (

                        <Box width="256px" m="0 auto" p="20px 0 0">
                        
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
                    isNonMobileScreens ?
                    (

                        <Button onClick={handleClick}
                            sx={{
                                boxSizing: "border-box",
                                position:  "absolute",
                                width: "263px",
                                height: "61px",
                                left: "966px",
                                top: "125px",
                                border: "3px solid #205A0D",
                                borderRadius: "20px",
                                color: "#FBFBFB",
                                "&:hover": {
                                    borderColor: "#3EFF00"
                                }
                            }}
                        >
                            Use another image
                        </Button>   
                    ) : (


                        <Box m="50px auto 0" sx={{
                            width: "263px",
                            height: "61px",
                        }}>
                        
                            <Button onClick={handleClick}
                                sx={{
                                    boxSizing: "border-box",
                                    width: "263px",
                                    height: "61px",
                                    border: "3px solid #205A0D",
                                    borderRadius: "20px",
                                    color: "#FBFBFB",
                                    "&:hover": {
                                        borderColor: "#3EFF00"
                                    }
                                }}
                            >
                                Use another image
                            </Button>
                        </Box>
                    )
                }

                {
                    isNonMobileScreens ?
                    (<>

                        <ClassName 
                            activeBackground={isHealthy && "#3AE004"}
                            sx={{
                                left: "57px",
                                top: "239px"
                            }}
                        >Healthy</ClassName>
            
                        <ClassName 
                            activeBackground={isLateBlight && "#3AE004"}
                            sx={{
                                left: "205px",
                                top: "239px"
                            }}
                        >Late blight</ClassName>
            
                        <ClassName 
                            activeBackground={isEarlyBlight && "#3AE004"}
                            sx={{
                                left: "353px",
                                top: "239px",
                            }}
                        >Early blight</ClassName>
                    </>
                    ):
                    (<Box m="50px auto 0" width="100px"
                        sx={{
                            position: "relative",
                            background: "red"

                        }}
                    >   
                        {isHealthy && <ClassName 
                            activeBackground={isHealthy && "#3AE004"}
                        >Healthy</ClassName>}
            
                        {isLateBlight && <ClassName 
                            activeBackground={isLateBlight && "#3AE004"}
                        >Late blight</ClassName>}
            
                        {isEarlyBlight && <ClassName 
                            activeBackground={isEarlyBlight && "#3AE004"}
                        >Early blight</ClassName>}
                    
                    </Box>)
                }

                {
                    isNonMobileScreens &&
                        <Box
                            sx={{
                                boxSizing: "border-box",
                                position: "absolute",
                                width: "559px",
                                height: "384px",
                                left: "50px",
                                top: "305px",
                                background: "rgba(255, 255, 255, 0.2)",
                                border: "3px solid #3AE004",
                                borderRadius: "20px"
                            }}
                        >        
                        </Box>              
                }
                       

                {paths.map(path => {

                   return (isNonMobileScreens ? <Box className={!image && "leaf"}
                    sx={{
                        width: "512px",
                        height: "342px",
                        left: "74px",
                        top: "326px",
                        position: "absolute",
                    }}
                    >
                        <img key={path} src={path} alt="img"style={{ width: 512, height: 342 }}/>
                    </Box> : 
                    
                    <Box
                        sx={{
                            margin: "150px auto 0",
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                            alignItems: "center",
                            boxSizing: "border-box",
                            width: "300px",
                            height: "300px",
                            background: "rgba(255, 255, 255, 0.2)",
                            border: "3px solid #3AE004",
                            borderRadius: "20px"
                        }}
                    >
                        <Box className={!image && "leaf"}
                        sx={{
                            width: "256px",
                            height: "256px",
                        }}
                        >
                            <img key={path} src={path} alt="img"style={{ width: 256, height: 256 }}/>
                        </Box>
                    </Box>
                    )
                }                    
                )}

                {

                    isNonMobileScreens ? 
                    (                        
                        <Typography
                            sx={{
                                position: "absolute",
                                left: "712px",
                                top: "233px",
                                fontFamily: "Niramit",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "36px",
                                lineHeight: "48px",
                                textAlign: "center",
                                color: "#3EFF00"
                            }}
                        >
                            Analysis
                        </Typography>
                        ) : (
                            <Typography
                            sx={{
                                margin: "20px auto 0",
                                width: "100px",
                                fontFamily: "Niramit",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "36px",
                                lineHeight: "48px",
                                textAlign: "center",
                                color: "#3EFF00"
                            }}
                        >
                            Analysis
                        </Typography>
                        )
                }

                {
                    isNonMobileScreens ? 
                    (<><Box
                        sx={{
                            position: "absolute",
                            width: "280px",
                            height: "280px",
                            left: "655px",
                            top: "300px",
                            background: "conic-gradient(from 198.9deg at 54.49% 32%, #3AE004 0deg, #EDFCE9 6.6deg, #FFFFFF 39.6deg, #BDF5AB 40.62deg, #3AE004 360deg)",
                            transform: "rotate(165.99deg)",
                            borderRadius: "50%"
        
                        }}
                    >
                    
                    </Box>
        
                    <Typography
                        sx={{
                            position: "absolute",
                            left: "772px",
                            top: "416px",
                            fontFamily: 'Playfair Display',
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "40px",
                            lineHeight: "53px",
                            textAlign: "center",
                            color: "#000000"
                            
                        }}
                    >{confidence}%
                    </Typography></>) : (
                        <Box
                        sx={{
                            margin: "0 auto",
                            width: "280px",
                            height: "280px",
                            background: "conic-gradient(from 198.9deg at 54.49% 32%, #3AE004 0deg, #EDFCE9 6.6deg, #FFFFFF 39.6deg, #BDF5AB 40.62deg, #3AE004 360deg)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            alignContent: "center",
                            justifyContent: "center",
                            fontFamily: 'Niramit',
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "40px",
                            lineHeight: "53px",
                            color: "#000000"        
                        }}
                    >
                        {confidence}%
                     
                    </Box>

                    )

                }

            {
                isNonMobileScreens ? (
                    <>
                    <Box
                        sx={{
                            boxSizing: "border-box",
                            position: "absolute",
                            width: "247px",
                            height: "72px",
                            left: "694px",
                            top: "620px",
                            border: "2px solid #3AE004",
                            borderRadius: "40px"
                        }}
                    >
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            width: "40px",
                            height: "40px",
                            left: "707px",
                            top: "634px",
                            background: "rgba(84, 180, 53, 0.6)",
                            borderRadius: "50%",
                            display: "flex",
                            textAlign: "center",
                            alignItems: "center"
        
                        }}
                    >
                        <CheckIcon sx={{
                            color: "#FFFFFF",
                            width: "40px",
                            height: "30px"
                        }}/>        
                    </Box>
        
                    <Typography
                            sx={{
                                position: "absolute",
                                left: "748px",
                                top: "635px",
                                fontFamily: "Niramit",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "24px",
                                lineHeight: "31px",
                                textAlign: "center",
                                color: "#ABF294"
                            }}
                        >
                            {`${confidence}% ${data.class}`}       
                        </Typography></>
                ) : (
                    <Box
                        sx={{
                            position: "relative",
                            margin: "20px auto",
                            boxSizing: "border-box",
                            width: "247px",
                            height: "72px",
                            border: "2px solid #3AE004",
                            borderRadius: "40px"
                        }}
                    >
                    <Box
                    sx={{
                        position: "relative",
                        top: "12px",
                        left: "12px",
                        width: "40px",
                        height: "40px",
                        background: "rgba(84, 180, 53, 0.6)",
                        borderRadius: "50%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center"
    
                        }}
                    >
                        <CheckIcon sx={{
                            color: "#FFFFFF",
                            width: "40px",
                            height: "30px"
                        }}/>        
                    </Box>
                    <Typography
                            sx={{
                                position: "absolute",
                                left: "60px",
                                top: "14px",
                                fontFamily: "Niramit",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "24px",
                                lineHeight: "31px",
                                textAlign: "center",
                                color: "#ABF294"
                            }}
                        >
                            {`${confidence}% ${data.class}`}       
                        </Typography>
                    </Box>
                )
            } 
        
                </Box>
            }}
        
        </ProductConsumer>
    )

}

const Header = styled(Typography)({
    fontFamily: "Niramit",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "21px",
    textAlign: "center",
    marginLeft: "50px",
    color: "#3EFF00"


})



export default Predict;