import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Provider from "./common/provider/Provider.tsx";
import "./common/style/global.css";
import "./common/style/animation.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <Provider>
      <App />
   </Provider>
);
