import { ReactNode } from "react";
import useResponsive from "../../hooks/useResponsive";
import { Box } from "@mui/material";
import NavAdmin from "../../common/nav/NavAdmin";
import { HEIGHT_HEADER } from "../../common/constants/app.constant";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
   const isMobile = useResponsive("down", "lg");

   return (
      <Box
         sx={{
            width: `100vw`,
            height: `100vh`,
            position: `relative`,
            display: `grid`,
            gridTemplateColumns: {
               xs: `1fr`,
               lg: `auto 1fr`,
            },
            gridTemplateRows: `1fr`,
         }}
      >
         {!isMobile && <NavAdmin />}

         <Box
            sx={{
               pt: `calc(${HEIGHT_HEADER} + 20px)`,
               px: `20px`,
               pb: `20px`,
               width: `100%`,
               height: `100%`,
               overflowY: `auto`,
            }}
         >
            <Outlet />
         </Box>

         <HeaderAdmin />
      </Box>
   );
}
