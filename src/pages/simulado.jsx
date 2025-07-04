import { useLocation, useNavigate } from "react-router-dom";
import { questions } from "../utils/questões";
import "./style.css";
import { useEffect, useState } from "react";

function Simulado() {
  const location = useLocation();
  const question = location.state;
  const [questaoAtual, setQuestaoAtual] = useState(0);

  const [proxima, setProxima] = useState(false);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);
  const [resultadoSimulado, setResultadoSimulado] = useState(false);

  const al = questions[question][questaoAtual].alternativas;

  const [tentativas, setTentativas] = useState(0);
  const [falas, setFalas] = useState([
    "Vixi, Pedro... tenta de novo, vai!",
    "Calma, Pedro! Uma hora acerta.",
    "Errou feio, Pedro. Mas tá valendo!",
    "Pedro, essa até minha avó sabia!",
    "Oxe, Pedro! Nem chutou direito!",
    "Pedro, meu filho... tá dormindo aí?",
    "Pelo amor, Pedro! Se concentra!",
    "Pedro, você treinou pra isso?",
    "Rapaz, Pedro... quase, viu?",
    "Pedro, você tá de sacanagem, né?",
    "Tenta outra, Pedro. Essa não foi!",
    "Errou, Pedro! Mas tá com estilo.",
    "Essa aí te enganou, Pedro!",
    "Foi por pouco, Pedro! Bora pra próxima.",
    "Pedro, tu tá de brincadeira?",
    "Pedro... essa era pra acertar de olho fechado!",
    "Pedro, eu acredito em você... mas tá difícil!",
  ]);

  const naviagete = useNavigate();

  function pegaResposta(resposta) {
    setRespostaSelecionada(resposta);
    setProxima(true);
  }

  function resultado() {
    if (respostaSelecionada === questions[question][questaoAtual].correta) {
      setPontuacao((acc) => acc + 1);
    }
  }

  function proximaQuestao() {
    resultado();
    if (questaoAtual < questions[question].length - 1) {
      setProxima(false);
      setRespostaSelecionada(null);
      setQuestaoAtual((acc) => acc + 1);
    } else if (questaoAtual === questions[question].length - 1) {
      setResultadoSimulado(true);
    }
  }

  function IniciarNovamente() {
    setQuestaoAtual(0);
    setPontuacao(0);
    setRespostaSelecionada(null);
    setResultadoSimulado(false);
    if (tentativas < falas.length - 1) {
      setTentativas((acc) => acc + 1);
    } else if (tentativas === falas.length - 1) {
      setTentativas(0);
    }
  }

  return (
    <>
      <div className="container-simulado">
        <h2>{question}</h2>

        <p>
          Questão: {questaoAtual + 1}/{questions[question].length}
        </p>

        <div>
          <h2 style={{ marginTop: "10%", textAlign:'center' }}>
            {!resultadoSimulado
              ? questions[question][questaoAtual].pergunta
              : ""}
          </h2>

          {!resultadoSimulado ? (
            al.map((i, index) => (
              <div
                className="container"
                key={index}
                onClick={() => pegaResposta(index)}
              >
                <button
                  style={{
                    backgroundColor:
                      respostaSelecionada === index ? "rgb(103, 162, 177)" : "", // cor verde se for a selecionada
                    color: respostaSelecionada === index ? "white" : "", // texto branco (opcional)
                  }}
                  className="btn-s"
                >
                  {i}
                </button>
              </div>
            ))
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>
                Você acertou: {pontuacao} de {questions[question].length}
              </h2>
              {pontuacao / questions[question].length >= 0.7 ? (
                <p>Aprovado!</p>
              ) : (
                <div style={{ textAlign: "center" }}>
                  Reprovado!
                  <br />
                  <p style={{ fontSize: "1.5rem" }}>{falas[tentativas]}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {!resultadoSimulado ? (
          proxima ? (
            <button
              style={{
                width: "70%",
                height: "50px",
                marginTop: "30px",
              }}
              onClick={() => proximaQuestao()}
            >
              Proxima questão
            </button>
          ) : (
            ""
          )
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                width: "70%",
                height: "50px",
                marginTop: "30px",
              }}
              onClick={() => IniciarNovamente()}
            >
              Iniciar novamente?
            </button>
            <button
              style={{
                width: "70%",
                height: "50px",
                marginTop: "30px",
              }}
              onClick={() => naviagete("/")}
            >
              Menu
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Simulado;
