import React from "react";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contact_us">
      <div className="title_contact">
        <p>Свяжитесь с нами</p>
        <h3>Офисы GSL Productions</h3>
        <div className="line_title"></div>
      </div>
      <div className="adresses">
        <p>
          Офисы GSL Productions расположены в ключевых городах, предоставляя
          поддержку нашим творческим командам и обеспечивая высокое качество
          производства. Мы стремимся создавать вдохновляющий и продуктивный
          рабочий климат для всех сотрудников.
        </p>
        <div className="office_1">
          <h5>Офис 01</h5>
          <p>
            500 Терри Франсин Стрит, Сан-Франциско, CA 94158 info@mysite.com
            Тел.: 123-456-7890
          </p>
        </div>
        <div className="office_2">
          <h5>Офис 02</h5>
          <p>
            500 Терри Франсин Стрит, Сан-Франциско, CA 94158 info@mysite.com
            Тел.: 123-456-7890
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
