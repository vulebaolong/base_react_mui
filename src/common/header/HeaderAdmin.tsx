import { Avatar, Box, Drawer, IconButton, Stack } from "@mui/material";
import ButtonToggleTheme from "../button/ButtonToggleTheme";
import { useState } from "react";
import DragHandleRoundedIcon from "@mui/icons-material/DragHandleRounded";
import NavAdmin from "../nav/NavAdmin";
import useResponsive from "../../hooks/useResponsive";
import { HEIGHT_HEADER, WIDTH_NAV } from "../constants/app.constant";
import Logo from "../logo/Logo";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function HeaderAdmin() {
   const [open, setOpen] = useState(false);
   const isMobile = useResponsive("down", "lg");

   const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
   };
   return (
      <>
         <Box
            sx={{
               display: `flex`,
               alignItems: `center`,
               justifyContent: `space-between`,
               padding: `8px 16px`,
               height: HEIGHT_HEADER,
               position: `fixed`,
               zIndex: `2`,
               top: `0`,
               right: `0`,
               width: {
                  xs: `100vw`,
                  lg: `calc(100vw - ${WIDTH_NAV})`,
               },
               borderStyle: `solid`,
               borderColor: (theme) =>
                  theme.palette.mode === `dark` ? `rgba(255,225,225,0.3)` : `rgba(0,0,0,0.3)`,
               borderWidth: `0px 0px thin 0px`,
               backdropFilter: `blur(10px)`,
            }}
            component={`header`}
         >
            {/* LEFT */}
            {isMobile ? (
               <IconButton
                  sx={{
                     display: `inline-flex`,
                     alignItems: `center`,
                     justifyContent: `center`,
                     boxSizing: `border-box`,
                  }}
                  onClick={toggleDrawer(true)}
               >
                  <DragHandleRoundedIcon />
               </IconButton>
            ) : (
               <Box />
            )}

            {/* CENTER */}
            {isMobile ? <Logo /> : <Box />}

            {/* RIGHT */}
            <Stack sx={{ alignItems: `center`, gap: `10px` }}>
               <ButtonToggleTheme />
               <Avatar></Avatar>
            </Stack>
         </Box>
         <Drawer open={open} onClose={toggleDrawer(false)} sx={{ backdropFilter: `blur(5px)` }}>
            <NavAdmin />
         </Drawer>
      </>
   );
}
