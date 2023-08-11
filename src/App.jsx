import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <h1>HHello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
        <nav>
          <ul>
            <li>
              <Link to="shop-page">Shop page!</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
