import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import NavBar from "../nav/NavBar";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { GrInspect, GrSystem } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { CiCalculator1 } from "react-icons/ci";

function Main() {
  const domRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [isVisible, setIsVisible] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      domRef.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          setIsVisible((prevVisible) => {
            const newVisible = [...prevVisible];
            newVisible[index] =
              rect.top >= 0 && rect.bottom <= window.innerHeight;
            return newVisible;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial visibility on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [domRef[0], domRef[1], domRef[2], domRef[3], domRef[4]]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const stopStickyElement = document.getElementById('stop-sticky');
  //     const distanceFromTop = stopStickyElement.getBoundingClientRect().top;

  //     setIsSticky(distanceFromTop > 0);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <NavBar />

      <div className="page-wrap">
        <div className="topFirst-container">
          <div className="insidetopFirst-container">
            <h2>name of the company </h2>
            <h4>slogen / some text about the company</h4>
          </div>
          <div className="welcome-container">
            <div class="logo-holder">
              <div class="bg"></div>
              <div class="bar"></div>
              <div class="bar fill1"></div>
              <div class="bar fill2"></div>
              <div class="bar fill3"></div>
              <div class="bar fill4"></div>
              <div class="bar fill1"></div>
              <div class="bar fill5"></div>
              <div class="bar fill6"></div>
              <div class="bar"></div>
            </div>

            <div class="card">
              <h1>
                {" "}
                Work with us
                {/* <!-- Scroller Start --> */}
                <div class="scroller">
                  <span>
                    Big companies !<br />
                    Small companies !<br />
                    Private companies !<br />
                    everybody !
                  </span>
                </div>
                {/* <!-- Scroller End --> */}
              </h1>
              {/* <p class="note">
        Simple text scroller by <a href="http://roel.shoikan.nl">Roël Couwenberg.</a><br/><br/>
      Follow me!<br/>
      <a href="http://roel.shoikan.nl">My Website.</a>
    </p> */}
            </div>

            {/* <p class="content__container__text">
          Work with us
         </p>
            
            <ul class="content__container__list">
      <li class="content__container__list__item">Big Companyis !</li>
      <li class="content__container__list__item">Small Companies !</li>
      <li class="content__container__list__item">Private Company !</li>
      <li class="content__container__list__item">everybody !</li>
    </ul> */}
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="about-container">
          <div
            className={`about-wraper ${isVisible[4] ? "afterAbout" : ""} `}
            ref={domRef[4]}
          >
            <h3 className={"TContent"}>קצת עלינו :</h3>
            {/* <div className={`describe-containerFirst ${isVisible[4] ? 'visible'  : ''} `}
               ref={domRef[4]}></div> */}
          </div>
          <p>
            אנחנו שני סטדנטים בקורס פול סטאק שהחליטו לייצר מערכת כחלק מהפרוייקט
            שלנו. לאחר עבודה קשה הצלחנו ליצר מערכת כמו שתיככנו. מערכת זאת אמורה
            לייצר נוחות ללקוחות ולחברות .
            <br />
            <br />
            לקחנו על עצמנו את הפרוייקט הזה והלכנו איתו בכל הכוח
            <br />
            <br />
            לבסוף, לאחר ניסויים קפדניים, בנינו בהצלחה אב טיפוס עובד של מערכת
            המרת הפסולת לאנרגיה שלנו. זה היה הישג יוצא דופן שהרשים את הקהילה
            שלנו ואף משך תשומת לב תקשורתית. הפרויקט שלנו נתפס כמחליף משחק
            פוטנציאלי בחיפוש אחר פתרונות אנרגיה ברי קיימא.
            <br />
            <br />
            ככל שהתפשטה השמועה, הוזמנו להציג את הפרויקט שלנו ביריד מדע אזורי.
            התשוקה וההתלהבות שלנו היו מדבקות, והעניקו השראה לתלמידים אחרים לחשוב
            מחוץ לקופסה ולפעול בנושאי איכות הסביבה.
            <br />
            <br />
            זכייה בהצטיינות מובילה ביריד המדע הייתה אישור מדהים לעבודה הקשה
            ולמסירות שלנו. יתרה מכך, עסקים מקומיים וארגונים סביבתיים גילו עניין
            במימון מחקר ופיתוח נוספים, מתוך הכרה בהשפעה הפוטנציאלית של היצירה
            שלנו.
            <br />
            <br />
            עם זאת, ההיבט המתגמל ביותר היה הידיעה שהפרויקט שלנו יכול לעשות שינוי
            בקהילה שלנו ומחוצה לה. המסע שלנו לימד אותנו שיעורים יקרי ערך על
            עבודת צוות, התמדה וכוחה של חדשנות.
            <br />
            <br />
            הפרויקט של שרה וג'ון הוא עדות למה שאנחנו יכולים להשיג כאשר תשוקה
            ומומחיות טכנית מתאחדים. השמות שלנו לנצח ייחרטו בהיסטוריה של בית
            הספר, ואנו מקווים להמשיך לעורר את הדורות הבאים להיות סוכנים של שינוי
            חיובי בקהילות שלהם ובעולם
            <br />
            <br />
          </p>
        </div>
        {/* ---------------------> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 8452 605" fill="none">
  <path style={{position:'absolute'}} d="M0.589356 261.631L0.0793724 263.042L2.90066 264.062L3.41064 262.651L0.589356 261.631ZM85.9455 213.682L85.4554 212.265L85.9455 213.682ZM417.165 93.2925L417.641 94.715L417.165 93.2925ZM839.63 6.21814L839.473 4.72637L839.63 6.21814ZM1592.4 301.514L1593.27 300.291L1592.4 301.514ZM2454.67 528.664L2454.51 527.172L2454.67 528.664ZM4273.19 432.504L4272.55 433.865L4273.19 432.504ZM5157.35 602.867L5157.33 604.366L5157.35 602.867ZM6133.67 459.005L6133.36 457.537L6133.36 457.537L6133.67 459.005ZM6745.02 330.286L6744.98 331.786L6745.02 330.286ZM6900.13 371.93L6900.27 370.437L6900.13 371.93ZM7044.3 401.46L7044.71 400.018L7044.3 401.46ZM7343.58 432.504L7343.09 433.921L7343.58 432.504ZM7870.07 324.229L7871.11 325.306L7871.11 325.306L7870.07 324.229ZM7911.5 296.5L7910.61 295.296L7911.5 296.5ZM7967.7 265.17L7968.28 266.555L7967.7 265.17ZM8049.82 221.254L8050.59 222.544L8050.59 222.544L8049.82 221.254ZM8210.41 210.654L8209.45 211.808L8209.45 211.808L8210.41 210.654ZM8272.46 349.972L8271.5 351.127L8272.46 349.972ZM8436 384.802C8436 389.22 8439.58 392.802 8444 392.802C8448.42 392.802 8452 389.22 8452 384.802C8452 380.384 8448.42 376.802 8444 376.802C8439.58 376.802 8436 380.384 8436 384.802ZM3.41064 262.651C8.37184 248.928 21.4905 239.584 37.4105 232.363C53.3336 225.14 71.5357 220.252 86.4357 215.1L85.4554 212.265C70.849 217.315 52.2556 222.335 36.1712 229.631C20.0837 236.928 5.98283 246.712 0.589356 261.631L3.41064 262.651ZM86.4357 215.1C142.105 195.852 196.936 175.108 251.824 154.504C306.72 133.898 361.679 113.429 417.641 94.715L416.69 91.8699C360.67 110.603 305.665 131.089 250.77 151.696C195.868 172.304 141.08 193.032 85.4554 212.265L86.4357 215.1ZM417.641 94.715C547.448 51.307 700.118 22.4015 839.787 7.70991L839.473 4.72637C699.65 19.4341 546.756 48.3751 416.69 91.8699L417.641 94.715ZM839.787 7.70991C1153.72 -25.3116 1365.26 141.795 1591.53 302.736L1593.27 300.291C1367.23 139.515 1154.73 -28.4349 839.473 4.72637L839.787 7.70991ZM1591.53 302.736C1831.72 473.574 2134.33 564.108 2454.83 530.156L2454.51 527.172C2134.78 561.043 1832.9 470.73 1593.27 300.291L1591.53 302.736ZM2454.83 530.156C2676.61 506.662 2886.76 433.153 3097.8 365.597C3308.89 298.02 3520.91 236.383 3746.7 236.383V233.383C3520.39 233.383 3307.98 295.162 3096.88 362.739C2885.72 430.337 2675.91 503.719 2454.51 527.172L2454.83 530.156ZM3746.7 236.383C3838.85 236.383 3931.18 267.572 4020.09 307.891C4064.53 328.048 4108.09 350.469 4150.33 372.393C4192.55 394.31 4233.46 415.735 4272.55 433.865L4273.82 431.143C4234.8 413.048 4193.95 391.659 4151.71 369.73C4109.48 347.808 4065.85 325.352 4021.33 305.159C3932.29 264.78 3839.49 233.383 3746.7 233.383V236.383ZM4272.55 433.865C4526.77 551.752 4869.21 601.136 5157.33 604.366L5157.37 601.367C4869.46 598.138 4527.5 548.782 4273.82 431.143L4272.55 433.865ZM5157.33 604.366C5497.57 608.182 5808.8 529.501 6133.98 460.472L6133.36 457.537C5808.02 526.6 5497.19 605.177 5157.37 601.367L5157.33 604.366ZM6133.98 460.472C6235.06 439.015 6334.8 405.565 6435.63 378.166C6536.53 350.747 6638.69 329.336 6744.98 331.786L6745.05 328.786C6638.32 326.326 6535.84 347.827 6434.84 375.271C6333.77 402.736 6234.35 436.1 6133.36 457.537L6133.98 460.472ZM6744.98 331.786C6773.65 332.446 6797.45 341.399 6821.62 350.964C6845.75 360.513 6870.25 370.681 6899.99 373.424L6900.27 370.437C6871.02 367.74 6846.93 357.754 6822.72 348.174C6798.56 338.611 6774.31 329.461 6745.05 328.786L6744.98 331.786ZM6899.99 373.424C6948.69 377.914 6997.76 389.651 7043.89 402.902L7044.71 400.018C6998.51 386.747 6949.24 374.952 6900.27 370.437L6899.99 373.424ZM7043.89 402.902C7090.59 416.318 7143.7 416.485 7195.87 417.116C7248.15 417.747 7299.49 418.844 7343.09 433.921L7344.07 431.086C7299.93 415.822 7248.09 414.746 7195.91 414.116C7143.61 413.484 7090.95 413.3 7044.71 400.018L7043.89 402.902ZM7343.09 433.921C7414.74 458.693 7522.6 454.872 7624.47 433.277C7726.32 411.685 7822.65 372.223 7871.11 325.306L7869.03 323.151C7821.18 369.47 7725.53 408.785 7623.85 430.342C7522.18 451.895 7414.95 455.593 7344.07 431.086L7343.09 433.921ZM7871.11 325.306C7877.26 319.355 7883.97 315.106 7890.98 311.013C7897.95 306.939 7905.28 302.988 7912.39 297.704L7910.61 295.296C7903.66 300.451 7896.55 304.283 7889.47 308.423C7882.41 312.543 7875.44 316.939 7869.03 323.151L7871.11 325.306ZM7912.39 297.704C7930.72 284.1 7944.85 276.273 7968.28 266.555L7967.13 263.784C7943.51 273.583 7929.15 281.526 7910.61 295.296L7912.39 297.704ZM7968.28 266.555C7998.94 253.83 8020.09 240.618 8050.59 222.544L8049.06 219.963C8018.5 238.074 7997.56 251.158 7967.13 263.784L7968.28 266.555ZM8050.59 222.544C8081.82 204.03 8106.11 188.652 8130.36 184.212C8154.38 179.813 8178.54 186.151 8209.45 211.808L8211.37 209.499C8179.99 183.461 8154.96 176.656 8129.82 181.261C8104.91 185.823 8080.05 201.594 8049.06 219.963L8050.59 222.544ZM8209.45 211.808C8229.3 228.277 8234.61 254.109 8240 280.637C8245.33 306.918 8250.74 333.898 8271.5 351.127L8273.42 348.818C8253.61 332.383 8248.32 306.569 8242.94 280.04C8237.6 253.757 8232.17 226.762 8211.37 209.499L8209.45 211.808ZM8271.5 351.127C8320.94 392.148 8379.56 386.302 8444 386.302V383.302C8379.04 383.302 8321.82 388.981 8273.42 348.818L8271.5 351.127Z" fill="#9D29AE"/>
</svg> */}
        <div className="wraperOne-section">
          <div className="introduction-containerFirst">
            <div className="left-container">
              <div
                className={`describe-containerFirst ${
                  isVisible[0] ? "visible" : ""
                } `}
                ref={domRef[0]}
              >
                <h3 className="TContent"> למי אנחנו פונים: </h3>
                <p className="TTContent">
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nesciunt voluptatum tenetur minus quia quo eius, rerum et inventore expedita necessitatibus, delectus nam, provident vel ducimus ipsam libero blanditiis consequuntur.
        Est illum iusto minima minus doloremque deleniti, distinctio temporibus possimus libero quas aliquid accusantium consectetur, fugiat repudiandae optio quae pariatur ad dolorem. Quae laboriosam, dolore soluta quos expedita necessitatibus mollitia. */}
                  לחברות הגדולות שיש ללהם טכנאי שטח שצריכים בן אדם שיש על סידור
                  יום יומי -לוז של טכנאים בודקים וכדומה
                </p>
              </div>
            </div>
            {/* <div className="right-container">
    <div className="image-containerFirst">
      <img src="data:image/png;base64,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" alt="" />
    </div>

  </div> */}
          </div>

          <div className="introduction-containerFirst">
            <div className="left-container">
              <div
                className={`describe-containerFirst ${
                  isVisible[1] ? "visible" : ""
                } `}
                ref={domRef[1]}
              >
                <h3 className="TContent"> תיאור: </h3>
                <p className="TTContent">
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nesciunt voluptatum tenetur minus quia quo eius, rerum et inventore expedita necessitatibus, delectus nam, provident vel ducimus ipsam libero blanditiis consequuntur.
        Est illum iusto minima minus doloremque deleniti, distinctio temporibus possimus libero quas aliquid accusantium consectetur, fugiat repudiandae optio quae pariatur ad dolorem. Quae laboriosam, dolore soluta quos expedita necessitatibus mollitia. */}
                  מערכת של תיאום תורים לחברות הגדולות שבדכ מתנהלות מול החברות
                  קבלן או פרטי מה שיהיה במערכת זה שהלקחות של החברה יכלו לבחור את
                  הזמן הפנוי לקבלת טכנאי בכך שיוצג לו הרשימה של כל הזמנים
                  והמקומות הפנויים הצד של החברה הגדולה יסודר הלוז של
                  הבדיקות/קריאות בצורה מסודרת לפי שעות וימים ביומן עבודה שיהיה
                  נגיש . בנסוף למסך של היומן עבודה תהיה האופציה לראות
                  סטטיקסטיקות --כמות כניסות לאתר תכמות לקחות וכדומה.....
                </p>
              </div>
            </div>
            {/* <div className="right-container">
    <div className="image-containerFirst">
      <img src="data:image/png;base64,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" alt="" />
    </div>

  </div> */}
          </div>
        </div>
        {/* <div class="seporator-fill-line"></div> */}
        <div className="DocumentationiIcons-wraper">
          <div class="spec-icons-wrapper">
            <div class="icon-txt-wrapper">
              {/* <img src="https://uploads-ssl.webflow.com/6228bf6850370db453e25ec1/6256e014820e34bab61c415c_Asset%209.svg" loading="lazy" alt="" class="feature-img"/> */}
              <span className="feature-icon">
                <FiUser />
              </span>
              <h2>הלקוח נרשם</h2>
            </div>
            <div class="icon-txt-wrapper">
              {/* <img src="https://uploads-ssl.webflow.com/6228bf6850370db453e25ec1/6256e01494238bbde8b7eee7_Asset%205.svg" loading="lazy" alt="" class="feature-img"/> */}
              <span className="errow-icon">
                {" "}
                <AiOutlineArrowDown />{" "}
              </span>
              {/* <h2 class="features-txt">חלל למידה 
              <br/> שקט</h2> */}
            </div>
            <div class="icon-txt-wrapper">
              {/* <img src="https://uploads-ssl.webflow.com/6228bf6850370db453e25ec1/6256e013a1bbf80ec5b6c05d_Asset%202.svg" loading="lazy" alt="" class="feature-img"/> */}
              <span className="feature-icon">
                <GrInspect />
              </span>
              <h2 class="features-txt">בוחר בודקים</h2>
            </div>
            <div class="icon-txt-wrapper">
              {/* <img src="https://uploads-ssl.webflow.com/6228bf6850370db453e25ec1/6256e014db761a58a32db794_Asset%208.svg" loading="lazy" alt="" class="feature-img"/> */}
              {/* <h2 class="features-txt">גג נעים ומאובזר</h2> */}
              <span className="errow-icon">
                {" "}
                <AiOutlineArrowDown />{" "}
              </span>
            </div>
            <div class="icon-txt-wrapper">
              {/* <img src="https://uploads-ssl.webflow.com/6228bf6850370db453e25ec1/6256e014e6524d2ebb3a85aa_Asset%2010.svg" loading="lazy" alt="" class="feature-img"/> */}
              <span className="feature-icon">
                <SlCalender />
              </span>
              <h2 class="features-txt">בוחר תאריך יום ושעה</h2>
            </div>
            <div class="icon-txt-wrapper">
              {/* <img src="https://uploads-ssl.webflow.com/6228bf6850370db453e25ec1/6256e014db761a58a32db794_Asset%208.svg" loading="lazy" alt="" class="feature-img"/> */}
              {/* <h2 class="features-txt">גג נעים ומאובזר</h2> */}
              <span className="errow-icon">
                {" "}
                <AiOutlineArrowDown />{" "}
              </span>
            </div>
            <div class="icon-txt-wrapper">
              {/* <img src="https://uploads-ssl.webflow.com/6228bf6850370db453e25ec1/6256e0133785c8810e1b6830_Asset%204.svg" loading="lazy" alt="" class="feature-img"/> */}
              <span className="feature-icon">
                <GrSystem />
              </span>
              <h2 class="features-txt">מגיע למערכות החברה</h2>
            </div>
          </div>
        </div>

        {/* -webkit-text-size-adjust: 100%;
    color: #333;
    font-family: Ploni aaa,sans-serif;
    font-size: 14px;
    line-height: 20px;
    box-sizing: border-box;
    background-color: rgba(20,66,41,0);
    border-radius: 15px;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    display: flex; */}

        {/* ---------------------> */}

        <div className="wraperTwo-section">
          <div className="introduction-containerFirst">
            <div className="left-container">
              <div
                className={`describe-containerFirst ${
                  isVisible[2] ? "visible" : ""
                } `}
                ref={domRef[2]}
              >
                <h3 className="TContent">מטרה:</h3>
                <p className="TTContent">
                  {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nesciunt voluptatum tenetur minus quia quo eius, rerum et inventore expedita necessitatibus, delectus nam, provident vel ducimus ipsam libero blanditiis consequuntur.
                Est illum iusto minima minus doloremque deleniti, distinctio temporibus possimus libero quas aliquid accusantium consectetur, fugiat repudiandae optio quae pariatur ad dolorem. Quae laboriosam, dolore soluta quos expedita necessitatibus mollitia. */}
                  * לייעל את הדרישה של הלקוחות לטכנאים-הזמנות-זימון תורים *להפוך
                  את חווית המשתמש ללקוח לטובה יותר ונגישה יותר וקלה להבנה *לגרום
                  לחברה להבין כמה כסף נכנס ובעצם אופציה לייצר סטטיסטיקה שמטרתה
                  לעקוב אחרי הרווחים שלה ובכל מה שקשור ללוקחות שלה --מבחינת
                  בדיקות(כמות הבדיקות),מבחינת עלויות רווחים וכדומה
                </p>
              </div>
            </div>
            {/* <div className="right-container">
            <div className="image-containerFirst">
              <img src="data:image/png;base64,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" alt="" />
            </div>

          </div> */}
          </div>

          <div className="introduction-containerSeconed">
            <div className="left-container">
              <div className="image-containerSeconed">
                {/* <img src="data:image/png;base64,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" alt="" /> */}
                <span
                  style={{
                    fontSize: "55px",
                  }}
                >
                  <CiCalculator1 />
                </span>
              </div>
            </div>

            <div className="right-container">
              {/* <div className="describe-containerSeconed"> */}
              <div
                className={`describe-containerFirst ${
                  isVisible[3] ? "visible" : ""
                } `}
                ref={domRef[3]}
              >
                <h3 className="TContent">תהליך השימוש של האפליקציה:</h3>
                <p className="TTContent">
                  {/* orem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nesciunt voluptatum tenetur minus quia quo eius, rerum et inventore expedita necessitatibus, delectus nam, provident vel ducimus ipsam libero blanditiis consequuntur.
                Est illum iusto minima minus doloremque deleniti, distinctio temporibus possimus libero quas aliquid accusantium consectetur, fugiat repudiandae optio quae pariatur ad dolorem. Quae laboriosam, dolore soluta quos expedita necessitatibus mollitia. */}
                  האתר יבנה כאתר שיהיה לו את האופציה להוסיף למסף הבית ובכך ישמש
                  את הלקחות *האתר יהיה רספונסיבי לנייד ולמחשב *שם משתמש וסיסמא
                  ללקוח -----ולחברה יהיה שם משתמש ראשי
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default Main;
