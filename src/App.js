import "./App.css";
import User from "./User/User";
import Nav from "./Nav/Nav";
import ParkingTable from "./ParkingTable/ParkingTable";
import { useEffect, useState } from "react";
import { WS_URL } from "./const";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
    const { sendMessage, lastMessage, readyState } = useWebSocket(WS_URL);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (lastMessage !== null) {
            console.log(lastMessage);
            const message = JSON.parse(lastMessage.data);
            setData(prevData => [...prevData, message]);

            if (message.totalCost) {
                // Tạo thông điệp mới để gửi lên máy chủ
                const paymentDoneMessage = JSON.stringify({
                    type: "payment-done",
                    uid: message.uid
                });
                // Gửi thông điệp lên máy chủ
                sendMessage(paymentDoneMessage);
            }
        }
    }, [lastMessage, sendMessage]);

    const connectionStatus = {
        [ReadyState.CONNECTING]: "Connecting",
        [ReadyState.OPEN]: "Open",
        [ReadyState.CLOSING]: "Closing",
        [ReadyState.CLOSED]: "Closed",
        [ReadyState.UNINSTANTIATED]: "Uninstantiated",
    }[readyState];

    return (
        <Router>
            <div className="box">
                <Nav />
                <Routes>
                    <Route path="/user" element={<User data={data} />} />
                    <Route path="/parking" element={<ParkingTable />} />
                    {/* Các Route khác nếu cần */}
                </Routes>
            </div>
        </Router>
    );
}