import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import {
   Box,
   Button,
   CircularProgress,
   Drawer,
   IconButton,
   Stack,
   TextField,
   Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

type TProps = {
   openDrawerUserEdit: boolean;
   handleCloseDrawerUserEdit: () => void;
};

const heightHeader = `70px`;
const heightFooter = `80px`;

export default function DrawerUserEdit({
   openDrawerUserEdit,
   handleCloseDrawerUserEdit,
}: TProps) {
   const [loading, setLoading] = useState<boolean>(false);
   const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

   const editTextInPageForm = useFormik({
      enableReinitialize: true,
      initialValues: {
         page: ``,
         title: ``,
         description: ``,
      },
      validationSchema: Yup.object().shape({
         page: Yup.string().trim().required(`Page is required`),
         title: Yup.string().trim().required(`Name is required`),
         description: Yup.string().trim().required(`Description is required`),
      }),
      onSubmit: async (valuesRaw) => {
         console.log(`valuesRaw`, valuesRaw);

         // setLoading(true);

         // const payload = {
         //    page: valuesRaw.page,
         //    description: valuesRaw.description,
         //    title: valuesRaw.title,
         // };

         // console.log(payload);

         // const result = await updateTextInPageAction(payload);
         // console.log(result);
         // setLoading(false);

         // if (!result.status) return toast.error(result.message);

         // handleCloseDrawerUserEdit();

         // toast.success(result.message);
      },
   });

   const handleDeleteUser = () => {
      console.log(`handleDeleteUser`);
   };

   return (
      <Drawer
         anchor={`right`}
         open={openDrawerUserEdit}
         onClose={handleCloseDrawerUserEdit}
      >
         <Box
            sx={{ width: { xs: `90vw`, lg: `500px` }, position: `relative`, height: `100%` }}
            role="presentation"
            component="form"
            autoComplete="false"
            onSubmit={editTextInPageForm.handleSubmit}
         >
            {/* header */}
            <Stack
               sx={{
                  height: `${heightHeader}`,
                  alignItems: `center`,
                  justifyContent: `space-between`,
                  p: `20px 20px 10px`,
                  flexDirection: `row`,
               }}
            >
               <Typography sx={{ fontSize: `20px`, fontWeight: `700` }}>
                  <span>Edit user</span>
                  <span style={{ fontWeight: `400`, fontSize: `14px` }}>- id</span>
               </Typography>
               <IconButton
                  disabled={loadingDelete}
                  color="error"
                  size="large"
                  onClick={handleDeleteUser}
               >
                  {loadingDelete ? <CircularProgress size={20} /> : <DeleteRoundedIcon />}
               </IconButton>
            </Stack>

            {/* body */}
            <Stack
               sx={{
                  height: `calc(100vh - (${heightHeader} + ${heightFooter}))`,
                  p: `10px 20px`,
                  rowGap: `20px`,
                  overflowY: `auto`,
                  flexDirection: `column`
               }}
            >
               {/* page */}
               <TextField
                  sx={{ width: `100%` }}
                  autoComplete="page"
                  label="Page"
                  name="page"
                  value={editTextInPageForm.values.page}
                  onChange={editTextInPageForm.handleChange}
                  error={
                     editTextInPageForm.touched.page && editTextInPageForm.errors.page !== undefined
                  }
                  helperText={editTextInPageForm.touched.page && editTextInPageForm.errors.page}
                  variant="outlined"
               />

               {/* title */}
               <TextField
                  sx={{ width: `100%` }}
                  autoComplete="title"
                  label="Title"
                  name="title"
                  value={editTextInPageForm.values.title}
                  onChange={editTextInPageForm.handleChange}
                  error={
                     editTextInPageForm.touched.title &&
                     editTextInPageForm.errors.title !== undefined
                  }
                  helperText={editTextInPageForm.touched.title && editTextInPageForm.errors.title}
                  variant="outlined"
               />

               {/* description */}
               <TextField
                  sx={{ width: `100%` }}
                  multiline
                  rows={10}
                  autoComplete="description"
                  label="Description"
                  name="description"
                  value={editTextInPageForm.values.description}
                  onChange={editTextInPageForm.handleChange}
                  error={
                     editTextInPageForm.touched.description &&
                     editTextInPageForm.errors.description !== undefined
                  }
                  helperText={
                     editTextInPageForm.touched.description && editTextInPageForm.errors.description
                  }
                  variant="outlined"
               />
            </Stack>

            {/* footer */}
            <Stack
               sx={{
                  height: `${heightFooter}`,
                  flexDirection: `row`,
                  p: `10px 20px 20px`,
                  gap: `20px`,
               }}
            >
               <Button onClick={handleCloseDrawerUserEdit}>Cancel</Button>

               <LoadingButton
                  onClick={() => {
                     editTextInPageForm.handleSubmit();
                  }}
                  loading={loading}
                  loadingPosition="end"
                  endIcon={<SendRoundedIcon sx={{ fontSize: `16px !important` }} />}
                  variant="contained"
                  size="large"
               >
                  Edit
               </LoadingButton>
            </Stack>
         </Box>
      </Drawer>
   );
}
