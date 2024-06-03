import {
   Box,
   Button,
   Paper,
   Stack,
   styled,
   Table,
   TableBody,
   TableCell,
   tableCellClasses,
   TableContainer,
   TableHead,
   TablePagination,
   TableRow,
   Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { effectText } from "../../../helpers/function.helper";
import DrawerUserEdit from "../../../common/drawers/DrawerUserEdit";
import DrawerUserCreate from "../../../common/drawers/DrawerUserCreate";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   // "&:nth-of-type(odd)": {
   //    backgroundColor: theme.palette.action.hover,
   // },
   // hide last border
   "&:last-child td, &:last-child th": {
      border: 0,
   },
}));

const rows = [
   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function User() {
   const [rowsPerPage, setRowsPerPage] = useState(5);
   const [page, setPage] = useState(0);

   const [openDrawerUserEdit, setOpenDrawerUserEdit] = useState(false);
   const handleCloseDrawerUserEdit = () => setOpenDrawerUserEdit(false);
   const handleOpenDrawerUserEdit = () => setOpenDrawerUserEdit(true);

   const [openDrawerUserCreate, setOpenDrawerUserCreate] = useState(false);
   const handleCloseDrawerUserCreate = () => setOpenDrawerUserCreate(false);
   const handleOpenDrawerUserCreate = () => setOpenDrawerUserCreate(true);

   const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
   };

   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
   };

   return (
      <>
         <Box>
            <Stack sx={{ justifyContent: `space-between` }}>
               <Typography variant="h1" sx={{ fontSize: `30px`, fontWeight: `700` }}>
                  {effectText(`User List`)}
               </Typography>

               <Button onClick={handleOpenDrawerUserCreate} variant="contained">
                  {effectText(`Add User`)}
               </Button>
            </Stack>

            <Box sx={{ mt: `50px` }}>
               <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                     <TableHead>
                        <TableRow>
                           <StyledTableCell>id</StyledTableCell>
                           <StyledTableCell align="right">First name</StyledTableCell>
                           <StyledTableCell align="right">Last Name</StyledTableCell>
                           <StyledTableCell align="right">age</StyledTableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {(rowsPerPage > 0
                           ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                           : rows
                        ).map((row) => {
                           return (
                              <StyledTableRow onClick={handleOpenDrawerUserEdit} key={row.id} sx={{ cursor: "pointer" }} hover>
                                 <StyledTableCell component="th" scope="row">
                                    {row.id}
                                 </StyledTableCell>
                                 <StyledTableCell align="right">{row.firstName}</StyledTableCell>
                                 <StyledTableCell align="right">{row.lastName}</StyledTableCell>
                                 <StyledTableCell align="right">{row.age}</StyledTableCell>
                              </StyledTableRow>
                           );
                        })}
                     </TableBody>
                  </Table>
               </TableContainer>
               <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
               />
            </Box>
         </Box>
         <DrawerUserCreate
            handleCloseDrawerUserCreate={handleCloseDrawerUserCreate}
            openDrawerUserCreate={openDrawerUserCreate}
         />
         <DrawerUserEdit
            handleCloseDrawerUserEdit={handleCloseDrawerUserEdit}
            openDrawerUserEdit={openDrawerUserEdit}
         />
      </>
   );
}
