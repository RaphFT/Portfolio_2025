import { About2Background } from '../about2/About2Background';
import { About2Title } from '../about2/About2Title';
import { About2Description } from '../about2/About2Description';

export const About2 = () => {
  return (
    <section 
      id="about2" 
      className="min-h-screen sm:min-h-screen relative flex flex-col justify-center items-center bg-white py-4 sm:py-8"
      aria-labelledby="about2-heading"
    >
      <About2Background />
      <About2Title />
      <About2Description />
    </section>
  );
}; 