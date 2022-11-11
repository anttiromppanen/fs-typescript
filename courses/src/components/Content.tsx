import { Course } from "../types";

const Content = ({ courses }: { courses: Course[] }): JSX.Element => {
  const coursesMapped = courses
    .map(({ name, exerciseCount }) => <p key={name}>{name} {exerciseCount}</p>)
  
  return <div>{coursesMapped}</div>;
}

export default Content;