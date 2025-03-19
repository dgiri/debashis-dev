import { Button } from '../components/ui/button';

const Contact = () => {
  return (
    <div className="py-16 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-2 rounded-md border border-input bg-background"
              placeholder="Your name"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-2 rounded-md border border-input bg-background"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 rounded-md border border-input bg-background"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
