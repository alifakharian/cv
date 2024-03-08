import { Link } from "react-router-dom";
import sample from "./Sample.module.css";

const Sample = () => {
  return (
    <div className="text-white bg-gray-950  p-[12.5px]">
      <div
        className={`flex flex-wrap justify-evenly py-[40px] gap-y-[50px]   rounded-3xl mx-[10px] ${sample.totall}`}
        dir="rtl"
      >
        <div
          className={` hover:border-gray-800 relative hover:scale-105 border-4 border-gray-400 duration-700 rounded-xl ${sample.product}`}
        >
          <p
            className={` absolute z-50 text-white text-center  top-[20px] text-[12px] px-3 leading-[35px] ${sample.explain}`}
          >
            با وارد کردن شهر مورد نظر، نام کشور , سرعت باد , میزان دما , رطوبت
            از API دریافت و نمایش داده می شود این پروژه با React طراحی شده است
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
            Weather API{" "}
          </p>
          <button className="bg-gray-300 w-[100px] text-[12px] mx-auto block my-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center">
            <span>
              <Link
                className={`${sample.showproject} text-[12px]`}
                to="https://alifakharian.github.io/React-Apiweather/"
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
            className={` absolute z-50 text-white text-center right-[10px]  top-[50px] text-[13px] px-3 leading-[35px] ${sample.explain}`}
          >
            ماشین حساب گرافیکی با محاسبه چهار عمل اصلی
          </p>

          <div className={`bg-zinc-700 ${sample.image}`}>
            <img
              src={require("./img/4.png")}
              className={`rounded-t-lg w-[300px] h-[135px] ${sample.pic}`}
            />
          </div>
          <p
            className={`text-center tracking-[1px]   mt-1 font-bold ${sample.title}`}
          >
            Graphic Calculation
          </p>
          <button className="bg-gray-300 mx-auto block my-3 text-[12px]  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center">
            <span>
              <Link
                className={`${sample.showproject} text-[12px]`}
                to="https://alifakharian.github.io/calculator/"
                target="_blank"
              >
                نمایش پروژه
              </Link>
            </span>
          </button>
        </div>

        <div
          className={` hover:border-gray-800 relative   hover:scale-105 border-4 border-gray-400 duration-700 rounded-xl ${sample.product}`}
        >
          <p
            className={` absolute z-50 text-white text-center  top-[20px] text-[12px] px-3 leading-[35px] ${sample.explain}`}
          >
            با وارد کردن نوع وام ، مبلغ در خواستی و تعداد اقساط میزان قسط
            ماهیانه و مبلغ نهایی بازگردانده شده محاسبه می شود
          </p>

          <div className={`bg-zinc-700 ${sample.image}`}>
            <img
              src={require("./img/3.png")}
              className={` w-[300px] h-[135px] ${sample.pic}`}
            />
          </div>
          <p
            className={`text-center tracking-[1px]   mt-1 font-bold ${sample.title}`}
          >
            Loan Calculation
          </p>
          <button className="bg-gray-300 text-[12px] mx-auto block my-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center">
            <span>
              <Link
                className={`${sample.showproject} text-[12px]`}
                to="https://alifakharian.github.io/loan-calculation/"
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
            className={` absolute z-50 text-white text-center font-extrabold  top-[20px] text-[12px] px-3 leading-[35px] ${sample.explain}`}
          >
            مشابه سایت setman می باشد و تمامی صفحات responsive می باشد برخی از
            قسمت ها در json-server بنام test قرار دارد (npm run test)
          </p>

          <div className={`bg-zinc-700 ${sample.image}`}>
            <img
              src={require("./img/6.png")}
              className={` w-[300px] h-[135px] ${sample.pic}`}
            />
          </div>
          <p
            className={`text-center mt-1 tracking-[1px] font-bold ${sample.title}`}
          >
            Setman
          </p>
          <button className="bg-gray-300 text-[12px] mx-auto block my-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center">
            <span>
              <Link
                className={`${sample.showproject} text-[12px]`}
                to="https://alifakharian.github.io/projectsetman/"
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

        <div
          className={` hover:border-gray-800 relative hover:scale-105 border-4 border-gray-400 duration-700 rounded-xl ${sample.product}`}
        >
          <p
            className={` absolute z-50 text-white text-center  top-[47px] text-[12px] px-3 leading-[35px] ${sample.explain}`}
          >
            قسمت های اسلایدر با استفاده از swiper.js طراحی شده است
          </p>

          <div className={`bg-zinc-700 ${sample.image}`}>
            <img
              src={require("./img/8.png")}
              className={` w-[300px] h-[135px] ${sample.pic}`}
            />
          </div>
          <p
            className={`text-center tracking-[1px]    mt-1 font-bold ${sample.title}`}
          >
            Digikala
          </p>
          <button className="bg-gray-300 text-[12px] mx-auto block my-3  hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  items-center">
            <span>
              <Link
                className={`${sample.showproject} text-[12px]`}
                to="https://alifakharian.github.io/Digikala/"
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
            className={` absolute z-50 text-white text-center   text-[12px] px-3 leading-[35px] ${sample.explain}`}
          >
            با وارد کردن هر عبارت تصاویر مربوط آن از API سایت Unsplash فراخوانی
            شده و به کار بر نمایش داده می شود این پروژه با react طراحی شده است
            (از فیلتر شکن استفاده شود)
          </p>

          <div className={`bg-yellow-900 ${sample.image}`}>
            <img
              src={require("./img/1.png")}
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
                to="https://alifakharian.github.io/React-gallary/"
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

          <div className={`bg-zinc-700 ${sample.image}`}>
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
      </div>
    </div>
  );
};

export default Sample;
