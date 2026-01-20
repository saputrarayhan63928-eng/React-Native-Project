import React from 'react';
// import HomeScreen from './component/week3/day13/Component/HomeScreen';
import ErrorBoundary from './component/week2/EvaluasiPekan2/Error/ErrorBoundary';
import LoginRouth from './component/week2/EvaluasiPekan2/Routh/LoginRouth';
import MainScreenProduct from './component/week2/EvaluasiPekan2/Component/ProductScreen/MainScreen';
import ProductDetailScreen from './component/week3/day14/component/ProductDetailScreen';
import LoginUserSimulasi from './component/week3/day15/AsycnStorage';



export default function App() {



  return (
    // <LoginUserSimulasi/>
    <ErrorBoundary>
      <LoginRouth/>
      {/* <ProductDetailScreen/> */}
    </ErrorBoundary>
  );
}
