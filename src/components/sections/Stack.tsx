import { StackHeader } from '../stack/StackHeader';
import { StackGrid } from '../stack/StackGrid';

export const Stack = () => {
  return (
    <section 
      id="stack" 
      className="min-h-screen w-full bg-white flex items-center justify-center py-8"
      aria-labelledby="stack-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <StackHeader />
          <StackGrid />
        </div>
      </div>
    </section>
  );
}; 