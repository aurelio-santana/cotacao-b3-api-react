import GlobalStyle from "./styles/global";
import { toast, ToastContainer } from "react-toastify";
import Grid from "./components/Grid";
import Form from "./components/Form";

function App() {
    return (
        <div className="container">
            {/* <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> */}
            {/* <GlobalStyle /> */}
            <Form />
            <Grid />
        </div>
    );
}

export default App;
