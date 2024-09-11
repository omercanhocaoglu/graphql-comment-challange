import {React} from "react";
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import "./style.css";

function HeaderMenu() {

return (
    <div className="">
        <Menu key="/" mode="horizontal" >
            <Link to="/" className="menuLink">
                Home
            </Link>
        </Menu>
    </div>
  )
}

export default HeaderMenu;