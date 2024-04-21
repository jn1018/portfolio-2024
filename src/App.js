import { Helmet } from "react-helmet";
import './assets/css/main.css';
import MainNav from "./components/MainNav";

function App() {
  return (
    <>
    <Helmet>
        <title>drawn ~ portfolio of Jeff Nishihira</title>
        <link rel="stylesheet" href="https://use.typekit.net/hvj7zun.css"></link>
        <meta name="description" content="Design, development, and art portfolio of Jeff Nishihira" />
    </Helmet>
    <header><MainNav /></header>
    <div class="main"></div>
    <footer></footer>
    </>
  );
}

export default App;
