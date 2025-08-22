import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Subscribe() {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container flex items-center justify-between">
        <div>
          <h2>Subcribe our Newsletter</h2>
          <p className="text-gray-400">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet
            elit eu magna.
          </p>
        </div>

        <div className="flex">
          <div className="flex items-center rounded-full overflow-hidden border border-gray-300">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <Button className="bg-primary rounded-full">Subscribe</Button>
          </div>

          
        </div>
      </div>
    </div>
  );
}
