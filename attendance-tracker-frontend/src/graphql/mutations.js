/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
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
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
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
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createCourseSection = /* GraphQL */ `
  mutation CreateCourseSection(
    $input: CreateCourseSectionInput!
    $condition: ModelCourseSectionConditionInput
  ) {
    createCourseSection(input: $input, condition: $condition) {
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
export const updateCourseSection = /* GraphQL */ `
  mutation UpdateCourseSection(
    $input: UpdateCourseSectionInput!
    $condition: ModelCourseSectionConditionInput
  ) {
    updateCourseSection(input: $input, condition: $condition) {
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
export const deleteCourseSection = /* GraphQL */ `
  mutation DeleteCourseSection(
    $input: DeleteCourseSectionInput!
    $condition: ModelCourseSectionConditionInput
  ) {
    deleteCourseSection(input: $input, condition: $condition) {
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
export const createAttendance = /* GraphQL */ `
  mutation CreateAttendance(
    $input: CreateAttendanceInput!
    $condition: ModelAttendanceConditionInput
  ) {
    createAttendance(input: $input, condition: $condition) {
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
export const updateAttendance = /* GraphQL */ `
  mutation UpdateAttendance(
    $input: UpdateAttendanceInput!
    $condition: ModelAttendanceConditionInput
  ) {
    updateAttendance(input: $input, condition: $condition) {
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
export const deleteAttendance = /* GraphQL */ `
  mutation DeleteAttendance(
    $input: DeleteAttendanceInput!
    $condition: ModelAttendanceConditionInput
  ) {
    deleteAttendance(input: $input, condition: $condition) {
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
