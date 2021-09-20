import Layout from "Layout/Layout";
import HomePage from "container/Home/HomePage";
import { theme } from "Theme/createTheme";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
