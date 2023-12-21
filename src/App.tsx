import { Outlet } from 'react-router-dom';
import { Footer } from '@widgets/Footer';
import { Header } from '@widgets/Header';

function App() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
