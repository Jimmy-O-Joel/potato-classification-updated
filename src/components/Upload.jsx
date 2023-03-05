import { Box } from "@mui/system";
import WestIcon from '@mui/icons-material/West';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProductConsumer } from "../context";
import { CircularProgress} from "@mui/material";
import {useMediaQuery} from "@mui/material";

const Upload = ()=>{

    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const navigate = useNavigate()
        
    return(
        <ProductConsumer>

            {(value)=>{

                const {image, getInputProps, getRootProps, paths, isLoading, data, clearData} = value;

                const handleClick = ()=>{
                    navigate("/")
                    clearData()
                }

                if (data) {
                    navigate("/predict")
                  }

                    return <Box className={isNonMobileScreens && "upload"} id="uploadbg"
                    sx={{
                        paddingBottom: "75px"
                    }}
                    >

                    {
                        isNonMobileScreens ? (


                            <Box width="64px" height="64px" m="0 auto" onClick={handleClick}
                                sx={{
                                    background: "rgba(217, 217, 217, 0.7)",
                                    display: "flex",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "50%",
                                    position: "absolute",
                                    left: "112px",
                                    top: "99px",
                                    "&:hover": {
                                        cursor: "pointer"
                                    }
            
                                }}
                            >
                                <WestIcon sx={{width: "120px", height: "30px"}}/>
                            </Box>
                        ) : (
                            <Box m="0 auto" width="64px" height="64px" p="20px 0">
                            <Box width="64px" height="64px" onClick={handleClick}
                            sx={{
                                background: "rgba(217, 217, 217, 0.7)",
                                display: "flex",
                                textAlign: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "50%",
                                "&:hover": {
                                    cursor: "pointer"
                                }
        
                            }}
                        >
                            <WestIcon sx={{width: "120px", height: "30px"}}/>
                        </Box> </Box>

                        )
                    }

                    {

                        isNonMobileScreens ? (
                            <>
                            <Box m="0 auto" width="866px" height="512px"
                            sx={{
                                boxSizing: "border-box",
                                background: "rgba(255, 255, 255, 0.2)",
                                border: "3px solid #FFFFFF",
                                borderRadius: "20px",
                                display: "flex",
                                alignItems: "center",
                                textAlign:"center",
                                justifyContent: "center",
                                position: "relative"
                            }}
                        >
                            <Typography sx={{
                                position: "absolute",
                                fontFamily: "Niramit",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "32px",
                                lineHeight: "43px",
                                color: "#FFFFFF",
                                top: "30px"
                            }}>
                                {isLoading? "Processing Image" : "Upload Potato Leaf"}
                            </Typography>
                            
                            {!image && <><Box width="464px" height="288px"
                                sx={{
                                    background: "rgba(255, 255, 255, 0.6)",
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign:"center",
                                    justifyContent: "center"
                                }} {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                <AddPhotoAlternateOutlinedIcon sx={{
                                    width: "186px",
                                    height: "160px",
                                    color: "#383636"
                                }}/>
                            
                            </Box>
        
                            <Typography
                            sx={{
                                position: "absolute",
                                fontFamily: "Niramit",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "24px",
                                lineHeight: "31px",
                                color: "#FFFFFF",
                                bottom: "40px"
                            }}                
                            >
                                Upload Image or <Typography
                                    sx={{
                                        display: "inline",
                                        fontFamily: "Niramit",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "24px",
                                        lineHeight: "31px",
                                        color: "#48BD23"
                                    }}
                                >browse</Typography>
                            </Typography>
                            <Typography
                                sx={{
                                    position: "absolute",
                                    fontFamily: "Niramit",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    lineHeight: "21px",
                                    color: "#FFFFFF",
                                    bottom: "18px"
                                }}
                            >
                                Max. file size 24MB
                            </Typography></>}
                            {paths.map(path => 
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        textAlign:"center",
                                        justifyContent: "center"
                                    }} 
                                >
                        
                                <img key={path} src={path} alt="img"style={{ width: 464, height: 288 }}/>
                                </Box>
                            )}

                            {isLoading && <CircularProgress color="secondary" 
                                sx={{
                                    position: "absolute",
                                    left: "423px",
                                    bottom: "20px",
                                    width: "40px",
                                    height: "40px",
                                    color: "#3EFF00" 

                                }}
                            />}
                                                        
                            
                        </Box>
                            </>
                        ) : (
                            <Box m="0 auto" width="300px" height="400px"
                            sx={{
                                boxSizing: "border-box",
                                background: "rgba(255, 255, 255, 0.2)",
                                border: "3px solid #FFFFFF",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                textAlign:"center",
                                justifyContent: "center",
                                position: "relative"
                            }}
                        >
                            <Typography sx={{
                                position: "absolute",
                                fontFamily: "Niramit",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "32px",
                                lineHeight: "43px",
                                color: "#FFFFFF",
                                top: "10px"
                            }}>
                                {isLoading? "Processing Image" : "Upload Potato Leaf"}
                            </Typography>
                            
                            {!image && <><Box width="256px" height="256px"
                                sx={{
                                    background: "rgba(255, 255, 255, 0.6)",
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign:"center",
                                    justifyContent: "center"
                                }} {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                <AddPhotoAlternateOutlinedIcon sx={{
                                    width: "160px",
                                    height: "160px",
                                    color: "#383636"
                                }}/>
                            
                            </Box>
        
                            <Typography
                            sx={{
                                position: "absolute",
                                fontFamily: "Niramit",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "24px",
                                lineHeight: "31px",
                                color: "#FFFFFF",
                                bottom: "40px"
                            }}                
                            >
                                Upload Image or <Typography
                                    sx={{
                                        display: "inline",
                                        fontFamily: "Niramit",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        fontSize: "24px",
                                        lineHeight: "31px",
                                        color: "#48BD23"
                                    }}
                                >browse</Typography>
                            </Typography>
                            <Typography
                                sx={{
                                    position: "absolute",
                                    fontFamily: "Niramit",
                                    fontStyle: "normal",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    lineHeight: "21px",
                                    color: "#FFFFFF",
                                    bottom: "18px"
                                }}
                            >
                                Max. file size 24MB
                            </Typography></>}
                            {paths.map(path => 
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        textAlign:"center",
                                        justifyContent: "center"
                                    }} 
                                >
                        
                                <img key={path} src={path} alt="img"style={{ width: 256, height: 256 }}/>
                                </Box>
                            )}

                            {isLoading && <CircularProgress color="secondary" 
                                sx={{
                                    position: "absolute",
                                    left: "140px",
                                    bottom: "10px",
                                    width: "40px",
                                    height: "40px",
                                    color: "#3EFF00" 

                                }}
                            />}
                                                        
                            
                        </Box>
                        )
                    }
                    
                        
                    </Box>
            }}
        
        </ProductConsumer>
    )
}

export default Upload;