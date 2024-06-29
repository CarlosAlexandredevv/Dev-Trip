import { Carousel, Typography, Button } from '@material-tailwind/react';
import introData from '../../api/intro.json';

export function Intro() {
  return (
    <section>
      <Carousel className="h-[400px]">
        {introData.map((item, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={item.image}
              alt={`image ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  {item.description}
                </Typography>
                <div className="flex justify-center gap-2"></div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
