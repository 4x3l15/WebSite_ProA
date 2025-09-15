import React, { useEffect, useMemo, useState } from "react";

// Helpers
const pad = (n) => String(n).padStart(2, "0");
const toKey = (date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function addMonths(date, n) {
  return new Date(date.getFullYear(), date.getMonth() + n, 1);
}
function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
function buildMonthMatrix(year, month) {
  const first = new Date(year, month, 1);
  const startDay = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const grid = [];
  let dayCounter = 1 - startDay;
  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(year, month, dayCounter);
      week.push(date);
      dayCounter++;
    }
    grid.push(week);
  }
  return grid;
}

const API_URL = "http://localhost:5000/api/events";

function Calendario() {
  const today = new Date();
  const [cursor, setCursor] = useState(startOfMonth(today));
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEvent, setNewEvent] = useState("");

  // 🔹 Cargar eventos desde la base de datos
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error cargando eventos:", err));
  }, []);

  // 🔹 Guardar un nuevo evento
  async function addEvent() {
    if (!newEvent.trim() || !selectedDate) return;
    const newEv = { title: newEvent, date: toKey(selectedDate) };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEv),
      });
      const saved = await res.json();
      setEvents([...events, saved]);
      setNewEvent("");
      setSelectedDate(null);
    } catch (err) {
      console.error("Error guardando evento:", err);
    }
  }

  function eventsOn(date) {
    const key = toKey(date);
    return events.filter((ev) => ev.date === key);
  }

  const grid = useMemo(
    () => buildMonthMatrix(cursor.getFullYear(), cursor.getMonth()),
    [cursor]
  );

  const monthName = cursor.toLocaleDateString("es-AR", {
    month: "long",
    year: "numeric",
  });

  const weekDayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  return (
    <div className="calendario-container">
      <div className="calendario-card">
        <div className="calendario-header">
          <button onClick={() => setCursor(addMonths(cursor, -1))}>{"<"}</button>
          <h2>{monthName}</h2>
          <button onClick={() => setCursor(addMonths(cursor, 1))}>{">"}</button>
        </div>

        <div className="calendario-grid">
          {weekDayNames.map((d) => (
            <div key={d} className="calendario-dia-semana">
              {d}
            </div>
          ))}
          {grid.flat().map((date, idx) => {
            const inMonth = date.getMonth() === cursor.getMonth();
            const isToday = isSameDay(date, new Date());
            const isSelected = selectedDate && isSameDay(date, selectedDate);
            const dayEvents = eventsOn(date);

            return (
              <div
                key={idx}
                className={`calendario-dia 
                  ${inMonth ? "" : "fuera-mes"} 
                  ${isToday ? "hoy" : ""} 
                  ${isSelected ? "seleccionado" : ""}`}
                onClick={() => setSelectedDate(date)}
              >
                <div>{date.getDate()}</div>
                <ul>
                  {dayEvents.map((ev) => (
                    <li key={ev._id}>{ev.title}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {selectedDate && (
          <div className="calendario-evento">
            <h3>Agregar evento para {selectedDate.toLocaleDateString()}</h3>
            <input
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              placeholder="Título del evento"
            />
            <button onClick={addEvent}>Guardar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendario;
