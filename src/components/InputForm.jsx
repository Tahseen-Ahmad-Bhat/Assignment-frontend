import React, { useContext, useState } from "react";
import Button from "./Button";
import { sendText } from "../api/inputText";
import { NotificationContext } from "../context/NotificationProvider";
import "./InputForm.css";

const validateUserInput = (text) => {
  try {
    if (!text.trim())
      return { ok: "false", msg: "Please enter some text to process!" };
    return { ok: "true" };
  } catch (error) {
    return { ok: "false", msg: error.message };
  }
};

export const InputForm = (props) => {
  const [text, setText] = useState("");

  const { updateNotification } = useContext(NotificationContext);

  const handleChange = (e) => {
    const { value } = e.target;

    setText(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { ok, msg } = validateUserInput(text);
    console.log(ok);
    if (ok === "false") return updateNotification(msg);

    const { message, error } = await sendText(text);
    if (error) return updateNotification(message);

    setText("");
    // console.log(res);
    updateNotification(message);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-field">
        <input
          value={text}
          type="text"
          id="name"
          required
          onChange={handleChange}
        />
        <label htmlFor="name">Enter text here:</label>
      </div>

      <Button />
    </form>
  );
};
