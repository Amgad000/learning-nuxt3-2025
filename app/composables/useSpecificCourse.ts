export const useSpecificCourse = (param: string) => {
  const courses = useCourses()
  let specificCourse = courses.find(e => e.url == param)
  return specificCourse
}
