function Footer() {
  return (
    <div style={{ marginTop: "10rem" }}>
      <nav className="justify-content-center bg-dark p-4 fixed-bottom">
        <p className="text-light text-center">
          Copyright {new Date().getFullYear()}  by<span className="fst-italic text-danger fs-4 fw-semibold badge font-monospace">MURAT KAPLAN</span>
        </p>
      </nav>
    </div>
  );
}

export default Footer;
