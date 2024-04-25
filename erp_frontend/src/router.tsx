import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Auth
const SignIn = Loader(lazy(() => import('src/content/pages/Auth/Signin')));

// Groups
const Groups = Loader(lazy(() => import('src/content/pages/Groups/Groups')));
const AddGroup = Loader(lazy(() => import('src/content/pages/Groups/Add')));
const EditGroup = Loader(lazy(() => import('src/content/pages/Groups/Edit')));

// Employees
const Employees = Loader(lazy(() => import('src/content/pages/Employees/Employees')));
const AddEmployee = Loader(lazy(() => import('src/content/pages/Employees/Add')));
const EditEmployee = Loader(lazy(() => import('src/content/pages/Employees/Edit')));

// Tasks

const Tasks = Loader(lazy(() => import('src/content/pages/Tasks/Tasks')));
const AddTask = Loader(lazy(() => import('src/content/pages/Tasks/Add')));
const EditTask = Loader(lazy(() => import('src/content/pages/Tasks/Edit')));

// Status
const Status404 = Loader(lazy(() => import('src/content/pages/Status/Status404')));

// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);
const Transactions = Loader(
  lazy(() => import('src/content/applications/Transactions'))
);
const UserProfile = Loader(
  lazy(() => import('src/content/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('src/content/applications/Users/settings'))
);

// Components

const Buttons = Loader(
  lazy(() => import('src/content/pages/Components/Buttons'))
);
const Modals = Loader(
  lazy(() => import('src/content/pages/Components/Modals'))
);
const Accordions = Loader(
  lazy(() => import('src/content/pages/Components/Accordions'))
);
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs')));
const Badges = Loader(
  lazy(() => import('src/content/pages/Components/Badges'))
);
const Tooltips = Loader(
  lazy(() => import('src/content/pages/Components/Tooltips'))
);
const Avatars = Loader(
  lazy(() => import('src/content/pages/Components/Avatars'))
);
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms')));

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboards/crypto" replace /> // Pagina base, onde começa todo o sistema
      },
      {
        path: 'overview',
        element: <Navigate to="/dashboards/crypto" replace />
      },
      {
        path: '*',
        element: <Status404 />
      },

      // Auth
      {
        path: '/signin',
        element: <SignIn />
      }
    ]
  },

  // Groups
  {
    path: '',
    element: <SidebarLayout />,
    children: [
      {
        path: 'groups',
        element: <Groups />
      },
      {
        path: 'groups-add',
        element: <AddGroup />
      },
      {
        path: 'groups/edit/:id',
        element: <EditGroup />
      }
    ]
  },

  // Employees
  {
    path: '',
    element: <SidebarLayout />,
    children: [
      {
        path: 'employees',
        element: <Employees />
      },
      {
        path: 'employees-add',
        element: <AddEmployee />
      },
      {
        path: 'employees/edit/:id',
        element: <EditEmployee />
      }
    ]
  },

  // Tasks
  {
    path: '',
    element: <SidebarLayout />,
    children: [
      {
        path: 'tasks',
        element: <Tasks />
      },
      {
        path: 'tasks-add',
        element: <AddTask />
      },
      {
        path: 'tasks/edit/:id',
        element: <EditTask />
      }
    ]
  },

  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="crypto" replace />
      },
      {
        path: 'crypto',
        element: <Crypto />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: <UserProfile />
          },
          {
            path: 'settings',
            element: <UserSettings />
          }
        ]
      }
    ]
  },
];

export default routes;
