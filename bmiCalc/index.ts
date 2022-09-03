import express from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express();

app.get('/hello', (_, res) => {
  res.send('Hello Full Stack');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;

  if (!height || !weight) {
    res.status(400).send({ error: 'height and weight required' })
  }

  if (isNaN(Number(weight)) || isNaN(Number(weight))) {
    res.status(400).send({ error: 'height and weight should be numbers' })
  }

  const bmi = calculateBmi(Number(weight), Number(height), true)

  res.json({
    weight,
    height,
    bmi
  });
});

const PORT = 3001;

app.listen((PORT), () => {
  console.log(`Server running on port ${PORT}`);
});