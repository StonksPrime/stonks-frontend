import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'home',
    icon: 'home-outline',
    link: '/pages/home',
    home: true,
    data: {
      translationId: 'home',
      permission: 'view',
      resource: 'defaultGuestPermissions',
    },
  },
  {
    title: 'dashboard',
    icon: 'bar-chart',
    link: '/pages/dashboard',
    data: {
      translationId: 'dashboard',
      permission: 'view',
      resource: 'defaultUserPermissions',
    },
  },
  {
    title: 'my-portfolio',
    icon: 'list-outline',
    data: {
      translationId: 'my-portfolio',
      permission: 'view',
      resource: 'defaultUserPermissions',
    },
    children: [
      {
        title: 'All assets',
        link: '/pages/portfolio/all',
        icon: 'briefcase-outline',
      },
      {
        title: 'Stock',
        link: '/pages/portfolio/stock',
        icon: 'trending-up-outline',
      },
      {
        title: 'ETF',
        link: '/pages/portfolio/etf',
        icon: 'trending-up-outline',
      },
      {
        title: 'Crypto',
        link: '/pages/portfolio/crypto',
        icon: 'trending-up-outline',
      },
    ],
  },
  {
    title: 'my-squads',
    icon: 'people-outline',
    link: '/pages/home',
    data: {
      translationId: 'my-squads',
      permission: 'view',
      resource: 'defaultUserPermissions',
    },
    children: [
      {
        title: 'Squad X',
      },
      {
        title: 'Squad Y',
      },
      {
        title: 'Squad Z',
      },
    ],
  },
  {
    title: 'discover',
    icon: 'compass-outline',
    link: '/pages/home',
    data: {
      translationId: 'discover',
      permission: 'view',
      resource: 'defaultUserPermissions',
    },
    children: [
      {
        title: 'Investors',
        icon: 'person-outline',
      },
      {
        title: 'Squads',
        icon: 'people-outline',
      },
      {
        title: 'Assets',
        icon: 'briefcase-outline',
        children: [
          {
            title: 'Stocks',
            icon: 'trending-up-outline',
          },
          {
            title: 'ETF',
            icon: 'trending-up-outline',
          },
          {
            title: 'Crypto',
            icon: 'trending-up-outline',
          },
        ],
      },
    ],
  },
  {
    title: 'rankings',
    icon: 'award-outline',
    link: '/pages/home',
    data: {
      translationId: 'rankings',
      permission: 'view',
      resource: 'defaultUserPermissions',
    },
  },
  {
    title: 'blackboard',
    icon: 'clipboard-outline',
    link: '/pages/home',
    data: {
      translationId: 'blackboard',
      permission: 'view',
      resource: 'defaultUserPermissions',
    },
  },
  {
    title: 'today-highlights',
    icon: 'shopping-cart-outline',
    link: '/pages/iot-dashboard',
    data: {
      translationId: 'today-highlights',
      permission: 'view',
      resource: 'defaultUserPermissions',
    },
  },
  {
    title: 'Login/Register',
    icon: 'lock-outline',
    link: '/pages/auth/login',
    data: {
      translationId: 'login',
      permission: 'view',
      resource: 'defaultGuestPermissions',
    },
  },
  {
    title: 'FEATURES',
    group: true,
    data: {
      permission: 'view',
      resource: 'defaultGuestPermissions',
    },
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    data: {
      permission: 'view',
      resource: 'defaultGuestPermissions',
    },
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
        data: {
          permission: 'view',
          resource: 'defaultGuestPermissions',
        },
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
/*  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
];
