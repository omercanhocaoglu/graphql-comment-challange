import React from 'react';
import { Avatar, Badge, Space } from 'antd';
import { gql, useSubscription } from '@apollo/client';

function BadgeMenu () {
    // query
    const POST_COUNT_SUBSCRİPTİON = gql`
    subscription {
        postCount 
    }
    `;
    //
    const { loading, data } = useSubscription(POST_COUNT_SUBSCRİPTİON);
    console.log(loading,data);

  return (
    <div>
        <Space size="large">
            <Badge count={loading ? '?': data.postCount}>
                <Avatar shape='square' size="large" className='textBlack'> POSTS </Avatar>
            </Badge>
        </Space>
    </div>
  )
};

export default BadgeMenu;