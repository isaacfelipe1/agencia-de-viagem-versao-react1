// api/login.js

import { connectToDatabase } from '../mongodb';

export default async function handler(req, res) {
  const { email, senha } = req.body;

  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('usuarios');
    const usuario = await collection.findOne({ email });

    if (!usuario) {
      res.status(404).json({ error: 'Usuário não encontrado' });
      return;
    }

    if (senha === usuario.senha) {
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ error: 'Senha incorreta' });
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro ao fazer login. Por favor, tente novamente.' });
  }
}
