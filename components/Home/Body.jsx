import React, { useEffect } from "react";

export default function Body() {
  
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".showbody");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i]?.getBoundingClientRect().top;
        var elementVisible = 150;
          
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }  
      }
    }
  
    window.addEventListener("scroll", reveal);
  }, [])
  return (
    <div className="mt-[30vh]  flex flex-col font-poppins mx-auto my-auto items-center align-center justify-center">
      <div className="heading">
        <h1 className="text-[3rem]">Why OwnBoon?</h1>
        <h3 className="text-[1.5rem] py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
      </div>
      <div className="my-auto mx-auto p-5  justify-between flex flex-row">
        <div className="bodyimg1">
          <svg
            width="23.8vw"
            height="34vh"
            className="z-no absolute"
            viewBox="0 0 458 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8" filter="url(#filter0_f_80_54)">
              <path
                d="M97.3634 42.1279C145.776 36.3606 173.012 63.2339 221.338 56.7933C272.262 50.0063 297.337 19.1363 342.694 5.98624C404.801 -12.0202 419.611 34.3652 434.615 77.251C447.225 113.297 416.35 117.973 421.177 174.116C425.077 219.47 469.49 251.269 451.894 290.966C439.311 319.351 444.492 340.639 373.808 319.35C303.124 298.062 264.142 351.006 194.323 340.639C139.249 332.461 100.372 330.027 60.676 290.966C0.714401 231.963 -21.4497 136.623 33.2447 77.251C59.2215 49.0526 63.4313 46.1702 97.3634 42.1279Z"
                fill="#FFFF00"
                fillOpacity="0.6"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_80_54"
                x="0"
                y="0"
                width="458"
                height="344"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="1"
                  result="effect1_foregroundBlur_80_54"
                />
              </filter>
            </defs>
          </svg>

          <img loading="lazy"
            src="/bodyimage1.gif"
            alt="Gif"
          />
        </div>
        <div className="flex flex-col showbody align-center justify-center">
          <h className="text-[1.4rem] font-semibold py-3">Lorem ipsum dolor sit amet consectetur</h>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus quo officiis nam. <br /> Accusantium, reprehenderit harum et
            incidunt facilis, corporis provident velit modi numquam magni <br />
            assumenda odit cumque culpa similique.
          </p>
        </div>
      </div>
      <div className="my-auto mx-auto p-5 showbody justify-between flex flex-row">
      <div className="flex flex-col  align-center justify-center">
          <h className="text-[1.4rem] font-semibold py-3">Lorem ipsum dolor sit amet consectetur</h>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus quo officiis nam. <br /> Accusantium, reprehenderit harum et
            incidunt facilis, corporis provident velit modi numquam magni <br />
            assumenda odit cumque culpa similique.
          </p>
        </div>
        <div className="bodyimg2">
          <img loading="lazy"
            src="/bodyimage2.gif"
            alt="Gif"
          />
        </div>
      </div>
      <div className="my-auto mx-auto p-5 showbody justify-between flex flex-row">
        <div className="bodyimg3">
          <svg
            width="22.8vw"
            height="34.8vh"
            viewBox="0 0 439 352"
            className="absolute z-no"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8" filter="url(#filter0_f_175_3)">
              <path
                d="M17.0786 101.319C19.5416 30.2156 77.7455 -7.66382 154.558 10.5302C220.411 26.1285 243 101.319 373 10.5302C429.089 -28.6413 443.775 81.8048 433 134.5C426.132 168.088 386.788 158.109 383.5 207C380.537 251.051 411.295 261.555 383.5 298C309.035 395.637 293.344 324.416 203.521 324.153C115.14 323.894 -1.61277 386.933 2.08572 307.872C4.38413 258.74 67.5151 272.469 71.2228 223.406C75.2618 169.959 15.2239 154.863 17.0786 101.319Z"
                fill="#00F0B5"
                fillOpacity="0.6"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_175_3"
                x="0"
                y="0.29541"
                width="438.282"
                height="351.174"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="1"
                  result="effect1_foregroundBlur_175_3"
                />
              </filter>
            </defs>
          </svg>

          <img loading="lazy"
            src="/bodyimage3.gif"
            alt="Gif"
          />
        </div>
        <div className="flex flex-col  align-center justify-center">
          <h className="text-[1.4rem] font-semibold py-3 ">Lorem ipsum dolor sit amet consectetur</h>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusamus quo officiis nam. <br /> Accusantium, reprehenderit harum et
            incidunt facilis, corporis provident velit modi numquam magni <br />
            assumenda odit cumque culpa similique.
          </p>
        </div>
      </div>
    </div>
  );
}
