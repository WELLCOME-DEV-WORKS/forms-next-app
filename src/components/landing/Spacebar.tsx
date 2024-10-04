import React from 'react';

type SpacebarProps = {
  text: string;
  className?: string;
};

const Spacebar = ({ text, className }: SpacebarProps) => {
  return (
    <span
      className={className}
      style={{
        background:
          'linear-gradient(101deg, #FFF -6.08%, #FFCCD3 -6.06%, #FFF 76%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        display: 'inline-block',
      }}
    >
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
