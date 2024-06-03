import { ROUTER_ADMIN } from "../common/constants/router.constant";
import NotFound from "../common/notifications/NotFound";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import User from "../pages/admin/user/User";
import RootPage from "../pages/RootPage";

const adminRouter = [
   {
      path: "",
      element: (
         <RootPage title="Dashboard">
            <Dashboard />
         </RootPage>
      ),
   },
   {
      path: ROUTER_ADMIN.USER(),
      element: (
         <RootPage title="User">
            <User />
         </RootPage>
      ),
   },
   {
      path: "*",
      element: (
         <RootPage title="Not Found">
            <NotFound />
         </RootPage>
      ),
   },
];

export default adminRouter;
