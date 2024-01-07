import React from "react";

export default function Header() {
  return <><nav className="h-14 bg-white border-b border-gray-300 fixed w-full bottom-0 z-10 sm:top-0 shadow-sm drop-shadow-sm ">
  <div className="h-full w-full max-w-4xl mx-auto flex items-center justify-start flex-shrink">
      
      <div className='hidden sm:flex items-center gap-0'>
      <svg fill="#a23d07" height="40px" width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xmlSpace="preserve" transform="rotate(0)" stroke="#a23d07" strokeWidth="0.00512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.024"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M501.801,67.315H10.199C4.567,67.315,0,71.881,0,77.514v356.972c0,5.633,4.567,10.199,10.199,10.199h491.602 c5.632,0,10.199-4.566,10.199-10.199V77.514C512,71.881,507.433,67.315,501.801,67.315z M20.398,87.713h225.402v69.355H20.398 V87.713z M373.291,177.466v68.845H138.709v-68.845H373.291z M20.398,177.466h97.912v68.845H20.398V177.466z M20.398,266.709 h225.402v68.335H20.398V266.709z M118.311,424.287H20.398v-68.845h97.912V424.287z M373.291,424.287H138.709v-68.845h234.582 V424.287z M491.602,424.287h-97.912v-68.845h97.912V424.287z M491.602,335.044H266.199v-68.335h225.402V335.044z M491.602,246.311 h-97.912v-68.845h97.912V246.311z M491.602,157.068H266.199V87.713h225.402V157.068z"></path> </g> </g> <g> <g> <path d="M355.952,396.749h-70.375c-5.632,0-10.199,4.566-10.199,10.199c0,5.633,4.567,10.199,10.199,10.199h70.375 c5.632,0,10.199-4.566,10.199-10.199C366.151,401.315,361.584,396.749,355.952,396.749z"></path> </g> </g> <g> <g> <path d="M252.94,396.749h-8.159c-5.632,0-10.199,4.566-10.199,10.199c0,5.633,4.567,10.199,10.199,10.199h8.159 c5.632,0,10.199-4.566,10.199-10.199C263.139,401.315,258.572,396.749,252.94,396.749z"></path> </g> </g> </g></svg>
      <h3>Bricks</h3>
      </div>

    <div className="flex justify-center flex-grow">
      <div className="gap-2 sm:gap-4 flex text-gray-800 max-w-screen-[250px]:px-4">

          <a href="#home" className="flex align-middle justify-center mr-4 gap-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <h2 className="hidden sm:block">Home</h2>
          </a>

          <a href="#home" className="flex align-middle justify-center mr-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 text-gray-500" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/></svg>
          <h2 className="hidden sm:block">Calculators</h2>
          </a>

          <a href="#home" className="flex align-middle justify-center mr-4 gap-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 text-gray-500"  viewBox="0 0 576 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
          <h2 className="hidden sm:block">About</h2>
          </a>

          <a href="#home" className="flex align-middle justify-center mr-4 gap-0 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 cursor-pointer "  viewBox="0 0 320 512">
          <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
          </svg>
          <h2 className="hidden sm:block">Help</h2>
          </a>
      </div>
    </div>
  </div>
</nav>
<div className="hidden sm:block h-14 top-0 w-full bg-slate-400"></div>
</>;
}
