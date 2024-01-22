import { useContext } from "react";
import { LevelContext } from "./context/LevelContext"

export default function Section({children}){
  const level = useContext(LevelContext); //위에서 전달되는 useContext level을 읽겠다는 뜻
  return (
    <section className="section">
      <LevelContext.Provider value={level+1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}