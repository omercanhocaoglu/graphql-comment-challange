import "./style.css";
import {Row, Col} from "antd";
import {Switch, Route } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import BadgeMenu from "./Badge";
// Pages
import HomePage from "../../pages/HomePage";
import PostPage from "../../pages/PostPage";
import NewPostPage from "../../pages/NewPostPage";

function App() {
  
  return (
    <div className="container">
      <Row justify="center">
        <Col span={12} className="menu">
          <div>
            <HeaderMenu />
          </div>
        </Col>
        <Col span={3} className="menu">
          <div>
            <BadgeMenu />
          </div>
        </Col>
        <Col span={14} className="content">
        <Switch>
          <Route path="/post/:id" component={PostPage}/>
          <Route path="/newpost" component={NewPostPage}/>
          <Route path="/" component={HomePage}/>
        </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default App;
