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
                            <td>{item.data.uid}</td>
                            <td>{item.data.goIn ? "Xe vào" : "Xe ra"}</td>
                            <td>{item.data.goInTS}</td>
                            <td>{item.data.goOutTS}</td>
                            <td>{item.data.totalCost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}
