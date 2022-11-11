import Part from "./Part";
import { CoursePart } from "../types";

const Content = ({ courses }: { courses: CoursePart[] }): JSX.Element => {
  const coursesMapped = courses.map((course) => <Part key={course.name} course={course} />)
  
  return <div>{coursesMapped}</div>;
}

export default Content;