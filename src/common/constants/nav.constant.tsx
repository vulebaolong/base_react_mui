import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { ROUTER_ADMIN } from "./router.constant";

export const LIST_NAV = [
   {
      title: `User`,
      path: ROUTER_ADMIN.USER(),
      icon: <PersonRoundedIcon />,
      childrens: [],
   },
];
