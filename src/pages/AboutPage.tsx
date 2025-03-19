import React from 'react';
import { Button } from '../components/ui/button';
import deblarge from '../assets/deblarge.png';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-1">
            <img src={deblarge} alt="Profile" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="col-span-2 space-y-4">
            <h2 className="text-2xl font-bold">Your Name</h2>
            <p className="text-lg text-muted-foreground">Full-stack Developer based in Your City</p>
            <p>
              I'm a passionate developer with over X years of experience building web and mobile
              applications. I specialize in creating clean, accessible, and user-friendly
              experiences.
            </p>
            <div className="flex space-x-4 pt-4">
              <Button asChild variant="outline">
                <a href="/contact">Contact Me</a>
              </Button>
              <Button asChild>
                <a href="/files/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus
              hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut
              eleifend nibh porttitor. Ut in nulla enim.
            </p>
            <p>
              Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus
              luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at
              interdum magna augue eget diam.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-bold">Bachelor's Degree in Computer Science</h3>
                <p className="text-muted-foreground">University Name, 20XX - 20XX</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-bold">Relevant Certification</h3>
                <p className="text-muted-foreground">Certification Provider, 20XX</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Senior Developer</h3>
                  <span className="text-sm text-muted-foreground">20XX - Present</span>
                </div>
                <p className="text-muted-foreground mb-2">Company Name</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Led development of key features for flagship product</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>Improved application performance by X%</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">Web Developer</h3>
                  <span className="text-sm text-muted-foreground">20XX - 20XX</span>
                </div>
                <p className="text-muted-foreground mb-2">Previous Company</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Developed and maintained client websites</li>
                  <li>Collaborated with designers to implement UI/UX improvements</li>
                  <li>Integrated third-party APIs and services</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
