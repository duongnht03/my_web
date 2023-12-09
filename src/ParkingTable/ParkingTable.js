import React from "react";
import './ParkingTable.css'

export default function ParkingTable() {
    return (
        <div className="content">
            <table >
                <thead>
                    <tr>
                        <th>Row</th>
                        <th>Column</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {parkingSpots.map((spot, index) => (
                        <tr key={index}>
                            <td>{spot.row}</td>
                            <td>{spot.column}</td>
                            <td>{spot.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const parkingSpots = [
    { row: 1, column: 1, status: 'Empty' },
    { row: 1, column: 2, status: 'Occupied' },
    // Thêm các vị trí xe khác vào đây
];
