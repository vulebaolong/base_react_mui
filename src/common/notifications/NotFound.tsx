import { Box, Container, Stack, Typography } from "@mui/material";
import Logo from "../logo/Logo";

export default function NotFound() {
   return (
      <Container maxWidth="md">
         <Stack
            sx={{
               width: "100%",
               alignItems: "center",
               position: "relative",
               pt: "150px",
               pb: `80px`,
               animation: "fadeInUp 0.5s",
               gap: "20px",
               filter: "drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.2))",
            }}
         >
            <Box>
               <Logo />
            </Box>
            <Stack
               sx={{
                  width: "100%",
                  alignItems: "center",
                  pb: `80px`,
               }}
            >
               <Typography
                  sx={{
                     fontWeight: "600",
                     animation: "fadeInUp 0.5s ease 100ms forwards",
                     position: "relative",
                     pt: "0",
                     opacity: "0",
                  }}
               >
                  THIS SITE IS
               </Typography>
               <Typography
                  sx={{
                     fontWeight: "900",
                     fontSize: `30px`,
                     animation: "fadeInUp 0.5s ease 200ms forwards",
                     position: "relative",
                     pt: "0",
                     opacity: "0",
                  }}
               >
                  NOT FOUND
               </Typography>
               <Typography
                  sx={{
                     fontWeight: "400",
                     animation: "fadeInUp 0.5s ease 300ms forwards",
                     position: "relative",
                     pt: "0",
                     opacity: "0",
                  }}
               >
                  This page could not be found.
               </Typography>
            </Stack>
         </Stack>
      </Container>
   );
}
