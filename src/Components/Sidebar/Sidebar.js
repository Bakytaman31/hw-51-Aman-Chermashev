import React from 'react';
import {Col} from "reactstrap";
import "./Sidebar.css";

const Sidebar = (props) => {
    return(
        <Col xs="6" sm="3">
            <div className="sidebar-div">
                <p className="sidebar-name">Sidebar</p>
                <p><a href="#" className="sidebar-a">Больше информации</a></p>
                <p><a href="#" className="sidebar-a">Все фильмы</a></p>
                <p><a href="#" className="sidebar-a">Больше о нас</a></p>
                <p><a href="#" className="sidebar-a">Другие фильмы</a></p>
            </div>
        </Col>
    )
};

export default Sidebar;