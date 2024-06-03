import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Logo from "../logo/Logo";
import rootRouter from "../../routes/rootRouter";
import { ROUTER_ADMIN } from "../constants/router.constant";

export default function PleaseLogin() {
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
            <Box data-aos="fade-up" data-aos-once="true">
               <Logo />
            </Box>
            <Stack
               sx={{
                  width: "100%",
                  alignItems: "center",
                  position: "relative",
                  pb: `80px`,
                  animation: "fadeInUp 0.5s ease 300ms forwards",
                  pt: "0",
                  opacity: "0",
               }}
            >
               <Typography>PLEASE LOGIN</Typography>
               <Typography sx={{ fontWeight: "400" }}>
                  Please log in to continue using...!
               </Typography>

               <Button
                  sx={{ marginTop: "10px", width: "165px" }}
                  onClick={() => {
                     rootRouter.navigate(ROUTER_ADMIN.LOGIN);
                  }}
               >
                  LOGIN / REGISTER
               </Button>
            </Stack>
         </Stack>
      </Container>
   );
}
