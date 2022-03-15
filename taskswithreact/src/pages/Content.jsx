import './Content.css';
import UserProfile from '../components/UserProfile/UserProfile';
import PropsClass from '../components/PropsClass/PropsClass';
import Clock from '../components/Clock/Clock';
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
      <div>
        <Clock />
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
