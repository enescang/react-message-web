import { useState } from 'react';

const SendMessage = () => {
    const [userId, setUserId] = useState('60070472973ed62d9c51de06');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('Sonuçlar burada görünür');

    const messageToUser = async(event) => {
        event.preventDefault();
        try {
            const form = new FormData();
            form.append('user', userId);
            form.append('text', message);
            form.append('senderId', '6007340318212c08cc79ab29');
            const response = await fetch('https://nodejs-message-api.vercel.app/message/send', {
                method: 'POST',
                body: form
            });
            const data = await response.text();
            setStatus(data);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <h2>Giriş Sayfası</h2>
                <hr/>
                <form onSubmit={messageToUser}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mesaj Gönderilecek bir kullanıcı girin</label>
                        <input
                            onChange={(event) => setUserId(event.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                           defaultValue={"60070472973ed62d9c51de06"}
                            placeholder="60070472973ed62d9c51de06" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mesaj Girin</label>
                        <input
                            onChange={(event) => setMessage(event.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Mesaj Girin" />
                    </div>
                    <button type="submit" className="btn btn-primary">Mesaj Gönder</button>
                </form>
                <p>{status}</p>
            </div>
        </div>
    </div>
    )
};


export default SendMessage;