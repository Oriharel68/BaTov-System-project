import NavBar from '../nav/NavBar';
import { BiGhost } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function ErorPage() {
  return (
    <>
      <div className="nav">
        <NavBar />
      </div>
      <div className="err-page">
        <main>
          <h1>
            4
            <span>
              <i className="fa-solid fa-ghost">
                <BiGhost />
              </i>
            </span>
            4
          </h1>
          <h2>שגיאה 404 - הדף לא נמצא</h2>
          <p>מצטערים, לא ניתן לגשת לדף שאתה מחפש</p>
          <Link to={'/'}>
            {' '}
            <h4>חזרה לדף הבית</h4>{' '}
          </Link>
        </main>{' '}
      </div>
    </>
  );
}

export default ErorPage;
