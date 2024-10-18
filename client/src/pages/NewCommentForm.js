import { Button, Form, Input, Select, message } from 'antd';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useRef, React } from 'react';

function NewCommentForm() {

    // query
    const GET_USERS = gql`
        query Allusers {
            users{
            id
            fullName
            }
        }
    `;
    const CREATE_COMMENT_MUTATION = gql`
    mutation addNewComment($data: CreateCommentInput ) {
        createComment(  data: $data) 
            {
                id  
            }
    }
    `;
    //
    const {loading: get_users_loading, data: users_data} = useQuery(GET_USERS);
    // console.log(users_data);

    const [createComment, { loading }] = useMutation(CREATE_COMMENT_MUTATION);
    const formRef = useRef();
    const handleSubmit = async (values) => {
        // console.log(values);
        try {
            await createComment({
              variables: {
                data: values
              }
            });
            message.success('Comment added!');
            formRef.current.resetFields();
            } catch (error) {
            message.error('Comment is not added!');
          }
    };
    
    const { Option } = Select;
  return (
    <div>
        <Form
            name="basic"
            initialValues={{
            remember: true,
            }}
            onFinish={handleSubmit}
            autoComplete="off"
            ref={formRef}
        >
            <Form.Item name="text"
            rules={[
                {
                required: true,
                message: 'Please write a message!',
                },
            ]}
            >
            <Input disabled={loading} size='medium' placeholder='Message'  />
            </Form.Item>
            <Form.Item name="user_id">
            <Select disabled={get_users_loading || loading} loading={get_users_loading} placeholder='Select a user!'>
                {
                users_data && users_data.users.map( (item) => <Option key={item.id} value={item.id}> {item.fullName} </Option> )
                }
            </Select>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
  )
};

export default NewCommentForm;