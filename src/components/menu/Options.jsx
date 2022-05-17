import * as React from "react";
// import IconButton from "@mui/material/IconButton";
import { Menu, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from '@mui/icons-material/Delete';

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MoreVertIcon
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
        sx={{ borderRadius: 5 }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", justifyContent: "start", alignItems: "center"}}
        >
          {" "}
          <DeleteIcon fontSize="small" color={"#ff0000"} sx={{color:"red"}} /> 
          <Typography variant="p" component="p" paddingLeft={1}>Delete</Typography>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", justifyContent: "start", alignItems: "center"}}
        >
          {" "}
          <CancelIcon fontSize="small" />
          <Typography variant="p" component="p" paddingLeft={1}>Cancel</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
