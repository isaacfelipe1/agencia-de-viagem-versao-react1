import { useState } from 'react';
import  Navbar  from "../../components/Navbar";
import Carosel from "../../components/Carosel";
import styles from '../../styles/login.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
const FormularioContato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/contatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (response.ok) {
        setSucesso(true);
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        console.error('Erro ao enviar contato:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar contato:', error);
    }
  };

  return (
    <div>
      <Navbar/>
      <Carosel/>
      <div className={styles.container}>
      <h2>Envie sua mensagem</h2>
      {sucesso && <p>Mensagem enviada com sucesso!</p>}
      <form onSubmit={handleSubmit}>
        <div  className={styles.formGroup}>
          <label htmlFor="nome">Nome:</label>
          <input className={styles.input} type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input className={styles.input} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea className={styles.input} id="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} required />
        </div>
        <button className={styles.button}  type="submit">Enviar</button>
      </form>
    </div>
    </div>
  );
};

export default FormularioContato;
