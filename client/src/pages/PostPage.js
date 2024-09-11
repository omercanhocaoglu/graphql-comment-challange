import React from 'react';
import {useParams} from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import { Alert, Spin, Flex, Typography, Image } from 'antd';
import "./style.css";
import CommentPage from './CommentPage';

function PostPage() {
  const {id} = useParams();
  // console.log(id);

  // query
  const GET_POST = gql`
    query getPost($id: ID!) {
      post(id: $id) {
        id
        title
        user_id
        description
        cover
      }
    }
  `;

  const { loading, error, data} = useQuery(GET_POST, {
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
  // Typography
  const { Title, Text } = Typography;
  //
  return (
    <div>
      <div className="textCenter">
        <Title level={1}> Post Details </Title>
        <Title level={3}> { data.post.title} </Title>
        <Text type="secondary"> <Text strong> Description: </Text> {data.post.description} </Text>
        <div className="newPostPhoto">   
          <Image
            width={300}
            src={data.post.cover}
          /> 
        </div>
      </div>
      <div>
          <CommentPage />
      </div>
    </div>
  )
};

export default PostPage;