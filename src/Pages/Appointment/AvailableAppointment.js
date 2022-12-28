import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://doctor-portal-server-v750.onrender.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary font-bold text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
