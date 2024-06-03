import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ProviderRedux } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "../../store/store";
import ThemeProviderMui from "./mui/ThemeProviderMui";

export default function Provider({ children }: { children: ReactNode }) {
  
   return (
      <ProviderRedux store={store}>
         <HelmetProvider>
            <ThemeProviderMui >
               <CssBaseline />
               {children}
               <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable={false}
                  pauseOnHover
               />
            </ThemeProviderMui>
         </HelmetProvider>
      </ProviderRedux>
   );
}
