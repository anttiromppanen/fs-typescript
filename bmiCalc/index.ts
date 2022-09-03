import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateWebExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_, res) => {
  res.send('Hello Full Stack');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;

  if (!height || !weight) {
    res.status(400).send({ error: 'height and weight required' });
  }

  if (isNaN(Number(weight)) || isNaN(Number(weight))) {
    res.status(400).send({ error: 'height and weight should be numbers' });
  }

  const bmi = calculateBmi(Number(weight), Number(height), true);

  res.json({
    weight,
    height,
    bmi
  });
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { body } = req;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!body.daily_exercises || !body.target) res.status(400).send({ error: 'parameters missing' });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  body.daily_exercises && body.daily_exercises.map((x: number) => {
    if (isNaN(Number(x)) || typeof x === 'boolean') return res.status(400).send({ error: 'malformatted parameters' });
    return Number(x);
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const results = calculateWebExercises(body);
  res.json(results);
});

const PORT = 3001;

app.listen((PORT), () => {
  console.log(`Server running on port ${PORT}`);
});