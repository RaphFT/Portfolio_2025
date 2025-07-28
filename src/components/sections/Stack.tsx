import { StackHeader } from '../stack/StackHeader';
import { StackGrid } from '../stack/StackGrid';

export const Stack = () => {
  return (
    <section 
      id="stack" 
      className="min-h-screen w-full bg-white flex items-center justify-center py-4 sm:py-6 lg:py-8 pb-8 sm:pb-6"
      aria-labelledby="stack-heading"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-6 lg:space-y-8">
          <StackHeader />
          <StackGrid />
        </div>
      </div>
    </section>
  );
}; 