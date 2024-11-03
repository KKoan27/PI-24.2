
import '../CompCss/Login.css';
import Logo2 from '../../Imagens/Logo2.png';

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado');
    handleCloseModal();
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      handleCloseModal();
    }
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Login</button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>×</button>
            <img src={Logo2} alt="LogoBranca" />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="username@gmail.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" placeholder="Senha" required />
              </div>

              {/* Link "Esqueceu a senha?" agora dentro do form */}
              <Link to="/forgot-password" className="link-forgot">Esqueceu a senha?</Link>

              {/* Botão "Entrar" logo abaixo do link */}
              <button type="submit" className='login-button'>Entrar</button>

              {/* Link para criar conta abaixo do botão de entrar */}
              <Link to="/register" className="link-register">Criar conta</Link>
            </form>


          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
