export default function Contact() {
  return (
    <main>
      <h1>Contact</h1>
      <form>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Subject
          <input type="text" name="subject" />
        </label>
        <label>
          Message
          <textarea name="message" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}