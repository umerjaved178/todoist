import Layout from "Layout/Layout";
import HomePage from "container/Home/HomePage";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "Theme/createTheme";

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
