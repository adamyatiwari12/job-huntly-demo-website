import React from 'react';

export const FeaturedIcons: Record<string, () => React.ReactNode> ={
  revolut: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="revolutMask" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
        <circle cx="24" cy="24" r="24" fill="#C4C4C4" />
      </mask>
      <g mask="url(#revolutMask)">
        <rect width="48" height="48" fill="url(#revolutPattern)" />
      </g>
      <defs>
        <pattern id="revolutPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
          <image href="/images/revolut.png" width="400" height="400" />
        </pattern>
      </defs>
    </svg>
  ),
  dropbox: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#dropboxClip)">
        <path d="M14.4 7.55L4.8 13.75L14.4 19.85L24 13.75L14.4 7.55ZM33.6 7.55L24 13.75L33.6 19.85L43.2 13.75L33.6 7.55ZM4.8 26.05L14.4 32.25L24 26.05L14.4 19.85L4.8 26.05ZM33.6 19.85L24 26.05L33.6 32.25L43.2 26.05L33.6 19.85ZM14.4 34.25L24 40.45L33.6 34.25L24 28.15L14.4 34.25Z" fill="#0062FF" />
      </g>
      <defs>
        <clipPath id="dropboxClip">
          <rect width="38.4" height="36" fill="white" transform="translate(4.8 6)" />
        </clipPath>
      </defs>
    </svg>
  ),
  pitch: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="pitchMask" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
        <circle cx="24" cy="24" r="24" fill="#C4C4C4" />
      </mask>
      <g mask="url(#pitchMask)">
        <rect width="48" height="48" fill="url(#pitchPattern)" />
      </g>
      <defs>
        <pattern id="pitchPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
          <image href="/images/pitch.png" width="340" height="340" />
        </pattern>
      </defs>
    </svg>
  ),
  blinkist: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="blinkistMask" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
        <circle cx="24" cy="24" r="24" fill="#C4C4C4" />
      </mask>
      <g mask="url(#blinkistMask)">
        <rect width="48" height="48" fill="url(#blinkistPattern)" />
      </g>
      <defs>
        <pattern id="blinkistPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
          <image href="/images/blinkist.png" width="400" height="400" />
        </pattern>
      </defs>
    </svg>
  ),
  classPass: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="classPassMask" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
        <circle cx="24" cy="24" r="24" fill="#C4C4C4" />
      </mask>
      <g mask="url(#classPassMask)">
        <rect width="48" height="48" fill="url(#classPassPattern)" />
      </g>
      <defs>
        <pattern id="classPassPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
          <image href="/images/classpass.png" width="400" height="400" />
        </pattern>
      </defs>
    </svg>
  ),
  canva: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" fill="url(#canvaPattern)" />
      <defs>
        <pattern id="canvaPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
          <image href="/images/canva.png" width="357" height="357" />
        </pattern>
      </defs>
    </svg>
  ),
  goDaddy: () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="goDaddyMask" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
        <circle cx="24" cy="24" r="24" fill="#C4C4C4" />
      </mask>
      <g mask="url(#goDaddyMask)">
        <rect width="48" height="48" fill="url(#goDaddyPattern)" />
      </g>
      <defs>
        <pattern id="goDaddyPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
          <image href="/images/godaddy.png" width="977" height="977" />
        </pattern>
      </defs>
    </svg>
  ),
  twitter: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#1DA1F2" d="M23 2.999a10.9 10.9 0 01-3.14.86A5.48 5.48 0 0022.338.361a10.88 10.88 0 01-3.47 1.33 5.45 5.45 0 00-9.29 4.96A15.44 15.44 0 013 2.16a5.42 5.42 0 001.69 7.27A5.4 5.4 0 012.8 9.14v.07a5.44 5.44 0 004.36 5.33 5.52 5.52 0 01-2.44.09 5.45 5.45 0 005.09 3.78A10.93 10.93 0 012 19.54 15.4 15.4 0 0010.29 22c6.59 0 10.2-5.46 10.2-10.2 0-.16 0-.33-.01-.49A7.3 7.3 0 0023 3z" />
    </svg>
  )
};
