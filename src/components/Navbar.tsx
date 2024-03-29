import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Button
              onClick={() => navigate("/movies")}
              sx={{ my: 2, color: "white", display: "block" }}>
              Movies
            </Button>
            <Button
              onClick={() => navigate("/usersTask")}
              sx={{ my: 2, color: "white", display: "block" }}>
              Users' tasks
            </Button>
            <Button
              onClick={() => navigate("/shopPage")}
              sx={{ my: 2, color: "white", display: "block" }}>
              Shop
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
