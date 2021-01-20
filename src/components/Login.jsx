import { useState } from 'react';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('Sonuçlar burada görünür');

    const loginUser = async (event) => {
        event.preventDefault();
        try {
            const form = new FormData();
            form.append('email', email);
            form.append('username', email);
            form.append('password', password);
            const response = await fetch('https://nodejs-message-api.vercel.app/auth/login', {
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
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <h2>Giriş Sayfası</h2>
                        <hr/>
                        <form onSubmit={loginUser}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email ya da kullanıcı adınız</label>
                                <input
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">Proje deneme amaçlıdır bilgiler paylaşılmamaktadır.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Şifre</label>
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Giriş Yap</button>
                        </form>
                        <p>{status}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;