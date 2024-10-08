import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface PageNotFOundProps {

}

const PageNotFOund: FunctionComponent<PageNotFOundProps> = () => {
    let navigate = useNavigate()
    return (
        <>
            <h1>404 - Something WEnt wrong</h1>
            <button onClick={() => navigate(-1)}>Back</button>
            <button onClick={() => navigate("/")}>Home</button>
        </>);
}

export default PageNotFOund;