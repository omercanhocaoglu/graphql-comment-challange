import "./style.css";
import {Row, Col} from "antd";
import {Switch, Route } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
// Pages
import HomePage from "../../pages/HomePage";
import PostPage from "../../pages/PostPage";

function App() {
  
  return (
    <div className="container">
      <Row justify="center">
        <Col span={14} className="menu">
          <div>
            <HeaderMenu />
          </div>
        </Col>
        <Col span={14} className="content">
        <Switch>
          <Route path="/post/:id" component={PostPage}/>
          <Route path="/" component={HomePage}/>
        </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default App;
