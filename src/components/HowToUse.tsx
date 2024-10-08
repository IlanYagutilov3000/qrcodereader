import { FunctionComponent } from "react";

interface HowToUseProps {

}

const HowToUse: FunctionComponent<HowToUseProps> = () => {
    return (
        <>
            <div className="howToUse_Container">
                <p style={{ fontSize: "16pt", borderBottom: "black 1px solid"}}>Hey Welcome to my App, Hope you'll enjoy it as much as I build it</p>
                <ol>
                    <li style={{marginTop: "12px"}}>You'll need to insert a URL to the input field.</li>
                    <li>MAke sure to not leave the input field emty becasue it wont work.</li>
                    <li>just press the Generaye button and you'r done.</li>
                </ol>
            </div>
        </>);
}

export default HowToUse;