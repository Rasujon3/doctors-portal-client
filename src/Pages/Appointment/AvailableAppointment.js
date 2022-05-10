import React, { useEffect, useState } from "react";
import { format } from "date-fns";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `services.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h4 className="text-xl text-secondary font-bold text-center">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div>card</div>
    </div>
  );
};

export default AvailableAppointment;
