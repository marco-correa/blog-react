import { AppRoutes } from '@/router';
import { Link } from 'react-router-dom';

export const Home = () => (
  <>
    <nav>
      <div>
        <Link to={AppRoutes.Home}>Home</Link>
      </div>
      <div>
        <Link to={`${AppRoutes.Post}/123`}>Post 123</Link>
      </div>
      <div>
        <Link to="not-found-page">Not found page</Link>
      </div>
    </nav>

    <br />
    <br />

    <div>Hello Home!</div>
  </>
);
