import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointment, setAppointment] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      const url = `http://localhost:5000/booking?patient=${user.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setAppointment(data));
    }
  }, [user]);
  return (
    <div>
      <h2>My Appointments: {appointment.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((a) => (
              <tr>
                <th>1</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
