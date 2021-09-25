import { ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

export default function UserListLoader(): ReactElement {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={160}
      viewBox="0 0 300 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="10" cy="10" r="10" />
      <rect x="40" y="2" rx="3" ry="3" width="250" height="15" />

      <circle cx="10" cy="50" r="10" />
      <rect x="40" y="42" rx="3" ry="3" width="250" height="15" />

      <circle cx="10" cy="90" r="10" />
      <rect x="40" y="82" rx="3" ry="3" width="250" height="15" />

      <circle cx="10" cy="130" r="10" />
      <rect x="40" y="122" rx="3" ry="3" width="250" height="15" />
    </ContentLoader>
  );
}
