import React from 'react';
import './App.css';

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);
//TODO: get the first name from the appropriate table in place of user.username ID
function App() {
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
