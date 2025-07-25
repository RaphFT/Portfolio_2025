export type NavigationItem = {
  id: string;
  label: string;
  href: string;
  isCurrent?: boolean;
};

export const navigationData = {
  items: [
    {
      id: 'home',
      label: 'RAPHAEL F.',
      href: '#home',
      isCurrent: true
    },
    {
      id: 'stack',
      label: 'STACK',
      href: '#stack'
    },
    {
      id: 'projects',
      label: 'PROJECTS',
      href: '#projects'
    },
    {
      id: 'contact',
      label: 'CONTACT',
      href: '#contact'
    }
  ]
} as const; 