import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "./config/firebase";
import routes from "./config/routes";
import Center from "./components/utils/Center";
import AuthChecker from "./components/auth/AuthChecker";
import { getUserByGoogleUID, createNewUserWithGoogleUID } from './api/UserAccountService'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.info("User detected.");
        console.log('Current user ID', user.uid) // store this in the database

        try {
          const result = await getUserByGoogleUID(user.uid)
          console.log('Result', result)

        } catch (err) {
          console.log('Result', err)
          console.log('No user was found with that ID')

          try {
            const result = await createNewUserWithGoogleUID(user.uid)
            console.log('here is the result', result)
          } catch (err) {
            console.log('Error', err)
          }

          setLoading(false);
        }

      } else {
        console.info("No user detected");
      }
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <Center>
        <CircularProgress />
      </Center>
    );

  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                  <AuthChecker>
                    <route.component />
                  </AuthChecker>
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
