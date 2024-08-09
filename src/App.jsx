import { useState } from "react";
import data from "./../status_antrean.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex flex-col space-y-4 p-6">
      <div className="w-full flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-end md:space-x-3">
        <DatePicker
          className="btn btn-outline btn-info"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>

      <div className="card card-bordered overflow-x-auto">
        <table className="table table-xl table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="w-12">No</th>
              <th>Kode Booking</th>
              <th>Nomer Rekam Medis</th>
              <th>Nama Pasien</th>
              <th>Nomer Antrian</th>
              <th>Kode Poli</th>
              <th>Nama Poli</th>
              <th>Kode Dokter</th>
              <th>Nama Dokter</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((el, i) => (
              <tr key={el?.noantrean}>
                <td>{i + 1}</td>
                <td>{el?.kodebooking}</td>
                <td>{el?.norekammedis}</td>
                <td>-</td>
                <td>{el?.noantrean}</td>
                <td>{el?.kodepoli}</td>
                <td>-</td>
                <td>{el?.kodedokter}</td>
                <td>-</td>
                <td>
                  <span
                    className={
                      el.status === "Batal"
                        ? "badge badge-error"
                        : el.status === "Sedang Dilayani"
                        ? "badge badge-info"
                        : "badge badge-success"
                    }
                  >
                    {el?.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
