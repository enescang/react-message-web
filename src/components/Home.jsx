import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="jumbotron jumbotron-fluid mt-4">
            <div className="container">
                <h1 className="display-4">Merhaba buradan ister kayıt olabili isterseniz de giriş yapabilirsiniz </h1>
                <p className="lead">  <Link to="/login"> Giriş Yap</Link> ya da
                        <Link to="/signup"> Kayıt Ol </Link> </p>
            </div>
        </div>
    )
};

export default Home;