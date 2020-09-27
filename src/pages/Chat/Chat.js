import React, { useState, useEffect } from "react";
import "./Chat.css";
import JellyItem from "./JellyItem/JellyItem";
import UserItem from "./UserItem/UserItem";
import InputChat from "./InputChat/InputChat";
import Select from "./Select/Select";
import { doing, aboutMe } from "../../data/Actions";
import Fade from "react-reveal/Fade";

const Chat = () => {
  let idCounter = 0;

  //Cada mensaje va a ser un objeto
  const [mensaje, setMensaje] = useState({});
  //Todos los mensajes del chat se almacenan en un array de objetos.
  const [chat, setChat] = useState([
    {
      id: 0,
      emitter: "Jelly",
      msg: ["¡Hola!", " ¿Cual es tu nombre?"],
    },
  ]);

  const [openSelect, setOpenSelect] = useState(false);

  function firstResponse(name) {
    let newChat = {
      id: idCounter + 2,
      emitter: "Jelly",
      msg: [
        "Mucho gusto, " + name + "!",
        "Mi nombre es Jelly, soy un chatbot en desarrollo",
        "Hazme una pregunta de la lista",
      ],
    };
    if (newChat) {
      setChat([...chat, newChat]);
    }
  }

  useEffect(() => {
    //Cuando se hace una modificacion en la app, reaccione e inicialice la funcion firstResponse
    //cuando chat tenga 2 objetos
    if (chat.length === 2) {
      //esperar que los estados se actualicen
      setTimeout(() => firstResponse(mensaje.msg), 500);
      //Limpiamos el input del nombre enviado atraves del prop message
      setMensaje({ ...mensaje, msg: "" });
      setTimeout(() => setOpenSelect(true), 600);
    }
    //Ante una modificacion del chat se ejecute
  }, [chat]);

  function getMeMessage(value) {
    idCounter = idCounter + 1;
    setMensaje({
      id: idCounter,
      emitter: "user",
      msg: value,
    });
  }

  function sendMessage(e) {
    //preventDefault evita que se refresque la pantalla.
    e.preventDefault();
    setChat([...chat, mensaje]);
  }

  let options = [
    {
      id: "What are you doing?",
      text: "¿Qué hacés?",
    },
    /* {
      id: "Send me a meme",
      text: "Mandame un meme",
    }, */
    {
      id: "Tell me about you",
      text: "Contame sobre vos",
    },
  ];

  //Constante encargada de almacenar las interacciones
  const [interactions, setInteractions] = useState([]);

  function handleSelectedOptions(value) {
    let result;
    switch (value) {
      case "What are you doing?":
        result = doing[Math.floor(Math.random() * doing.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;

      case "Tell me about you":
        result = aboutMe[Math.floor(Math.random() * aboutMe.length)];
        if (result) {
          setInteractions([...interactions, result.msg]);
        }
        break;
      default:
        console.log("No hay valores");
    }
  }

  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
            {chat.map((message, index) =>
              message.emitter === "Jelly" ? (
                <JellyItem key={index} text={message.msg} />
              ) : (
                <UserItem key={index} text={message.msg} />
              )
            )}
            {openSelect && (
              <Select
                handleSelectedOptions={handleSelectedOptions}
                options={options}
              />
            )}
            {
              //Cuando ya no sea un array vacio
              interactions.length > 0 &&
                interactions.map((interaction, index) => (
                  <>
                    <Fade left>
                      <JellyItem key={index} text={interaction}></JellyItem>
                    </Fade>
                    <Select
                      key={index}
                      handleSelectedOptions={handleSelectedOptions}
                      options={options}
                    />
                  </>
                ))
            }
          </div>
          <div className="chatbot-chat-container-input">
            <InputChat
              chat={chat}
              message={mensaje}
              getMeMessage={getMeMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
