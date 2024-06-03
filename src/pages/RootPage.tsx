import { Box, BoxProps, CircularProgress } from "@mui/material";
import { ReactNode, forwardRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useParams } from "react-router-dom";
import PleaseLogin from "../common/notifications/PleaseLogin";
import { useAppDispatch } from "../store/store";

interface PageProps extends BoxProps {
   children: ReactNode;
   title?: string;
   meta?: ReactNode;
   protect?: boolean;
}

const RootPage = forwardRef<HTMLDivElement, PageProps>(
   ({ children, title = "", meta, protect = false, ...other }, ref) => {
      const { id } = useParams();
      const location = useLocation();
      const [isLogin, setIsLogin] = useState(false);
      const [isLoading, setIsLoading] = useState(true);
      const dispatch = useAppDispatch();

      useEffect(() => {
         if (protect) {
            setIsLoading(true);
         }
      }, [location]);

      const rederContent = () => {

         // const isNavigateIfLogin = () => {
         //    if ([ROUTER_ADMIN.LOGIN].includes(location.pathname.slice(1))) return true;

         //    return false;
         // };


         // if (isNavigateIfLogin()) {
         //    if (getAccessToken()) {
         //       return <Navigate to={`/${ROUTES.MIRACLE_SEEDS}`} replace />;
         //    }
         // }

         if (!protect) return children;

         if (isLoading)
            return (
               <Box sx={{ width: "fit-content", margin: "20% auto 0" }}>
                  <CircularProgress size={50} sx={{ color: "var(--color-1)" }} />
               </Box>
            );
         if (isLogin) return children;

         return <PleaseLogin />;
      };

      return (
         <>
            <Helmet>
               <title>{`Visual | ${title} ${id ? "- " + id : ""}`}</title>
               {meta}
            </Helmet>

            <Box
               sx={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  height: `100%`,
               }}
               ref={ref}
               {...other}
            >
               {rederContent()}
            </Box>
         </>
      );
   }
);

export default RootPage;
