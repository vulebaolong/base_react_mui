import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { IconButton } from "@mui/material";
import { SET_MODE } from "../../store/slices/setting/setting.slice";
import { useAppDispatch, useAppSelector } from "../../store/store";

export default function ButtonToggleTheme() {
   const dispatch = useAppDispatch();
   const { mode } = useAppSelector((state) => state.setting);

   const handleToggleTheme = () => {
      dispatch(SET_MODE(mode === `dark` ? `light` : `dark`));
   };

   return (
      <IconButton onClick={handleToggleTheme}>
         {mode === `dark` ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
   );
}
