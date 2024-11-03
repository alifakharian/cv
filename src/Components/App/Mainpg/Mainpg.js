import { Link } from "react-router-dom";
import mainpg from "./Mainpg.module.css";

const Mainpg = () => {
  return (
    <div className={`text-white ${mainpg.main} min-h-screen`}>
      <div
        className={`container flex flex-wrap justify-around`}
        dir="rtl"
      >
        <div className="lg:w-[20%]">
          <img
            src={require("./img/2.jpg")}
            className="my-5 rounded-xl size-[180px] opacity-80 hover:opacity-100 duration-500 hover:scale-110"
          />
        </div>
        <div className={`lg:w-[60%]`}>
          <h1
            className={`text-center mt-5 font-semibold text-white  ${mainpg.name}`}
          >
            علی فخاریان
          </h1>
          <p className={`text-center mt-7 text-white ${mainpg.des}`}>
            طراح سایت
          </p>
        </div>
      </div>
      {/* lorem */}
      <div
        className={`container flex pr-10 flex-wrap justify-around  mt-5`}
        dir="rtl"
      >
        <div className={`lg:w-[50%] `}>
          <h1 className={`${mainpg.name}`}>در باره من : </h1>
          <p className={`leading-[40px] ${mainpg.des}`}>
            من به عنوان یک فرد علاقمند به کسب تجربه در حوزه طراحی سایت و با
            داشتن روحیه کار تیمی با اضافه شدن به تیم حرفه ای شما میتوانم به
            بازدهی بیشتر شرکت شما کمک کنم .
          </p>
          <button className="bg-gray-300 mt-10 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>
              <Link
                className={`${mainpg.des}`}
                to="https://jobvision.ir/cv/36822614-002755"
              >
                در یافت رزومه
              </Link>
            </span>
          </button>
        </div>
        <div className={`lg:w-[50%] flex flex-wrap  justify-evenly `}>
          <div
            className={`md:w-[25%] gap-y-[30px] mt-6   flex flex-col flex-wrap ${mainpg.information}`}
          >
            <p>سن :</p>
            <p>محل سکونت : </p>
            <p>ایمیل :</p>
            <p>github :</p>
            <p>تلگرام :</p>
            <p className="pb-2">تلفن :</p>
          </div>
          <div
            className={`lg:w-[25%] gap-y-[35px] mt-5 bg-red-60  flex flex-col float-end justify-center mx-[25px] flex-wrap ${mainpg.informationrespons} `}
            dir="ltr"
          >
            <p className={`${mainpg.age}`}>26</p>
            <p>تهران</p>
            <p>alifakharian1998@gmail.com</p>
            <button>
              <Link to="https://github.com/alifakharian">
                https://github.com/alifakharian
              </Link>
            </button>
            <p className={`${mainpg.phone}`}>
              <Link>@Alifakharii</Link>
            </p>
            <p className={`${mainpg.phone}`}>09195357038</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpg;
