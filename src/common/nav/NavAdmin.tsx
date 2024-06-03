import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import { HEIGHT_HEADER, WIDTH_NAV } from "../constants/app.constant";
import Logo from "../logo/Logo";
import { useLocation } from "react-router-dom";
import { ROUTER_ADMIN } from "../constants/router.constant";
import { LIST_NAV } from "../constants/nav.constant";
import { Fragment } from "react/jsx-runtime";
import ListItemNav from "./ListItemNav";
import rootRouter from "../../routes/rootRouter";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { effectText } from "../../helpers/function.helper";

export default function NavAdmin() {
   const { pathname } = useLocation();
   const handleLogout = async () => {
      // const result = await logoutAction();
      // if (result.status) {
      //    router.push(ROUTER.ADMIN.AUTH.LOGIN);
      // } else {
      //    toast.error(result.message);
      // }
   };
   return (
      <Stack
         sx={{
            width: WIDTH_NAV,
            flexDirection: `column`,
            height: `100vh`,
            borderStyle: `solid`,
            borderColor: (theme) =>
               theme.palette.mode === `dark` ? `rgba(255,225,225,0.3)` : `rgba(0,0,0,0.3)`,
            borderWidth: `0px thin 0px 0px`,
         }}
      >
         <Stack
            sx={{
               height: HEIGHT_HEADER,
               width: `100%`,
               alignItems: `center`,
               justifyContent: `center`,
               borderStyle: `solid`,
               borderColor: (theme) =>
                  theme.palette.mode === `dark` ? `rgba(255,225,225,0.3)` : `rgba(0,0,0,0.3)`,
               borderWidth: `0px 0px thin`,
            }}
         >
            <Logo />
         </Stack>

         {/* LIST NAV */}
         <List sx={{ overflowY: `auto`, flex: `1` }}>
            <ListItemButton
               selected={pathname === ROUTER_ADMIN.HOME()}
               onClick={() => {
                  rootRouter.navigate(ROUTER_ADMIN.HOME());
               }}
            >
               <ListItemIcon>
                  <GridViewRoundedIcon />
               </ListItemIcon>
               <ListItemText primary={effectText(`Dashboard`)} />
            </ListItemButton>
            {LIST_NAV.map((item, index) => {
               return (
                  <Fragment key={index}>
                     <ListItemNav item={item} pl={2} />
                  </Fragment>
               );
            })}
         </List>

         {/* FOOTER NAV */}
         <List sx={{ mt: `auto`, flexShrink: `0` }}>
            <Divider />
            <ListItemButton onClick={handleLogout}>
               <ListItemIcon>
                  <LogoutRoundedIcon />
               </ListItemIcon>
               <ListItemText primary={effectText(`Logout`)} />
            </ListItemButton>
         </List>
      </Stack>
   );
}
