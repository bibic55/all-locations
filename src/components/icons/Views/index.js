import * as React from 'react';

const Views = (props) => (
  <svg width="16px" height="16px" viewBox="0 0 16 16" {...props}>
    <defs>
      <path
        d="M8 2.56c2.23 0 4.191.965 5.873 2.579a12.652 12.652 0 011.89 2.309c.072.114.094.15.164.27a.581.581 0 010 .566 11.41 11.41 0 01-.563.86 12.652 12.652 0 01-1.491 1.717C12.19 12.475 10.229 13.44 8 13.44s-4.191-.965-5.872-2.579A12.652 12.652 0 01.237 8.552a7.031 7.031 0 01-.164-.27.58.58 0 01.001-.566c.07-.119.09-.154.163-.268a12.652 12.652 0 011.89-2.31C3.81 3.526 5.772 2.56 8 2.56zm0 1.13c-2.9 0-5.265 1.911-6.754 4.239v.144C2.815 10.45 5.11 12.31 8 12.31c2.9 0 5.178-1.848 6.753-4.237v-.146C13.183 5.543 10.895 3.69 8 3.69zM8 4.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm0 5.32A2.123 2.123 0 015.875 8c0-1.17.95-2.12 2.125-2.12 1.174 0 2.125.95 2.125 2.12 0 1.17-.95 2.12-2.125 2.12zm.707-2.195a.576.576 0 100-1.152.576.576 0 000 1.152z"
        id="a"
      />
    </defs>
    <g
      transform="translate(-28 -129) translate(28 27) translate(0 102)"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
    >
      <mask id="views" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#FFF" xlinkHref="#a" />
      <g mask="url(#views)" fill="#012">
        <path d="M0 0H16V16H0z" />
      </g>
    </g>
  </svg>
);

export default Views;