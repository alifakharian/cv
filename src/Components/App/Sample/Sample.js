import { Link } from "react-router-dom";
import sample from "./Sample.module.css";

const Sample = () => {
  return (
    <div className={`text-white ${sample.main} min-h-screen`}>
      <div
        className={`flex flex-wrap justify-evenly py-[10px] gap-y-[50px] px-[2px]  rounded-3xl mx-[10px] ${sample.totall}`}
        dir="rtl"
      >
         <div
          className={` hover:border-gray-800 relative hover:scale-105 border-4 border-gray-400 duration-700 rounded-xl ${sample.product}`}
        >
          <p
            className={` absolute z-50 text-white text-center  top-[35px] leading-[25px] font-bold  text-[12px] px-3 ${sample.explain}`}
          >
            مشابه پروژه Digiland می باشد که سبد خرید به آن اضافه شده است
          </p>

          <div className={`bg-zinc-800 ${sample.image}`}>
            <img
              src={require("./img/15.png")}
              className={`rounded-t-lg w-[300px] ${sample.pic}`}
            />
          </div>
          <p
            className={`text-center tracking-[1px]    mt-1 font-bold ${sample.title}`}
          >
            Digilandpluse
          </p>
          <button className="bg-gray-300 text-[12px] mx-auto block my-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center">
            <span>
              <Link
                className={`${sample.showproject} text-[12px]`}
                to="https://alifakharian.github.io/digilandpluse"
                
                target="_blank"
              >
                نمایش پروژه
              </Link>
            </span>
          </button>
        </div>
        <div
          className={` hover:border-gray-800 relative hover:scale-105 border-4 border-gray-400 duration-700 rounded-xl ${sample.product}`}
        >
          <p
            className={` absolute z-50 text-white text-center top-[15px] leading-[25px] font-bold  text-[12px] px-3 ${sample.explain}`}
          >
            مشابه سایت Digiland می باشد دارای حالت darkmode می باشد با react -
            tailwind انجام شده است از هیچ پکیج آماده ای در این پروژه استفاده
            نشده است . در صفحه ثبت نام پس از وارد کردن موارد خواسته شده از
            کاربر، یک پنل شخصی برای کاربر ایجاد می شود که مانند حالت darkmode
            هنگام خروج کاربر از سایت باقی می ماند
          </p>

          <div className={`bg-zinc-800 ${sample.image}`}>
            <img
              src={require("./img/14.png")}
              className={`rounded-t-lg w-[300px] ${sample.pic}`}
            />
          </div>
          <p
            className={`text-center tracking-[1px]    mt-1 font-bold ${sample.title}`}
          >
            Digiland
          </p>
          <button className="bg-gray-300 text-[12px] mx-auto block my-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center">
            <span>
              <Link
                className={`${sample.showproject} text-[12px]`}
                to="https://alifakharian.github.io/digiland/
                "
                target="_blank"
              >
                نمایش پروژه
              </Link>
            </span>
          </button>
        </div>
        <div
          className={` hover:border-gray-800 relative hover:scale-105 border-4 border-gray-400 duration-700 rounded-xl ${sample.product}`}
        >
          <p
            className={` absolute z-50 text-white text-center top-[15px]   text-[15px] px-3 leading-[30px] ${sample.explain}`}
          >
            این پروژه مشابه سایت Kalatic می باشد و با Tailwind و React انجام شده
            است تمامی قسمت های صفحه محصولات از API فراخوانی می شود و تمامی صفحات
            به صورت Responsive می باشد
          </p>

          <div className={`bg-zinc-800 ${sample.image}`}>
            <img
              src={require("./img/9.png")}
              className={`rounded-t-lg w-[300px] ${sample.pic}`}
            />
          </div>
          <p
            className={`text-center tracking-[1px]    mt-1 font-bold ${sample.title}`}
          >
            Kalatic
          </p>
          <button className="bg-gray-300 text-[12px] mx-auto block my-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center">
            <span>
              <Link
                className={`${sample.showproject} text-[12px]`}
                to="https://alifakharian.github.io/kalatic/"
                target="_blank"
              >
                نمایش پروژه
              </Link>
            </span>
          </button>
        </div>

        <div
          className={` hover:border-gray-800 relative hover:scale-105 border-4 border-gray-400 duration-700 rounded-xl ${sample.product}`}
        >
          <p
            className={` absolute z-50 text-white text-center top-[15px]   text-[15px] px-3 leading-[45px] ${sample.explain}`}
          >
            اطلاعات نمایش داده شده به کار بر از طریق API می باشد. این پروژه با
            React و Tailwind انجام شده است
          </p>

          <div className={`bg-zinc-700 ${sample.image}`}>
            <img
              src={require("./img/11.png")}
              className={`rounded-t-lg w-[300px] ${sample.pic}`}
            />
          </div>
          <p
            className={`text-center tracking-[1px]    mt-1 font-bold ${sample.title}`}
          >
            Dictonary
          </p>
          <button className="bg-gray-300 text-[12px] mx-auto block my-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center">
            <span>
              <Link
                className={`${sample.showproject} text-[12px]`}
                to="https://alifakharian.github.io/dictonary/"
                target="_blank"
              >
                نمایش پروژه
              </Link>
            </span>
          </button>
        </div>

        <div
          className={` hover:border-gray-800 relative hover:scale-105 border-4 border-gray-400 duration-700 rounded-xl ${sample.product}`}
        >
          <p
            className={` absolute z-50 text-white text-center  top-[20px] text-[12px] px-3 leading-[35px] ${sample.explain}`}
          >
            با وارد کردن شهر مورد نظر نام کشور , سرعت باد , میزان دما , رطوبت از
            api دریافت و نمایش داده می شود . شب و روز شهر مورد نظر هم تشخیص داده
            می شود
          </p>

          <div className={`bg-zinc-700 ${sample.image}`}>
            <img
              src={require("./img/2.png")}
              className={`rounded-t-lg w-[300px] ${sample.pic}`}
            />
          </div>
          <p
            className={`text-center tracking-[2px]  mt-1 font-bold ${sample.title}`}
          >
            React - Weather
          </p>
          <button className="bg-gray-300 w-[100px] text-[12px] mx-auto block my-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center">
            <span>
              <Link
                className={`${sample.showproject} text-[12px]`}
                to="https://alifakharian.github.io/Weather/"
                target="_blank"
              >
                نمایش پروژه
              </Link>
            </span>
          </button>
        </div>
        <div
          className={` hover:border-gray-800 relative hover:scale-105 border-4 border-gray-400 duration-700 rounded-xl ${sample.product}`}
        >
          <p
            className={` absolute z-50 text-white text-center top-[25px] font-black   text-[12px] px-3 leading-[35px] ${sample.explain}`}
          >
            با وارد کردن هر عبارت تصاویر مربوط آن از API سایت Unsplash فراخوانی
            شده و به کار بر نمایش داده می شود (از فیلتر شکن استفاده شود)
          </p>

          <div className={`bg-zinc-700 ${sample.image}`}>
            <img
              src={require("./img/13.png")}
              className={`rounded-t-lg w-[300px] ${sample.pic}`}
            />
          </div>
          <p
            className={`text-center tracking-[1px]    mt-1 font-bold ${sample.title}`}
          >
            gallary
          </p>
          <button className="bg-gray-300 text-[12px] mx-auto block my-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center">
            <span>
              <Link
                className={`${sample.showproject} text-[12px]`}
                to="https://alifakharian.github.io/gallary/"
                target="_blank"
              >
                نمایش پروژه
              </Link>
            </span>
          </button>
        </div>

        <div
          className={` hover:border-gray-800 relative hover:scale-105 border-4 border-gray-400 duration-700 rounded-xl ${sample.product}`}
        >
          <p
            className={` absolute z-50 text-white text-center right-[55px]  top-[40px] text-[16px] px-3 leading-[35px] ${sample.explain}`}
          >
            مشابه سایت چای گلستان
          </p>

          <div className={`bg-zinc-700 ${sample.image}`}>
            <img
              src={require("./img/5.png")}
              className={` w-[300px] h-[135px] ${sample.pic}`}
            />
          </div>
          <p
            className={`text-center tracking-[1px]    mt-1 font-bold ${sample.title}`}
          >
            Golestan tea
          </p>
          <button className="bg-gray-300 mx-auto text-[12px] block my-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center">
            <span>
              <Link
                className={`${sample.showproject} text-[12px]`}
                to="https://alifakharian.github.io/golestan/"
                target="_blank"
              >
                نمایش پروژه
              </Link>
            </span>
          </button>
        </div>

        <div
          className={` hover:border-gray-800 relative hover:scale-105 border-4 border-gray-400 duration-700 rounded-xl ${sample.product}`}
        >
          <p
            className={` absolute z-50 text-white text-center  top-[40px] text-[12px] px-3 leading-[35px] ${sample.explain}`}
          >
            با وارد کردن اطلاعات خواسته شده BMI کاربر نماش داده می شود .
          </p>

          <div className={`bg-zinc-800 ${sample.image}`}>
            <img
              src={require("./img/7.png")}
              className={` w-[300px] h-[135px] ${sample.pic}`}
            />
          </div>
          <p
            className={`text-center tracking-[1.5px] mt-1 font-bold ${sample.title}`}
          >
            BMI
          </p>
          <button className="bg-gray-300 text-[12px] mx-auto block my-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center">
            <span>
              <Link
                className={`${sample.showproject} text-[12px]`}
                to="https://alifakharian.github.io/BMI/"
                target="_blank"
              >
                نمایش پروژه
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sample;
