import "./footer.css";

export default function Footer() {
  const contacts = [
    {
      iconPath: "/icons/map-marker.svg",
      text: "1901 Thornridge Cir, Shiloh, Hawaii 81063",
    },
    {
      iconPath: "/icons/mail.svg",
      text: "evermorrowgames@gmail.com",
    },
    {
      iconPath: "/icons/phone.svg",
      text: "9390145617",
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
          <h3 className="subtitle">Contact</h3>
          {contacts.map((contact) => {
            return (
              <div className="entry" key={contact.iconPath}>
                <img src={contact.iconPath} />
                <p>{contact.text}</p>
              </div>
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
