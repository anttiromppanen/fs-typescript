import { Course } from "../types";

const Total = ({ courses }: { courses: Course[] }): JSX.Element => {
  const exerciseCount = courses.reduce((carry, part) => carry + part.exerciseCount, 0);

  return (
    <div>
      <h4>Number of exercises {exerciseCount}</h4>
    </div>
  )
}

export default Total;