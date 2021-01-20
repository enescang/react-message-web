import { useState } from 'react';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [status, setStatus] = useState('Sonuçlar burada görünür');

    const signupUser = async (event) => {
        event.preventDefault();
        try {
            const form = new FormData();
            form.append('email', email);
            form.append('username', username);
            form.append('password', password);
          const response = await fetch('https://nodejs-message-api.vercel.app/auth/register', {
              method: 'POST',
              body: form
          });
          const data = await response.text();
          setStatus(data);
        } catch (error) {
            alert(error);
        }

    };
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <h2>Kayıt Ol Sayfası</h2>
                        <hr />
                        <form onSubmit={signupUser}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email adresi</label>
                                <input
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Email giriniz" />
                                <small id="emailHelp" className="form-text text-muted">Proje deneme amaçlıdır bilgiler paylaşılmamaktadır.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Kullanıcı Adı</label>
                                <input
                                    onChange={(event) => setUsername(event.target.value)}
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Kullanıcı adı giriniz" />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Şifre</label>
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Bir şifre giriniz" />
                            </div>
                            <button type="submit" className="btn btn-primary">Kayıt Ol</button>
                        </form>
                        <p>{status}</p>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Signup;