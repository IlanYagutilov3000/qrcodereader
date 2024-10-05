import { FunctionComponent, useState } from "react";
import QRCode from "react-qr-code";

interface QrCodeProps {

}

const QrCode: FunctionComponent<QrCodeProps> = () => {
    let [value, setValue] = useState<string>("")
    let [qrVisible, setQrVisble] = useState<boolean>(false)
    const generateQrCodeHandler = () => {
        if (!value) {
            alert("Please write someting")
            return
        }

        setQrVisble(true)

    }
    return (
        <>
            <div className="container">
                <h1>QR Code Generator🔥</h1>
                <input type="text" placeholder="Type a URL..." value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={generateQrCodeHandler}>Generate QR Code</button>
                {qrVisible && <div className="qr-code-container">
                    <QRCode value={value} size={300} />
                </div>}
            </div>
        </>);
}

export default QrCode;