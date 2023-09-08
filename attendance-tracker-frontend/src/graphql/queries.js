/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      firstName
      lastName
      enrollments {
        items {
          id
          name
          createdAt
          updatedAt
          studentEnrollmentsId
          teacherCourseSectionsId
          courseSectionsId
          courseSectionCourseId
          __typename
        }
        nextToken
        __typename
      }
      attendances {
        items {
          id
          date
          status
          createdAt
          updatedAt
          studentAttendancesId
          attendanceCourseSectionId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      courseSectionEnrolledId
      __typename
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        enrollments {
          nextToken
          __typename
        }
        attendances {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseSectionEnrolledId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
      id
      firstName
      courseSections {
        items {
          id
          name
          createdAt
          updatedAt
          studentEnrollmentsId
          teacherCourseSectionsId
          courseSectionsId
          courseSectionCourseId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        courseSections {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      name
      sections {
        items {
          id
          name
          createdAt
          updatedAt
          studentEnrollmentsId
          teacherCourseSectionsId
          courseSectionsId
          courseSectionCourseId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        sections {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCourseSection = /* GraphQL */ `
  query GetCourseSection($id: ID!) {
    getCourseSection(id: $id) {
      id
      name
      course {
        id
        name
        sections {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      teacher {
        id
        firstName
        courseSections {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      enrolled {
        items {
          id
          firstName
          lastName
          createdAt
          updatedAt
          courseSectionEnrolledId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      studentEnrollmentsId
      teacherCourseSectionsId
      courseSectionsId
      courseSectionCourseId
      __typename
    }
  }
`;
export const listCourseSections = /* GraphQL */ `
  query ListCourseSections(
    $filter: ModelCourseSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        course {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        teacher {
          id
          firstName
          createdAt
          updatedAt
          __typename
        }
        enrolled {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        studentEnrollmentsId
        teacherCourseSectionsId
        courseSectionsId
        courseSectionCourseId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAttendance = /* GraphQL */ `
  query GetAttendance($id: ID!) {
    getAttendance(id: $id) {
      id
      student {
        id
        firstName
        lastName
        enrollments {
          nextToken
          __typename
        }
        attendances {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseSectionEnrolledId
        __typename
      }
      courseSection {
        id
        name
        course {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        teacher {
          id
          firstName
          createdAt
          updatedAt
          __typename
        }
        enrolled {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        studentEnrollmentsId
        teacherCourseSectionsId
        courseSectionsId
        courseSectionCourseId
        __typename
      }
      teacher {
        id
        firstName
        courseSections {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      date
      status
      createdAt
      updatedAt
      studentAttendancesId
      attendanceCourseSectionId
      __typename
    }
  }
`;
export const listAttendances = /* GraphQL */ `
  query ListAttendances(
    $filter: ModelAttendanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        student {
          id
          firstName
          lastName
          createdAt
          updatedAt
          courseSectionEnrolledId
          __typename
        }
        courseSection {
          id
          name
          createdAt
          updatedAt
          studentEnrollmentsId
          teacherCourseSectionsId
          courseSectionsId
          courseSectionCourseId
          __typename
        }
        teacher {
          id
          firstName
          createdAt
          updatedAt
          __typename
        }
        date
        status
        createdAt
        updatedAt
        studentAttendancesId
        attendanceCourseSectionId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
