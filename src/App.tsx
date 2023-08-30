import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { Reset } from "styled-reset";

import routes from "./routes";


import GlobalStyle from "./styles/GlobalStyle";
import defaultTheme from "./styles/defaultTheme";

const router = createBrowserRouter(routes)

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <Reset/>
    <GlobalStyle/>
    <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
