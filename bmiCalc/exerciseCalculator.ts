interface Results {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
};

interface Ratings { rating: number, ratingDescription: string };

const calculateRatings = (average: number): Ratings => {
  if (average < 2) return { rating: 1, ratingDescription: 'horrible' };
  if (average < 4) return { rating: 2, ratingDescription: 'decent' };

  return { rating: 3, ratingDescription: 'not bad' };
}

interface ExerciseInputs { target: number, exerciseHours: Array<number> };

const parseArguments = (args: Array<string>): ExerciseInputs => {
  if (args.length < 3) throw new Error('Not enough arguments');

  const exerciseHours = args.slice(3).map((x) => {
    const number = Number(x);
    if (isNaN(number)) throw new Error('Provided value is not a number');

    return number;
  })

  return { target: Number(args[2]), exerciseHours }
};

const calculateExercises = (): Results => {
  const parsedInput = parseArguments(process.argv);
  const target = parsedInput.target;
  const exerciseHours = parsedInput.exerciseHours;
  const periodLength = exerciseHours.length;
  const trainingDays = exerciseHours.filter((x) => x > 0).length;
  const average = exerciseHours.length > 0
    ? exerciseHours.reduce((prev, curr) => prev + curr) / periodLength
    : 0;
  const exerciseRating = calculateRatings(average);

  return {
    periodLength,
    trainingDays,
    success: average >= target,
    rating: exerciseRating.rating,
    ratingDescription: exerciseRating.ratingDescription,
    target,
    average
  };
};

console.log(calculateExercises());