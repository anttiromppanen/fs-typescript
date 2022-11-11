import { Gender, NewPatient } from "./types";

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(param);
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error(`Incorrect or missing date: ${date}`);
  }

  return date;
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error(`Incorrect or missing gender: ${gender}`);
  }

  return gender;
};

const parseField = (field: unknown, key: string): string => {
  if (!field || !isString(field)) {
    throw new Error(`Incorrect or missing field: ${key}`);
  }

  return field;
};

type Fields = {
  name: unknown,
  ssn: unknown,
  occupation: unknown,
  dateOfBirth: unknown,
  gender: unknown
};

const toNewPatient = ({ name, ssn, occupation, dateOfBirth, gender }: Fields): NewPatient => {
  const newPatient: NewPatient = {
    name: parseField(name, "name"),
    ssn: parseField(ssn, "ssn"),
    occupation: parseField(occupation, "occupation"),
    dateOfBirth: parseDate(dateOfBirth),
    gender: parseGender(gender),
  };

  return newPatient;
};

export default toNewPatient;