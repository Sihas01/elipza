import React, { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = parseInt(end);
    const incrementTime = Math.floor(duration / endValue);
    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endValue) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <div className="text-5xl md:text-6xl text-[#47E3DF] mb-2">
      {count}
      {suffix}
    </div>
  );
};

const Summary = () => {
  return (
    <div className="text-center max-w-7xl mx-auto px-4 md:px-0">
      <h2 className="text-2xl md:text-5xl font-audiwide mb-4 text-[#5393DF]">
        Our Success
      </h2>

      <p className="text-[#733193] text-lg mb-16 max-w-4xl mx-auto font-poppins">
        Ornare id feugiat interdum porttitor nulla turpis etiam. Diam vitae sollicitudin sit nec non et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
        <div className="text-center">
          <AnimatedCounter end="15" suffix="K+" />
          <div className="text-gray-600 text-lg font-medium">Students</div>
        </div>

        <div className="text-center">
          <AnimatedCounter end="75" suffix="%" />
          <div className="text-gray-600 text-lg font-medium">Total success</div>
        </div>

        <div className="text-center">
          <AnimatedCounter end="35" />
          <div className="text-gray-600 text-lg font-medium">Main questions</div>
        </div>

        <div className="text-center">
          <AnimatedCounter end="26" />
          <div className="text-gray-600 text-lg font-medium">Chief experts</div>
        </div>

        <div className="text-center">
          <AnimatedCounter end="16" />
          <div className="text-gray-600 text-lg font-medium">Years of experience</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
