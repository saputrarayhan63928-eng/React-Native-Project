import React from 'react';
import ErrorBoundary from './component/week2/EvaluasiPekan2/Error/ErrorBoundary';
import AppNavigator from './component/week2/EvaluasiPekan2/Routh/IntiRouth';



export default function App() {



  return (

    <ErrorBoundary>
      <AppNavigator/>
    </ErrorBoundary>
  );
}
