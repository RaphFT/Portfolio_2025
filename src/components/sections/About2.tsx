import { About2Background } from '../about2/About2Background';
import { About2Title } from '../about2/About2Title';
import { About2Description } from '../about2/About2Description';

export const About2 = () => {
  return (
    <section 
      id="about2" 
      className="h-screen relative flex flex-col justify-center items-center px-4 w-full sm:px-6 lg:px-8"
      aria-labelledby="about2-heading"
    >
      <About2Background />
      <About2Title />
      <About2Description />
    </section>
  );
}; 