import { Button } from '../components/ui/button';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div
        className="inline-flex items-center rounded-lg border px-3 py-1 text-sm font-medium mb-4"
        role="button"
      >
        <span className="relative flex h-2 w-2 mr-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
        </span>
        <span className="sm:hidden">Available for hire</span>
        <span className="hidden sm:inline font-mono">Available for work!</span>
      </div>
      <h1 className="max-w-4xl text-4xl font-extrabold md:text-5xl lg:text-6xl">
        Hi I'm a{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-pink-600">
          Full Stack
        </span>{' '}
        developer creating modern web apps.
      </h1>
      <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
        A full stack developer based in India. I'm passionate about building modern web applications
        using Next.js, React, and Tailwind CSS.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Button size="lg">View My Work</Button>
        <Button variant="outline" size="lg">
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Hero;
