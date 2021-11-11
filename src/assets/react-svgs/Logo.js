// Node modules.
import React from "react";

const Logo = (props) => {
  return (
    <svg
      data-name="Logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1024 1024"
      title="Logo"
      {...props}
    >
      <defs>
        <symbol id="prefix__a" data-name="Icon" viewBox="0 0 1024.08 1024.08">
          <image
            width={4267}
            height={4267}
            transform="scale(.24)"
          />
        </symbol>
      </defs>
      <g data-name="Logo">
        <g data-name={1024}>
          <use
            data-name="Logo"
            width={1024.08}
            height={1024.08}
            transform="translate(-.04 -.04)"
            xlinkHref="#prefix__a"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;