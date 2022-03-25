import './Content.css';
import UserProfile from '../components/UserProfile/UserProfile';
import PropsClass from '../components/PropsClass/PropsClass';
import Salary from '../components/Salary/Salary';
import Travels from '../components/Travels/Travels';
import OnionHater from '../components/OnionHater/OnionHater';

function Content() {
  return (
    <body>
      <h1>Content</h1>
      <div>
        <UserProfile />
      </div>
      <OnionHater />
      <Salary />
      <Travels />
      <div>
        <PropsClass />
      </div>
    </body>

  );
}

export default Content;
