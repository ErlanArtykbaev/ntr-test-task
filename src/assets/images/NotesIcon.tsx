import React from 'react';

interface Props {
  className?: string
}

export const NotesIcon = ({ className }: Props): JSX.Element => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_17_1707)">
      <path d="M21 11.01L3 11V13H21V11.01ZM3 16H15V18H3V16ZM21 6H3V8.01L21 8V6Z" fill="#323232"/>
    </g>
    <defs>
      <clipPath id="clip0_17_1707">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);
