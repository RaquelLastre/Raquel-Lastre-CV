import { useEffect, useState } from "react";

export const BotonTema = () => {
  const [tema, setTema] = useState("claro");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
  }, [tema]);
  return (
    <button onClick={() => setTema(tema === "claro" ? "oscuro" : "claro")}>
      {tema === "claro" ? <i class="fa-solid fa-moon"></i> : <i class='fa-solid fa-lightbulb'></i>}
    </button>
  )
}
