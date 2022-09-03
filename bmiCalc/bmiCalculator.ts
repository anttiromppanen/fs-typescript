interface BmiValues {
  height: number,
  weight: number
}

const parseArguments = (args: Array<string>): BmiValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

export const calculateBmi = (webWeight?: number, webHeight?: number, web?: boolean): string => {
    let weight = webWeight || 0;
    let height = webHeight || 0;
    
    if (!web) {
      const parsedValues = parseArguments(process.argv);
      height = parsedValues.height;
      weight = parsedValues.height;
    }
  
  const bmi = weight / ((height / 100) ** 2);

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
  }
};

if (process.argv[1] !== 'index.ts') {
  console.log(calculateBmi());
}