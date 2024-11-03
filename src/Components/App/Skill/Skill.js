import { useState } from "react";
import skill from "./Skill.module.css";

const Skill = () => {
  const [html] = useState(80);
  const [js] = useState(50);
  const [react] = useState(40);
  const [bootstrap] = useState(70);
  const [tailwind] = useState(60);
  const [materialui] = useState(70);
  const [api] = useState(35);

  return (
    <>
      <div
        className={`text-white mx-auto px-[10px] ${skill.main}  min-h-screen`}
      >
        <div
          className={`flex flex-wrap justify-center py-[15.21vh] gap-[20px] mx-[20px]  ${skill.total} `}
          dir="rtl"
        >
          <div className="lg:w-[40%]">
            <p className={`text-[30px] mt-3 mr-4 ${skill.contact}`}>
              مهارت های <span className="text-gray-600">من</span>
            </p>
            <div
              className={`flex flex-wrap flex-col justify-between mt-10 gap-y-[10px] mr-4 ${skill.list}`}
              dir="rtl"
            >
              <p>طراحی سایت با کد نویسی</p>
              <p>طراحی ریسپانسیو</p>
            </div>
          </div>
          <div
            className={`lg:w-[55%] flex flex-wrap flex-col gap-y-[10px] font-extrabold ${skill.list}`}
          >
            <div>
              <div className="flex flex-wrap justify-between ml-4 mt-3">
                <p>html / css </p>
                <p>% {html}</p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={html}
                className="w-[50%] "
              />
            </div>

            <div>
              <div className="flex flex-wrap justify-between ml-4 ">
                <p>javascript</p>
                <p>% {js}</p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={js}
                className="w-[50%] "
              />
            </div>

            <div>
              <div className="flex flex-wrap justify-between ml-4">
                <p>React</p>
                <p>% {react}</p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={react}
                className="w-[50%] "
              />
            </div>

            <div>
              <div className="flex flex-wrap justify-between ml-4">
                <p>Bootstrap</p>
                <p>% {bootstrap}</p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={bootstrap}
                className="w-[50%] "
              />
            </div>

            <div>
              <div className="flex flex-wrap justify-between ml-4 ">
                <p>tailwind</p>
                <p>% {tailwind}</p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={tailwind}
                className="w-[50%] "
              />
            </div>

            <div>
              <div className="flex flex-wrap justify-between ml-4 ">
                <p>matrrial Ui</p>
                <p>% {materialui}</p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={materialui}
                className="w-[50%] "
              />
            </div>

            <div>
              <div className="flex flex-wrap justify-between ml-4 ">
                <p>آشنایی با API</p>
                <p>% {api}</p>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                step="10"
                value={api}
                className="w-[50%] "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
