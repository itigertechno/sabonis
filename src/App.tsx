import {Outlet} from 'react-router-dom';
import {Footer} from '@widgets/Footer';
import {Header} from '@widgets/Header';

function App() {
    return (
        <div className='flex min-h-screen flex-col'>
            <Header/>
            <main className="grow mt-[135px] w1024:mt-16">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
