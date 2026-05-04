function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-code">{'// Albert Formatger © '}{year}</span>
        <span className="footer-made">Built with React.js + CSS3</span>
      </div>
    </footer>
  )
}

export default Footer
