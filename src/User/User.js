import './User.css'
import { WS_URL } from '../const'

export default function User({ data }) {
    return (
        < div className='content' >
            <h2>Thông tin người sử dụng</h2>
            <table>
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>Trạng thái</th>
                        <th>Thời gian gửi</th>
                        <th>Thời gian lấy xe</th>
                        <th>Số tiền gửi</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.uid}</td>
                            <td>{item.goIn ? "Xe vào" : "Xe ra"}</td>
                            <td>{item.goInTimestamp}</td>
                            <td>{item.goOutTimestamp}</td>
                            <td>{item.totalCost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}
