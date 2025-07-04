import { useEffect, useState } from "react";
import "./App.css";
import ButtonQuestionMenu from "./components/buttonQuestionMenu";
import { questions } from "./utils/questões";

function App() {
  const [menu, setMenu] = useState(Object.keys(questions));
  const [question, setQuestion] = useState(questions);
  const [totalQuestion, setTotalQuestion] = useState(0);

  useEffect(() => {
    const total = menu.reduce((acc, cat) => acc + question[cat].length, 0);
    setTotalQuestion(total);
  }, [menu, question]);

  return (
    <>
      <div className="app">
        <h2>Simulado Dentra</h2>
        <div className="categorias">
          {menu.map((categorias, index) => (
            <ButtonQuestionMenu key={index} question={index} to={"prova"} className='btn'>
              {categorias}
              <br />
              {/*Questões: {question[categorias].length}*/}
            </ButtonQuestionMenu>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
