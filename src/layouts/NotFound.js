import '../styles/NotFound.css';

const NotFound = () => (
  <div className="page-not-found-container">
    <img
      style={{ width: '60vw', height: '40vh' }}
      src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg"
      alt="Page not found"
    />
    <p style={{ fontWeight: 500, textAlign: 'center' }}>
      Please refresh the page or report to: rajkumardas2701@gmail.com
    </p>
  </div>
);

export default NotFound;
