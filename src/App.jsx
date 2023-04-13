import {Route, Routes} from "react-router-dom";
import {EventGrid} from "./components/EventGrid.jsx";
import {Menu} from "./components/Menu.jsx";

function App() {


    return (
        <>
            <Menu/>
            <Routes>
                <Route path="/" element={<EventGrid/>}/>
                <Route path="/event/:id"/>
                <Route path="/login"/>
            </Routes>
        </>
    )
}

export default App
