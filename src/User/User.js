import './User.css'
import React, { useEffect, useState } from 'react';
import { WS_URL } from '../const'

export default function User() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const socket = new WebSocket(WS_URL);

        socket.onmessage = function (event) {
            const message = JSON.parse(event.data);
            console.log(event.data);
            setData(message);
        };

        // socket.onmessage = function (event) {
        //     const message = event.data;
        //     // Tạo một mảng mới với tin nhắn từ máy chủ
        //     const newData = Array(3).fill([message, message, message, message]);
        //     setData(newData);
        // };

        // return () => {
        //     socket.close();
        // };
    }, []);


    return (

        < div className='content' >
            <h2>Thông tin gửi xe</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Số xe</th>
                        <th>Thời gian gửi</th>
                        <th>Số tiền gửi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // data.map((item, index) => (
                        //     <tr key={index}>
                        //         {/* <td>{row[0]}</td>
                        //         <td>{row[1]}</td>
                        //         <td>{row[2]}</td>
                        //         <td>{row[3]}</td> */}
                        //         <td>{item.name}</td>
                        //         <td>{item.carNumber}</td>
                        //         <td>{item.parkingTime}</td>
                        //         <td>{item.fee}</td>
                        //     </tr>
                        // ))
                    }
                </tbody>
            </table>
        </div >
    );
}
