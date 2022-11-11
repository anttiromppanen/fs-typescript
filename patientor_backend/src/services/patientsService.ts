import patientsData from '../../data/patients';

import { nonSensitivePatient } from '../types';

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

export default {
  getNonSensitivePatients
};