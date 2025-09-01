import React, { useEffect, useMemo, useState } from "react";

// Helpers
const pad = (n) => String(n).padStart(2, "0");
const toKey = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const parseKey = (key) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
};

function startOfMonth(date){ return new Date(date.getFullYear(), date.getMonth(), 1); }
function addMonths(date, n){ return new Date(date.getFullYear(), date.getMonth() + n, 1); }
function isSameDay(a,b){ return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate(); }

function buildMonthMatrix(year, month){
  const first = new Date(year, month, 1);
  const startDay = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const grid = [];
  let dayCounter = 1 - startDay;
  for (let w = 0; w < 6; w++){
    const week = [];
    for (let d = 0; d < 7; d++){
      const date = new Date(year, month, dayCounter);
      week.push(date);
      dayCounter++;
    }
    grid.push(week);
  }
  return grid;
}

const STORAGE_KEY = "school_calendar_events_v1";

function Calendario(){
  const today = new Date();
  const [cursor, setCursor] = useState(startOfMonth(today));
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEvent, setNewEvent] = useState("");

  useEffect(()=>{
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      if(raw){ setEvents(JSON.parse(raw)); }
    }catch(e){ }
  },[]);
  useEffect(()=>{
    try{
      localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    }catch(e){ }
  },[events]);

  const grid = useMemo(()=>buildMonthMatrix(cursor.getFullYear(), cursor.getMonth()), [cursor]);
  const monthName = cursor.toLocaleDateString("es-AR", { month: "long", year: "numeric" });

  function addEvent(){
    if(!newEvent.trim() || !selectedDate) return;
    setEvents([...events, { id: crypto.randomUUID(), date: toKey(selectedDate), title: newEvent }]);
    setNewEvent("");
    setSelectedDate(null);
  }

  function eventsOn(date){
    const key = toKey(date);
    return events.filter(ev => ev.date === key);
  }

  const weekDayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  return (
    <div style={{padding:"20px", maxWidth:"900px", margin:"0 auto", background:"#7793e1", borderRadius:"10px"}}>
      <div style={{display:"flex", justifyContent:"space-between", marginBottom:"10px", alignItems:"center"}}>
        <button 
          onClick={()=>setCursor(addMonths(cursor,-1))} 
          style={{background:"#b8c6ef", color:"white", border:"none", padding:"5px 10px", borderRadius:"5px"}}
        >{"<"}</button>
        <h2 style={{color:"#0c1839"}}>{monthName}</h2>
        <button 
          onClick={()=>setCursor(addMonths(cursor,1))} 
          style={{background:"#b8c6ef", color:"white", border:"none", padding:"5px 10px", borderRadius:"5px"}}
        >{">"}</button>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(7, 1fr)", border:"1px solid #ccc"}}>
        {weekDayNames.map((d) => (
          <div 
            key={d} 
            style={{
              padding:"5px", 
              background:"#b8c6ef", 
              textAlign:"center", 
              fontWeight:"bold", 
              color:"#fff"
            }}
          >
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
              style={{
                minHeight:"100px",
                padding:"5px",
                border:"1px solid #eee",
                background: isSelected
                  ? "#b8c6efF"
                  : isToday
                    ? "#b8c6ef"
                    : inMonth
                      ? "white"
                      : "#f9f9f9",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onClick={()=>setSelectedDate(date)}
            >
              <div style={{fontWeight: isToday ? "bold" : "normal"}}>{date.getDate()}</div>
              <ul style={{fontSize:"12px", marginTop:"5px"}}>
                {dayEvents.map(ev => (
                  <li key={ev.id}>{ev.title}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div style={{marginTop:"20px", border:"1px solid #ddd", padding:"10px", background:"#b8c6ef", borderRadius:"8px"}}>
          <h3 style={{color:"#3176F5"}}>Agregar evento para {selectedDate.toLocaleDateString()}</h3>
          <input 
            value={newEvent} 
            onChange={e=>setNewEvent(e.target.value)} 
            placeholder="Título del evento" 
            style={{
              padding:"8px",
              borderRadius:"4px",
              border:"1px solid #ccc",
              marginRight:"10px",
              width:"60%"
            }}
          />
          <button 
            onClick={addEvent}
            style={{
              background:"#3176F5", 
              color:"white", 
              border:"none", 
              padding:"8px 12px", 
              borderRadius:"5px"
            }}
          >
            Guardar
          </button>
        </div>
      )}
    </div>
  );
}

export default Calendario;
