import { v4 as uuidv4 } from 'uuid';

import patientsData from '../../data/patients';
import { nonSensitivePatient, NewPatient, Patient } from '../types';

const patients: Array<nonSensitivePatient> = patientsData;

const getNonSensitivePatients = (): Array<nonSensitivePatient> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = ( patient: NewPatient ): Patient => {
  const newPatient = {
    id: uuidv4(),
    ...patient
  };

  patientsData.push(newPatient);
  return newPatient;
};

export default {
  getNonSensitivePatients,
  addPatient
};