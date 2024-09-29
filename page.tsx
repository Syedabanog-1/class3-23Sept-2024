import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Child from './Components/Child';
const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <p>Welcome to the Home page!</p>
        
            <p>This is a child component:</p>
            <Child name="John" age={10} />;
            
            <Footer />
        </div>
    );
};

export default Home;