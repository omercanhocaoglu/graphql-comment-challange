import React from 'react';
import { Button, Form, Input, Select, message } from 'antd';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

function NewPostPage() {
  
  const history = useHistory();
  const { Option } = Select;
  // query
  const GET_USERS = gql`
    query Allusers {
      users{
        id
        fullName
      }
    }
  `;
  const NEW_POST_MUTATION = gql`
  mutation addNewPost($data: CreatePostInput!) {
  createPost(
    data: $data
  )
   	{ id 
    	title 
  	}
}
`;
  //
  const {loading: get_users_loading, data: users_data} = useQuery(GET_USERS);
  // console.log(users_data);

  const [ savePost, { loading }] = useMutation(NEW_POST_MUTATION);
  const handleSubmit = async (values) => {
    // console.log("handleSubmit");
    // console.log(values);
    try {
      await savePost({
        variables: {
          data: values
        }
      });
      message.success('Post saved!');
      history.push("/");
      } catch (error) {
      message.error('Post is not saved!');
    }
  };
  
  return (
    <div>
      <h1>New Post</h1>

      <div>
      <Form
    name="basic"
    initialValues={{
      remember: true,
    }}
    onFinish={handleSubmit}
    autoComplete="off"
  >
    <Form.Item name="title"
      rules={[
        {
          required: true,
          message: 'Please type a title!',
        },
      ]}
    >
      <Input size='medium' placeholder='Title' disabled={loading} />
    </Form.Item>

    <Form.Item name="short_description">
      <Input size='medium' placeholder='Short Description' disabled={loading} />
    </Form.Item>

    <Form.Item name="description">
      <Input.TextArea size='large' placeholder='Description' disabled={loading} />
    </Form.Item>

    <Form.Item name="cover">
      <Input size='medium' placeholder='Cover' disabled={loading} />
    </Form.Item>
    <Form.Item name="user_id">
      <Select disabled={get_users_loading || loading} loading={get_users_loading} placeholder='Select a user'>
        {
          users_data && users_data.users.map( (item) => <Option key={item.id} value={item.id}> {item.fullName} </Option> )
        }
      </Select>
    </Form.Item>

    <Form.Item>
      <Button loading={loading} type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
      </Form>
      </div>
    </div>
  )
};

export default NewPostPage;