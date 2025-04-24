import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <h1>Kontakt</h1>
      <p>Schreibe uns, wenn du Fragen hast!</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="message">Nachricht:</label>
        <textarea id="message" name="message" required></textarea>
        <br />
        <button type="submit">Absenden</button>
      </form>
    </Layout>
  );
};

export default Contact;
