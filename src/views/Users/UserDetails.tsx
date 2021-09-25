import { ReactElement } from 'react';

import { User } from '@shared/types';

import s from './Users.module.css';

interface UserDetailsProps {
  user: User | null;
  onCloseModal: () => void;
}

export default function UserDetails(props: UserDetailsProps): ReactElement {
  const { user, onCloseModal } = props;

  return (
    <div className={`shadow-01dp ${s.UserDetailsContainer}`}>
      <h5>User Details</h5>
      <ul className="green-blue-list">
        <li className="green-blue-list-item">
          <div className="listing">
            <span className="text-capitalize">Name: </span>
            <strong>{user?.name || 'N/A'}</strong>
          </div>
        </li>

        <li className="green-blue-list-item">
          <div className="listing">
            <span className="text-capitalize">Username: </span>
            <strong>{user?.username || 'N/A'}</strong>
          </div>
        </li>

        <li className="green-blue-list-item">
          <div className="listing">
            <span className="text-capitalize">Email: </span>
            <strong>{user?.email || 'N/A'}</strong>
          </div>
        </li>

        <li className="green-blue-list-item">
          <div className="listing">
            <span className="text-capitalize">Website: </span>
            <a href={user?.website} target="_blank">
              <strong>{user?.website || 'N/A'}</strong>
            </a>
          </div>
        </li>

        <button className="btn-outline btn-md" onClick={onCloseModal}>
          Close
        </button>
      </ul>
    </div>
  );
}
