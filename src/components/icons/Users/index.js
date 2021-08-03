import React from 'react';

const Users = (props) => (
  <svg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <title>Users</title>
    <defs>
      <path
        d="M12.666 7a4.073 4.073 0 001.333-3 4.011 4.011 0 00-4-4 3.891 3.891 0 00-3.932 3.334H6a4.011 4.011 0 00-4 4 4.073 4.073 0 001.334 2.999 5.733 5.733 0 00-3.333 2.333v2.666A.63.63 0 00.668 16h10.665a.63.63 0 00.666-.667v-2.666h3.333a.63.63 0 00.667-.667V9.333A5.54 5.54 0 0012.666 7zM10 1.334A2.674 2.674 0 0112.666 4 2.632 2.632 0 0110 6.667c0-1.4-1.267-2.6-2.6-3.067A2.652 2.652 0 0110 1.334zm-6.666 6A2.666 2.666 0 116 10a2.674 2.674 0 01-2.666-2.667zm7.332 7.332H1.334v-1.333s1.333-2 4.666-2 4.666 2 4.666 2v1.333zm4-3.333h-3.933a4.582 4.582 0 00-2.066-1A3.86 3.86 0 009.933 8H10c3.333 0 4.666 2 4.666 2v1.333z"
        id="prefix__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="prefix__users" fill="#fff">
        <use xlinkHref="#prefix__a" />
      </mask>
      <use fill="#FFF" xlinkHref="#prefix__a" />
      <g mask="url(#prefix__users)" fill="#012">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
);

export default Users;
