export default function Contact() {
  return (
    <div className="container" style={{ maxWidth: '600px', background: '#fff', padding: '30px', borderRadius: '8px' }}>
      <h2>📬 Contact News Desk</h2>
      <p style={{ color: '#666', margin: '10px 0 20px' }}>Have a scoop or feedback? Get in touch with our editorial department.</p>
      <form onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email Address" required />
        <textarea placeholder="Type your message here..." rows="5" required></textarea>
        <button type="submit" style={{ background: '#111', color: '#fff', padding: '12px 20px' }}>Send Message</button>
      </form>
    </div>
  );
}