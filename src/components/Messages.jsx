import { useState } from 'react';
const Message = () => {
    const [userId, setUserId] = useState('60070472973ed62d9c51de06');
    const [message, setMessage] = useState({});

    const submitMessages = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://nodejs-message-api.vercel.app/message/convos?user=' + userId, {
                method:'GET'
            })
            const data = await response.json();
            setMessage(data);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <h2>Mesajları listeleme</h2>
                        <hr />
                        <form onSubmit={submitMessages}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Bir user ObjectId giriniz</label>
                                <input
                                    onChange={(event) => setUserId(event.target.value)}
                                    type="text"
                                    className="form-control"
                                    defaultValue={"60070472973ed62d9c51de06"}
                                    placeholder="60070472973ed62d9c51de06" />
                            </div>
                            <button type="submit" className="btn btn-primary">Mesajları listele</button>
                        </form>
                    </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">last_message.user</th>
                            <th scope="col">last_message.text</th>
                            <th scope="col">last_message.sent</th>
                            <th scope="col">user._id</th>
                            <th scope="col">user.email</th>
                            <th scope="col">user.username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            message.data &&
                            message.data.map((item, index)=> {
                                return(
                                    <tr>
                                    <th scope="row">{item.last_message.user}</th>
                                    <td>{item.last_message.text}</td>
                                    <td>{item.last_message.sent}</td>
                                    <td>{item.user[0]._id}</td>
                                    <td>{item.user[0].email}</td>
                                    <td>{item.user[0].username}</td>

                                </tr>
                                )
                            })
                        }
                       
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Message;