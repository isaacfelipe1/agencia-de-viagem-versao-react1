import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Carosel from "../../components/Carosel";
import styles from '../../styles/login.module.css';
import Footer from '../../components/Footer';

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', { // Faz a solicitação a API de login
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        console.log('Login bem-sucedido');
        router.push('/');
      } else {
        const { error } = await response.json();
        setError(error);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao fazer login. Por favor, tente novamente.');
    }
  };

  return (
    <div >
      <Navbar />
      <Carosel />
      <div className={styles.container}>
      <h1>Página de Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className={styles.formGroup}>
        <label>Email:</label>
        <input className={styles.input} type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={styles.formGroup}>
        <label>Senha:</label>
        <input className={styles.input} type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </div>
      <button className={styles.button} type="button" onClick={handleLogin}>
        Login
      </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
