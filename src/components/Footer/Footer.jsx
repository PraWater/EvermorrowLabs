import "./footer.css";

export default function Footer() {
  const company = [
    {
      link: "https://evermorrow-labs.vercel.app/",
      text: "Team",
    },
    {
      link: "https://evermorrow-labs.vercel.app/",
      text: "Careers",
    },
    {
      link: "https://evermorrow-labs.vercel.app/",
      text: "Contact Us",
    },
  ];

  const connectPaths = [
    "/icons/instagram.svg",
    "/icons/linkedin.svg",
    "/icons/twitterx.svg",
  ];

  return (
    <div className="footer">
      <img src="/footerTop.svg" />
      <div className="footer-content">
        <img className="evermorrow" src="/evermorrowFull.png" />
        <div className="contact">
          <h3 className="subtitle">Company</h3>
          {company.map((c) => {
            return (
              <a className="entry" href={c.link} key={c.text} target="_blank">
                {c.text}
              </a>
            );
          })}
        </div>
        <div className="connect">
          <h3 className="subtitle">Connect</h3>
          <div className="social-icons">
            {connectPaths.map((c) => {
              return (
                <div className="social-icon" key={c}>
                  <img src={c} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
