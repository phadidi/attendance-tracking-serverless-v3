/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onCreateTeacher(filter: $filter) {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onUpdateTeacher(filter: $filter) {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher($filter: ModelSubscriptionTeacherFilterInput) {
    onDeleteTeacher(filter: $filter) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
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
export const onCreateCourseSection = /* GraphQL */ `
  subscription OnCreateCourseSection(
    $filter: ModelSubscriptionCourseSectionFilterInput
  ) {
    onCreateCourseSection(filter: $filter) {
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
export const onUpdateCourseSection = /* GraphQL */ `
  subscription OnUpdateCourseSection(
    $filter: ModelSubscriptionCourseSectionFilterInput
  ) {
    onUpdateCourseSection(filter: $filter) {
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
export const onDeleteCourseSection = /* GraphQL */ `
  subscription OnDeleteCourseSection(
    $filter: ModelSubscriptionCourseSectionFilterInput
  ) {
    onDeleteCourseSection(filter: $filter) {
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
export const onCreateAttendance = /* GraphQL */ `
  subscription OnCreateAttendance(
    $filter: ModelSubscriptionAttendanceFilterInput
  ) {
    onCreateAttendance(filter: $filter) {
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
export const onUpdateAttendance = /* GraphQL */ `
  subscription OnUpdateAttendance(
    $filter: ModelSubscriptionAttendanceFilterInput
  ) {
    onUpdateAttendance(filter: $filter) {
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
export const onDeleteAttendance = /* GraphQL */ `
  subscription OnDeleteAttendance(
    $filter: ModelSubscriptionAttendanceFilterInput
  ) {
    onDeleteAttendance(filter: $filter) {
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
