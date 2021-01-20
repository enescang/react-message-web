import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="jumbotron jumbotron-fluid mt-4">
            <div className="container">
                <h1 className="display-4">Merhaba buradan ister kayıt olabilir isterseniz de giriş yapabilirsiniz. </h1>
                <p className="lead">  <Link to="/login"> Giriş Yap</Link> ya da
                        <Link to="/signup"> Kayıt Ol </Link> </p>
                    <br/>
                <h1 className="display-4">
        İsterseniz de mesaj gönderebilir ya da mesajları listeleyebilirsiniz.
                </h1>
                <p className="lead">  <Link to="/send-message"> Mesaj Gönder</Link> ya da
                        <Link to="/message"> Mesajları Listele </Link> </p>
            </div>
        </div>
    )
};

export default Home;