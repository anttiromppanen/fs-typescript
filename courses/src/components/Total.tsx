import { Course } from "../types";

const Total = ({ courses }: { courses: Course[] }): JSX.Element => {
  const exerciseCount = courses.reduce((carry, part) => carry + part.exerciseCount, 0);

  return (
    <div>
      <p>Number of exercises {exerciseCount}</p>
    </div>
  )
}

export default Total;