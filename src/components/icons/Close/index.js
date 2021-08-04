import React from 'react';

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <defs>
        <path
          id="path-1-close"
          d="M3.627 13.657a.908.908 0 11-1.284-1.284L6.716 8 2.343 3.627a.906.906 0 010-1.284.907.907 0 011.284 0L8 6.716l4.373-4.373a.908.908 0 111.284 1.284L9.284 8l4.373 4.373a.907.907 0 11-1.284 1.284L8 9.284l-4.373 4.373z"
        />
      </defs>
      <g id="Locations" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g id="Assets" transform="translate(-28 -163)">
          <g id="Group" transform="translate(28 27)">
            <g id="Close" transform="translate(0 136)">
              <mask id="mask-2-close" fill="#fff">
                <use xlinkHref="#path-1-close" />
              </mask>
              <use id="Mask" fill="#FFF" xlinkHref="#path-1-close" />
              <g id="Group" fill="#012" mask="url(#mask-2-close)">
                <g id="🎨-Color">
                  <path id="colors/theme/orange" d="M0 0H16V16H0z" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
