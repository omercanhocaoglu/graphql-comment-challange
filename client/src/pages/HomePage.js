import React from 'react';
import { Avatar, List, Alert, Spin, Flex } from 'antd';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import "./style.css";

function HomePage() {
  // query
  const GET_POSTS = gql`
    query getAllPosts {
      posts {
        id
        title
        description
        short_description
        user {
          profile_photo
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_POSTS);
  //
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
            <h1> All Posts </h1>
            <div>
              <List
                className="demo-loadmore-list"
                loading={false}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={data.posts}
                renderItem={(item) => (
                  <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={item.user.profile_photo} />}
                        title={<Link className="pagesTitle" to={`post/${item.id}`}> <span className='pagesTitle'> {item.title} </span> </Link>}
                        description={<Link className="pagesLink" to={`post/${item.id}`}> {item.short_description} </Link>}
                      />
                  </List.Item>
                )}
              />
          </div>
        </div>
  )
};

export default HomePage;