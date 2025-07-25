import { type NavigationItem } from './navigationData';

type NavigationLinkProps = {
  item: NavigationItem;
};

export const NavigationLink = ({ item }: NavigationLinkProps) => {
  const { label, href, isCurrent } = item;
  
  const baseClasses = "text-primary hover:text-secondary transition-colors px-1.5 sm:px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary rounded";
  
  return (
    <li role="none">
      <a 
        href={href} 
        className={baseClasses}
        role="menuitem"
        aria-current={isCurrent ? "page" : undefined}
      >
        {label}
      </a>
    </li>
  );
}; 