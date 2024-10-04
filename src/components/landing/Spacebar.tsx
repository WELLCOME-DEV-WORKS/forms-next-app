import React from 'react';

type SpacebarProps = {
  text: string;
  className?: string;
};

const Spacebar = ({ text, className }: SpacebarProps) => {
  return (
    <span className={className}>
      {text.split(' ').map((word, index) => (
        <React.Fragment key={index}>
          {word}
          <br />
        </React.Fragment>
      ))}
    </span>
  );
};

export default Spacebar;
