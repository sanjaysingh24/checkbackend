import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'https://checkfrontend-delta.vercel.app', // Replace with your actual Vercel domain
  credentials: true
}));

app.post('/check', (req, res) => {
  const token = req.cookies.heytoken;
  console.log('Cookie:', token);

  if (token) {
    res.json({ message: `Cookie received: ${token}` });
  } else {
    res.status(400).json({ error: 'No cookie found' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
