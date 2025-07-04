import { useNavigate } from "react-router-dom";
import { questions } from "../utils/questões";

function ButtonQuestionMenu({ children, question, ...props }) {
  const navegate = useNavigate();

  function handleIndex(index) {
    const question = Object.keys(questions)[index];
    navegate("/prova", { state: question });
  }
  return (
    <>
      <button {...props} onClick={() => handleIndex(question)}>
        {children}
      </button>
    </>
  );
}

export default ButtonQuestionMenu;