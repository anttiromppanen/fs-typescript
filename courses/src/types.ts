export interface Course {
  name: string,
  exerciseCount: number
}

interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface IncludeDescription extends CoursePartBase {
  description: string
}

interface CourseNormalPart extends IncludeDescription {
  type: "normal";
}

interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

interface CourseSubmissionPart extends IncludeDescription {
  type: "submission";
  exerciseSubmissionLink: string;
}

interface CourseSpecialPart extends IncludeDescription {
  type: "special";
  requirements: string[]
}

export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseSpecialPart;