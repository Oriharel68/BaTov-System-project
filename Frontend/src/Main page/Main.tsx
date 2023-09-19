import { useRef, useState, memo } from 'react';
import Footer from './Footer';
import NavBar from '../nav/NavBar';
import { AiOutlineArrowDown, AiOutlineMinus } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { GrInspect, GrSystem } from 'react-icons/gr';
import { SlCalender } from 'react-icons/sl';
import { CiCalculator1 } from 'react-icons/ci';
import { BsGraphUpArrow, BsBarChartLine, BsClockHistory } from 'react-icons/bs';
import { LiaStarSolid } from 'react-icons/lia';
import { PiChartLineUpBold } from 'react-icons/pi';
import { MdAttachMoney } from 'react-icons/md';

function Main() {

  return (
    <div>
      <NavBar />
      <div className="page-wrap">
        <div className="topFirst-container">
          <div className="insidetopFirst-container">
            <h2>BaTov</h2>

            <h4> Work Smart Not Hard </h4>
            <span className="BGR">
              {' '}
              <AiOutlineMinus /> <AiOutlineMinus />
              <AiOutlineMinus />
              <AiOutlineMinus />
              <AiOutlineMinus />
              <AiOutlineMinus />
              <AiOutlineMinus />
              <AiOutlineMinus />
              <AiOutlineMinus />
              <AiOutlineMinus />
              <AiOutlineMinus /> <BsGraphUpArrow className="BGR" />{' '}
            </span>
          </div>
          <div className="welcome-container">
            <div className="logo-holder">
              <div className="bg"></div>
              <div className="bar"></div>
              <div className="bar fill1"></div>
              <div className="bar fill2"></div>
              <div className="bar fill3"></div>
              <div className="bar fill4"></div>
              <div className="bar fill1"></div>
              <div className="bar fill5"></div>
              <div className="bar fill6"></div>
              <div className="bar"></div>
            </div>

            <div className="card">
              <h1>
                {' '}
                <p> Work with us:</p>
                <div className="scroller">
                  <span>
                    Big companies !<br />
                    Small companies !<br />
                    Private companies !<br />
                    everybody !
                  </span>
                </div>
              </h1>
            </div>
          </div>
          <div className="chart-image">
            {/* <img src="https://images.pexels.com/photos/7947671/pexels-photo-7947671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
            {/* <FcComboChart/> */}
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="about-container">
          <div className={`about-wraper afterAbout`} >
            <h3 className={'TContent'}>קצת עלינו :</h3>
          </div>
          <p className="about-lorem">
            אנחנו שני סטודנטים בקורס פול סטאק במכללת INT שהחליטו לייצר מערכת כחלק מהפרוייקט שלנו.
            <br />
            <br />
            לקחנו על עצמנו את הפרוייקט הזה והלכנו איתו בכל הכוח למרות האתגרים של הזמן, השלמת שיעורים תוך כדי
            ,עבודה והחיי יום-יום. לאחר עבודה קשה ורצון עז הצלחנו ליצור מערכת כמו שתכננו. השקענו את מלוא זמננו
            למטרת הפרוייקט ,בגלל המוטיבציה והרצון להצליח.
            <br />
            <br />
            את רוב זמננו עשינו בזום על מנת להצליח בפרוייקט, שיתפנו את חוות דעתנו אחד עם השני , נעזרנו אחד בשני
            בפתירת תקלות בקוד ,שיתפנו אחד עם השני בקוד , עבדנו בצורה מסדורת ואסטטית מבחינת חלוקת משימות, שיתוף
            קוד GitHub , ותכנון הפרוייקט מבחינה ויזואלית ומבחינה תבניתית - DataBases,בניית תבניות ותכנון נכון
            של Server-Side.
            <br />
            <br />
            לאחר ההשקעה המרובה , והרצון להצליח הנכם רואים את התוצאה , אין דבר העומד בפני הרצון,
            {/* &nbsp;  */}
            <b> מי שרוצה מצליח זה משפט שהוכיח את עצמו בפנינו. </b>
          </p>
        </div>

        <div className="car-icons-right" id="disapeare-on-small-sizes">
          <ul>
            <li>
              <BsClockHistory />{' '}
            </li>
            <li>
              <PiChartLineUpBold />{' '}
            </li>
            <li>
              <MdAttachMoney />{' '}
            </li>
            <li>
              <SlCalender />{' '}
            </li>
            <li>
              <BsBarChartLine />{' '}
            </li>
          </ul>
        </div>
        <div className="wraperOne-section">
          <div className="introduction-containerFirst">
            <div className="left-container">
              <div className={`describe-containerFirst visible`}>
                <h3 className="TContent"> Ba-Tov SYSTEM </h3>
                <p className="TTcontent">
                  <div></div>
                  ברוכים הבאים לפלטפורמה שלנו המיועדת לפשט את תהליך הזמנת ספקי שירות. המטרה העיקרית שלנו היא
                  לספק ללקוחות דרך פשוטה להתחבר ולהזמין ספקי שירות לצרכיהם השונים. כאשר אנחנו מגיעים לחברות
                  גדולות שמחפשות ארגון הזמנות משופר ונוחות ללקוחותיהן, הפלטפורמה שלנו היא פתרון שמטרתו לפשט
                  ולשדרג את חוויית ההזמנה.
                  <br />
                  <br />
                  אנו מבינים את החשיבות של חוויית המשתמש, ולכן האתר שלנו עוצב להיות אינטואיטיבי ונוח לשימוש.
                  במהלך שלושה לחיצות בלבד, לקוחות יכולים לנווט בין קטגוריות שונות של שירותים, לראות ספקי שירות
                  זמינים ולקבוע את הזמן הרצוי להם.
                  <br />
                  <br />
                  עיצובנו המודרני והנקי מבטיח ניווט חלק בכל האתר, ומתמקד בשלבים המרכזיים של תהליך ההזמנה. ממשק
                  המשתמש נוצר בכדי לספק גמישות מרבית והתאמה אישית בעת בחירת השירותים והספקים.
                  <br />
                  <br />
                  <ul style={{ listStyle: 'square' }}>
                    <li>
                      {' '}
                      <b className="marker"> הזמנה פשוטה: </b>
                      הפלטפורמה שלנו שואפת לפשט משמעותית את תהליך ההזמנה, ולהפטר מטפסים מסובכים והליך מסובך.
                    </li>
                    <li>
                      <b className="marker">זמינות בזמן אמת:</b>
                      בדקו את זמינות ספקי השירות בזמן אמת ובחרו את הזמן שמתאים לכם ביותר.
                    </li>
                    <li>
                      <b className="marker">שירותים להתאמה אישית:</b>
                      ניתן להתאים אישית את השירות על פי מגוון אפשרויות להתאמה לדרישות הספציפיות.
                    </li>
                    <li>
                      <b className="marker">ממשק נוח למשתמש:</b>
                      עיצוב האתר שלנו, הנקי והמודרני, משפר את חוויית המשתמש, והופך את תהליך ההזמנה לחלק ונעים.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <b className="TContent"> תכונות נוספות: </b>
                  <br />
                  <br />
                  <ul style={{ listStyle: 'square' }}>
                    <li>
                      <b className="marker">רישום למערכת:</b>
                      כדי ליהנות משירותינו, על הלקוחות להירשם לפלטפורמה שלנו.
                    </li>
                    <li>
                      <b className="marker">לוח הבקרה האישי ללקוחות:</b> לאחר ההרשמה, כל לקוח מקבל גישה ללוח
                      הבקרה האישי, המאפשר לו לצפות בהזמנות קודמות, להוסיף חדשות ועוד.
                    </li>
                    <li>
                      <b className="marker">ניהול ספקי השירות:</b>חברות יכולות להוסיף ספקי שירות חדשים ולראות
                      את ההזמנות בלוח שנה כאירועים. הן יכולות גם לעקוב אחרי כל ההזמנות והרווחים של כל ספק.
                    </li>
                    <li>
                      <b className="marker">ניתוח נתונים:</b> אנו מספקים כלים מתקדמים לניתוח נתונים, המאפשרים
                      לחברות לעקוב אחרי הזמנות והרווחים לאורך הזמן ולקבל החלטות מבוססות נתונים.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="car-icons" id="disapeare-on-small-sizes">
                <ul>
                  <li>
                    <PiChartLineUpBold />{' '}
                  </li>
                  <li>
                    <BsBarChartLine />{' '}
                  </li>
                  <li>
                    <BsClockHistory />{' '}
                  </li>
                  <li>
                    <MdAttachMoney />{' '}
                  </li>
                  <li>
                    <SlCalender />{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="car-icons-right-sec" id="disapeare-on-small-sizes">
          <ul>
            <li>
              <SlCalender />{' '}
            </li>
            <li>
              <MdAttachMoney />{' '}
            </li>
            <li>
              <PiChartLineUpBold />{' '}
            </li>
            <li>
              <BsBarChartLine />{' '}
            </li>
            <li>
              <BsClockHistory />{' '}
            </li>
          </ul>
        </div>
        <div className="DocumentationiIcons-wraper">
          <div className="DocumentationiIcons-header">
            <h3 className="TContent">איך המוצר עובד?</h3>
            <div className="Empty-border-botoom"></div>
          </div>
          <div className="spec-icons-wrapper">
            <div className="icon-txt-wrapper">
              <span className="feature-icon">
                <FiUser />
              </span>
              <h2>הלקוח נרשם</h2>
            </div>
            <div className="icon-txt-wrapper">
              <span className="errow-icon">
                {' '}
                <AiOutlineArrowDown />{' '}
              </span>
            </div>
            <div className="icon-txt-wrapper">
              <span className="feature-icon">
                <GrInspect />
              </span>
              <h2 className="features-txt">בוחר בודקים</h2>
            </div>
            <div className="icon-txt-wrapper">
              <span className="errow-icon">
                {' '}
                <AiOutlineArrowDown />{' '}
              </span>
            </div>
            <div className="icon-txt-wrapper">
              <span className="feature-icon">
                <SlCalender />
              </span>
              <h2 className="features-txt">בוחר תאריך יום ושעה</h2>
            </div>
            <div className="icon-txt-wrapper">
              <span className="errow-icon">
                {' '}
                <AiOutlineArrowDown />{' '}
              </span>
            </div>
            <div className="icon-txt-wrapper">
              <span className="feature-icon">
                <GrSystem />
              </span>
              <h2 className="features-txt">מגיע למערכות החברה</h2>
            </div>
          </div>
        </div>
        <div className="car-icons-left-sec" id="disapeare-on-small-sizes">
          <ul>
            <li>
              <LiaStarSolid />{' '}
            </li>
            <li>
              <LiaStarSolid />{' '}
            </li>
            <li>
              <LiaStarSolid />{' '}
            </li>
            <li>
              <LiaStarSolid />{' '}
            </li>
            <li>
              <LiaStarSolid />{' '}
            </li>
          </ul>
        </div>
        <div className="car-icons-right-sec" id="disapeare-on-small-sizes">
          <ul>
            <li>
              <LiaStarSolid />{' '}
            </li>
            <li>
              <LiaStarSolid />{' '}
            </li>
            <li>
              <LiaStarSolid />{' '}
            </li>
            <li>
              <LiaStarSolid />{' '}
            </li>
            <li>
              <LiaStarSolid />{' '}
            </li>
          </ul>
        </div>

        <div className="wraperTwo-section">
          <div className="introduction-containerFirst">
            <div className="left-container">
              <div className={`describe-containerFirst visible`}>
                <h3 className="TContent">מטרה:</h3>
                <p className="TTcontent">
                  המשימה שלנו היא לגשר את הפער בין החברות הגדולות שמחפשות ארגון הזמנות עשיר וללקוחות המחפשים
                  חוויית הזמנה פשוטה ויעילה. באמצעות הצעת פלטפורמה המתאימה לשני הצדדים, אנו שואפים לשנות את
                  האופן בו עסקים ולקוחות נפגשים בענף השירותים. בין שאתם מחפשים התייעצויות מקצועיות, תורים או
                  שירותים אישיים, הפלטפורמה שלנו מחברת אתכם לספקי השירות האמינים. אנחנו מתרגשים להיות הפתרון
                  להזמנות חלקות ולניתוח נתונים חיוניים. סיירו באתר שלנו כדי לראות את הנוחות שבהזמנת ספקי
                  השירות בצורה חלקה, וגם לגלות את היכולות הניתוחיות החזקות שאנו מספקים.
                </p>
              </div>
            </div>
            <div className="car-icons-left-sec" id="disapeare-on-small-sizes">
              <ul>
                <li>
                  <LiaStarSolid />{' '}
                </li>
                <li>
                  <LiaStarSolid />{' '}
                </li>
                <li>
                  <LiaStarSolid />{' '}
                </li>
                <li>
                  <LiaStarSolid />{' '}
                </li>
                <li>
                  <LiaStarSolid />{' '}
                </li>
              </ul>
            </div>
            <div className="car-icons-right-sec" id="disapeare-on-small-sizes">
              <ul>
                <li>
                  <LiaStarSolid />{' '}
                </li>
                <li>
                  <LiaStarSolid />{' '}
                </li>
                <li>
                  <LiaStarSolid />{' '}
                </li>
                <li>
                  <LiaStarSolid />{' '}
                </li>
                <li>
                  <LiaStarSolid />{' '}
                </li>
              </ul>
            </div>
          </div>

          <div className="introduction-containerSeconed">
            <div className="left-container">
              <div className="image-containerSeconed">
                <span
                  style={{
                    fontSize: '55px',
                  }}>
                  <CiCalculator1 />
                </span>
              </div>
            </div>

            <div className="right-container">
              <div className={`describe-containerFirst visible`}>
                <h3 className="TContent">איך להשתמש באפליקציה:</h3>
                <p className="TTcontent">
                  <ul style={{ listStyle: 'square' }}>
                    <li>
                      <b className="marker">הרשמה:</b>
                      הירשמו לחשבון בפלטפורמה שלנו כדי לגשת לשירותים שלנו.
                    </li>
                    <li>
                      <b className="marker">חקרו קטגוריות:</b>
                      עיינו במגוון הקטגוריות השונות למציאת מה שאתם צריכים.
                    </li>
                    <li>
                      <b className="marker">צפו בספקים:</b>
                      ראו רשימה של ספקי שירות זמינים בתוך הקטגוריה שבחרתם.
                      <li>
                        <b className="marker">בדקו זמינות:</b>
                        בחרו ספק ובדקו את הזמינות בזמן אמת.
                      </li>
                    </li>
                    <li>
                      <b className="marker">הזמינו תור:</b>
                      בחרו זמן מתאים ואשרו את ההזמנה שלכם.
                    </li>
                    <li>
                      <b className="marker">ניהול הזמנות: </b>
                      לאחר ההזמנה, גשו ללוח הבקרה האישי שלכם כדי לראות ולנהל את ההזמנות שלכם.
                    </li>
                    <li>
                      <b className="marker">ספקי השירות:</b> לחברות, הוסיפו ספקי שירות חדשים ונהלו את ההזמנות
                      שלהם ביומן.
                    </li>
                    <li>
                      <b className="marker">ניתוח נתונים: </b>
                      השתמשו בכלי הניתוחים המתקדמים כדי לעקוב אחרי הזמנות ורווחים לאורך הזמן.
                    </li>
                  </ul>
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

export default memo(Main);
