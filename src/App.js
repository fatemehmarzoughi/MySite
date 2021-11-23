
import ContextProvider from './context/contextProvider';
import React, { useContext, useEffect } from 'react';
import context from './context/context';
import { AppRoute } from './AppRoute';


function App() {

  const contexts = useContext(context);

  useEffect(() => {
    setTimeout(() => contexts.setLoading(false), 2000)
  })

  return (
      <>
      <ContextProvider>
        <AppRoute />
      </ContextProvider>
      </>
  );
}

export default App;
