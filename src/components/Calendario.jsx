import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";

function Calendario() {
  const [dateValue, setDateValue] = useState(new Date());
  const [fechasTutorias] = useState([
    new Date("2023-10-05"),
    new Date("2023-10-10"),
    new Date("2023-10-15"),
  ]);

  const formatDate = (date) => {
    const formattedDate = dayjs(date).format("DD/MM/YYYY");
    const hasTutoria = fechasTutorias.some((tutoriaDate) =>
      dayjs(tutoriaDate).isSame(date, "day")
    );
    return hasTutoria
      ? `${formattedDate} - Hay una tutoría programada`
      : formattedDate;
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://www.roc21.com/blog/wp-content/uploads/2012/09/fondos-para-pa%CC%81ginas-web-6.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={backgroundStyle}>
      <Calendar
        minDate={new Date()}
        selectRange={true}
        onChange={(value) => setDateValue(value)}
        value={dateValue}
        tileContent={({ date, view }) => {
          if (view === "month") {
            const content = formatDate(date);
            return <p>{content}</p>;
          }
        }}
      />
    </div>
  );
}

export default Calendario;
