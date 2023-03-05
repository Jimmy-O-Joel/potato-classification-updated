import { styled } from '@mui/system';
import { Box } from '@mui/material';


const ClassName = styled(Box)((props) => ({
    position: "absolute",
    boxSizing: "border-box",
    width: "134px",
    height: "42px",
    border: "1px solid #3AE004",
    borderRadius: "30px",
    fontFamily: 'Niramit',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "21px",
    display: "Flex",
    textAlign: "center",
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    background: props.activeBackground

  }));

export default ClassName;