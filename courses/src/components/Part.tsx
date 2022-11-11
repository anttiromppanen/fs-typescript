import { CoursePart } from "../types";
import { assertNever } from "../helpers";

const Part = ({ course }: { course: CoursePart }): JSX.Element => {
  const courseHeader = ({ name, exerciseCount }: { name: string, exerciseCount: number }) => 
    <h4>{name} {exerciseCount}</h4>

  switch (course.type) {
    case 'normal':
      return (
        <div>
          {courseHeader(course)}
          <p>{course.description}</p>
        </div>
      );
    case 'groupProject':
      return (
        <div>
          {courseHeader(course)}
          <p>project exercises {course.groupProjectCount}</p>
        </div>
      );
    case 'submission':
      return (
        <div>
          {courseHeader(course)}
          <p>{course.description}</p>
          <p>submit to {course.exerciseSubmissionLink}</p>
        </div>
      );
    case 'special':
      return (
        <div>
          {courseHeader(course)}
          <p>{course.description}</p>
          <p>required skills: {course.requirements.join(', ')}</p>
        </div>
      )
    default:
      return assertNever(course);
  }
};

export default Part;