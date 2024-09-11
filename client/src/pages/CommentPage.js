import React from 'react';
import { gql, useLazyQuery } from "@apollo/client";
import { Alert, Spin, Flex, Divider, Button, Avatar, List } from 'antd';
import {useParams} from "react-router-dom";
import "./style.css";

function CommentPage () {
    const {id} = useParams();
    // console.log(id);

    const GET_POST_COMMENTS = gql`
        query getComments($id: ID!) {
            post(id: $id) {
                comments {
                            id
                            text
                            user
                                {
                                    fullName
                                    profile_photo
                                }
                }
            }
        }`;

    const [getComments, {  loading, error, data }] = useLazyQuery(GET_POST_COMMENTS, {
    variables: { id },
    });

    const contentStyle = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
    };
    const content = <div style={contentStyle} />;
    if (loading) {
        return (
        <div>
        <Flex gap="middle" vertical>
            <Spin tip="Loading" size="large">{content}</Spin>
        </Flex>
        </div>
        )
    };
    if (error) {
        return <Alert message={error.message} type="error" />
    };
    // console.log(data);
  
  return (
    <div>
        <div className='textCenter'>
            <Divider  style={{ borderColor: '#ffe4c4', }}> Comments </Divider>
           { !data && <Button onClick={() => getComments()} type="text"> Show Comments </Button> }
        </div>

        {
            !loading && data && 
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={data.post.comments}
                    renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar src={item.user.profile_photo} />}
                        title={item.user.fullName}
                        description={item.text}
                        />
                    </List.Item>
                    )}
                />
            </div>
        }
    </div>
  )
};

export default CommentPage;