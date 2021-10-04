import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";

import { AuthUserContext } from "../Session";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </div>
);

// authUser.roles[ROLES.ADMIN]
const NavigationAuth = ({ authUser }) => (
  <div>
    <ul>
      {/* <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li> */}
      <li>
        <Link to={ROUTES.FILTER}>Filter</Link>
      </li>
      <li>
        <Link to={ROUTES.CHAT}>Chat</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      {!!authUser.roles[ROLES.ADMIN] && (
        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
      )}
      <li>
        <SignOutButton />
      </li>
    </ul>
  </div>
);
const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Login</Link>
    </li>
  </ul>
);

export default Navigation;
