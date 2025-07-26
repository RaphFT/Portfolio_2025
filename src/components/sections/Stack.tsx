import { StackHeader } from '../stack/StackHeader';
import { StackGrid } from '../stack/StackGrid';

export const Stack = () => {
  return (
    <section 
      id="stack" 
      className="min-h-screen w-full bg-white flex items-center justify-center py-8 sm:py-12 lg:py-16"
      aria-labelledby="stack-heading"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center space-y-8 sm:space-y-12 lg:space-y-16">
          <StackHeader />
          <StackGrid />
        </div>
      </div>
    </section>
  );
}; 