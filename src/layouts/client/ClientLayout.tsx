import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import { login } from "../../helpers/function.helper";

export default function ClientLayout() {
   return (
      <>
         header
         <Outlet />
         <Button
            onClick={() => {
               login(`/admin`);
            }}
         >
            go admin
         </Button>
         footer
      </>
   );
}
