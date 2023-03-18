import GlobalStyle from "./styles/global";
import { toast, ToastContainer } from "react-toastify";
import Grid from "./components/Grid";
import Form from "./components/Form";
import { useState } from "react";

function App() {
    var [dataTable, setDataTable] = useState();

    return (
        <div className="container">
            {/* <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} /> */}
            {/* <GlobalStyle /> */}

            {/* <Form callback={(other)} /> */}
            <Form callback={setDataTable} />

            <Grid dataTable={dataTable} />
            {/* <button onClick={() => console.log("texto: ", dataTable)}></button> */}
            <div>
                <footer>
                    <span>
                        Made by{" "}
                        <a href="https://github.com/JeffMCxS" target="_blank" rel="noreferrer">
                            Aurélio
                        </a>
                    </span>
                </footer>
            </div>
        </div>
    );
}

export default App;
