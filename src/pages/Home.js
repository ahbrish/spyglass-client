import { useNavigate } from "react-router-dom";

function Home(){
    const logMeOut = () => {
        localStorage.removeItem('user');
        Navigate("/login")

    }
    return(<>
        <h1>Home</h1>
        <button onClick={logMeOut}>Log Out</button>
    </>);
}

export default Home;