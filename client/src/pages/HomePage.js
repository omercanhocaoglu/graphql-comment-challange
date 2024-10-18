import { useEffect } from 'react';
import { Avatar, List, Alert, Spin, Flex } from 'antd';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import "./style.css";

function HomePage() {
  const postsFragment = gql`
  fragment PostsFragment on Post {
    id
    title
    description
    short_description
    user {
      profile_photo
    }
  }
`;
  // query
  const GET_POSTS = gql`
    query getAllPosts {
      posts {
        ...PostsFragment
      }
    }
  ${postsFragment}`;
  const POSTS_SUBSCRIPTION = gql`
    subscription {
      postCreated  {
        ...PostsFragment
    }
  }
  ${postsFragment}`;
  //
  const { loading, error, data, subscribeToMore } = useQuery(GET_POSTS);
  useEffect(() => {
    subscribeToMore({
      document: POSTS_SUBSCRIPTION,
      updateQuery: ( prev, {subscriptionData} ) => {
        if (!subscriptionData.data) return prev;
        return {
          posts: [
            subscriptionData.data.postCreated,
            ...prev.posts
          ],
        }
        // console.log("prev", prev);
        // console.log("subs", subscriptionData);
      }
    });
  }, [subscribeToMore])
  
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
      <Spin delay={300} tip="Loading" size="large">{content}</Spin>
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