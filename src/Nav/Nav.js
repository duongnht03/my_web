import React, { useEffect, useRef } from 'react';
import './Nav.css';
import 'boxicons';
import { Link } from 'react-router-dom';

export default function Nav() {


    const handlebtn = (e) => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
    }

    return (
        <div className="sidebar">
            <div className="logo_content">
                <div className="logo">
                    <box-icon name='car'></box-icon>
                    <div className="logo_name">Trang chủ</div>
                </div>
                <button onClick={e => handlebtn(e)}><box-icon name='menu' id='box-menu'></box-icon></button>
            </div>

            <div className="src">
                <box-icon onClick={e => handlebtn(e)} name='search' id='box-search'></box-icon>
                <input type="text" placeholder="Search.."></input>
            </div>

            <ul className="nav">
                <li>
                    <Link to="/user">
                        <box-icon name='user-detail' type='solid' ></box-icon>
                        <span className="link_name">Thông tin người sử dụng</span>
                    </Link>
                    <span className="tooltip">Thông tin người sử dụng</span>
                </li>
                <li>
                    <Link to="/parking">
                        <box-icon name='map-alt'></box-icon>
                        <span className="link_name">Vị trí đỗ xe</span>
                    </Link>
                    <span className="tooltip">Vị trí đỗ xe</span>
                </li>
            </ul>
        </div>
    );
}
