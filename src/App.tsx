import { route } from "./route";
import { useRoutes } from "react-router-dom";
function App() {
  const router = useRoutes(route);
  return <>{router}</>;
}

export default App;
