import React from 'react'

import Item from "./components/Item";
import "./styles.css";

const Contact = () => {
  return (
    <section className="Section-Items">
    <h1>Formulário</h1>

    <form>
        <label for="fname">Nome:</label>
        <input type="text" id="fname" name="fname" /><br /><br />
        <label for="lname">Sobrenome:</label>
        <input type="text" id="lname" name="lname" /><br /><br />
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" /><br /><br />
        <label for="subject">Mensagem:</label>
        <textarea id="subject" name="subject" placeholder="Escreva sua mensagem aqui..." style={{ height: "200px" }}></textarea><br /><br />
        <input type="submit" value="Enviar" />
      </form>
    
  </section>
  )
}

export default Contact;