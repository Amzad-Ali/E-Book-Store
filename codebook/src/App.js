import Footer from './component/Layouts/Footer';
import Header from './component/Layouts/Header';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className='App dark:bg-slate-800'>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;