export {};

interface BmiValues {
  height: number,
  weight: number
};

const parseArguments = (args: Array<string>): BmiValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

const calculateBmi = (): string => {
  const parsedValues = parseArguments(process.argv);
  const { height } = parsedValues;
  const { weight } = parsedValues;
  const bmi: number = weight / ((height / 100) ** 2);
  
  switch(true) {
    case bmi < 16:
      return 'Underweight (Severe thinness)';
    case bmi < 17:
      return 'Underweight (Moderate thinness)';
    case bmi < 18.5:
      return 'Underweight (Mild thinness)';
    case bmi < 25:
      return 'Normal (healthy weight)';
    case bmi < 30:
      return 'Obese (Class I)';
    case bmi < 35:
      return 'Obese (Class II)';
    default:
      return 'Obese (Class III)';
  };
};

console.log(calculateBmi());