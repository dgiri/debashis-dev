import { Button } from '../components/ui/button';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        <span className="text-primary">Hi, I'm Your Name</span>
      </h1>
      <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
        I'm a full-stack developer specializing in building exceptional digital experiences.
        Currently, I'm focused on building accessible, human-centered products.
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
