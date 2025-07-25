import { NavigationList } from './NavigationList';

export const NavigationContainer = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 border-2 border-black">
      <NavigationList />
    </div>
  );
}; 