import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';



 function Popup() {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = () => {
    setAnchorEl(true)
};

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'center',
  }}
>
  <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
</Popover>
    </div>
  );
}
export default Popup;