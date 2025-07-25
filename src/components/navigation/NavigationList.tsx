import { NavigationLink } from './NavigationLink';
import { navigationData } from './navigationData';

export const NavigationList = () => {
  return (
    <ul className="flex space-x-2 text-xs sm:space-x-4 md:space-x-8 sm:text-sm md:text-base" role="menubar">
      {navigationData.items.map((item) => (
        <NavigationLink key={item.id} item={item} />
      ))}
    </ul>
  );
}; 