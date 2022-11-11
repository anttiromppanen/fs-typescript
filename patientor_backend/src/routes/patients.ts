/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatient from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsService.getNonSensitivePatients());
});

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newPatient = toNewPatient(req.body);
    const addedPatient = patientsService.addPatient(newPatient);

    res.json(addedPatient);
  } catch (error) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ` Error: ${error.message}`;
    }

    res.status(400).send(errorMessage);
  }
});

export default router;