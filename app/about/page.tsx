import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'About App',
  description: 'Description',
};

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

export default About;
export { metadata };
