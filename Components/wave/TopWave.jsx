import React from "react";
export default function TopWave() {
  return (
    <>
      <svg
        width="100%"
        id="svg"
        viewBox="0 0 1200 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
        style={{transform: 'rotate(180deg)' , zIndex: -1}}
      >
        <defs>
          <linearGradient id="gradient" x1="53%" y1="0%" x2="47%" y2="100%">
            <stop offset="0%" stopColor="#002bdcff"></stop>
            <stop offset="60%" stopColor="#000000ff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 62.11954654757815,219.08141532119546 124.2390930951563,238.16283064239093 188,232 C 251.7609069048437,225.83716935760907 317.1631741669529,194.43009275163172 392,172 C 466.8368258330471,149.56990724836828 551.1082102370319,136.11679835108208 621,152 C 690.8917897629681,167.88320164891792 746.4039848849193,213.10271384403987 807,215 C 867.5960151150807,216.89728615596013 933.275850223291,175.4723462727585 1004,167 C 1074.724149776709,158.5276537272415 1150.492614221917,183.00790106492613 1224,194 C 1297.507385778083,204.99209893507387 1368.7536928890415,202.49604946753692 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
    </>
  );
}
