import {useEffect} from 'react';
import './app.css';
import {useAppSelector} from "./hooks/redux";
function App() {
const {} = useAppSelector(state => state.userReducer)

    return (
        <div className="App">
            HELLO
            {/*{isLoading && <h1>Идет загрузка...</h1>}*/}
            {/*{error && <h1>{error}</h1>}*/}
            {/*{JSON.stringify(users, null, 2)}*/}
            <div style={{display: 'flex'}}>

            </div>
        </div>
    );
}

export default App;
