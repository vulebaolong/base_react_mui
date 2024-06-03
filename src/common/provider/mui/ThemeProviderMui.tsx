import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode, useMemo } from "react";
import { useAppSelector } from "../../../store/store";

export default function ThemeProviderMui({ children }: { children: ReactNode }) {
   const { mode } = useAppSelector((state) => state.setting);
   const theme = useMemo(
      () =>
         createTheme({
            components: {
               MuiStack: {
                  defaultProps: {
                     direction: "row",
                  },
               },
               MuiButton: {
                  styleOverrides: {
                     root: {
                        textTransform: "none",
                        borderRadius: "10px",
                     },
                  },
               },
               MuiOutlinedInput: {
                  styleOverrides: {
                     root: {
                        borderRadius: "10px",
                     },
                  },
               },
               MuiContainer: {
                  defaultProps: {
                     maxWidth: "lg",
                  },
               },
            },
            palette: {
               mode,
               ...(mode === "light"
                  ? {
                       // palette values for light mode
                       background: {
                        //   paper: "rgba(255, 255, 255, 0.1)",
                          default: "#e9e8e8",
                       },
                    }
                  : {
                       // palette values for dark mode
                    }),
            },
         }),
      [mode]
   );
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
