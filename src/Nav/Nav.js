import React from 'react';
import './Nav.css';

export default function Nav() {
    return (
        <nav className="Nav">
            <div className="sidebar">
                <a href="#home">Trang chủ</a>
                <a href="#services">Dịch vụ</a>
                <a href="#contact">Liên hệ</a>
            </div>
            <div className="content">
                {/* Nội dung của trang web của bạn sẽ đi vào đây */}
            </div>
        </nav>
    );
}

