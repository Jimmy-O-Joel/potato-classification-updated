import { styled } from '@mui/system';
import { Button } from '@mui/material';


const ButtonWrapper = styled(Button)((props) => ({
    width: "158px",
    height: "50px",
    borderRadius: "30px",
    background: props.myBackgroundColor,
    color: props.myColor
  }));

export default ButtonWrapper;