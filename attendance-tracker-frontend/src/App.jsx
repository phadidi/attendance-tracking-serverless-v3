import React, { useEffect, useState } from 'react';
import './App.css';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { listCourses } from './graphql/queries';

Amplify.configure(awsconfig);
//TODO: get the first name from the appropriate table in place of user.username ID
function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetchCourses();
  }, []);
  const fetchCourses = async () => {
    //TODO: add logic to determine student VS teacher login
    try {
      const courseData = await API.graphql(graphqlOperation(listCourses)); //TODO: get courses by user
      const courseList = courseData.data.listCourses.items;
      setCourses(courseList);
    } catch (err) {
      console.log('fetchCourses error:', err);
    }
  };
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <h3>Welcome {user.username}, student/teacher pages coming soon!</h3>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
