import "./footer.css";

export default function Footer() {
  const linkSections = ["Use Cases", "Company", "Modules"];

  const firstLinks = [
    {
      text: "User onboarding & activation",
      link: "1something.com",
    },
    {
      text: "Feature adoption",
      link: "2something.com",
    },
    {
      text: "Engagement",
      link: "3something.com",
    },
    {
      text: "Conversion & Monetization",
      link: "4something.com",
    },
    {
      text: "User research & Insights",
      link: "5something.com",
    },
  ];

  const secondLinks = [
    {
      text: "How it works",
      link: "1something.com",
    },
    {
      text: "Blog",
      link: "2something.com",
    },
    {
      text: "Contact",
      link: "3something.com",
    },
    {
      text: "Glossary",
      link: "4something.com",
    },
  ];

  const thirdLinks = [
    {
      text: "Blog",
      link: "2something.com",
    },
    {
      text: "How it works",
      link: "1something.com",
    },
    {
      text: "Glossary",
      link: "4something.com",
    },
    {
      text: "Contact",
      link: "3something.com",
    },
  ];

  const ccLinks = [
    {
      text: "terms",
      link: "1something.com",
    },
    {
      text: "privacy",
      link: "2something.com",
    },
    {
      text: "refund",
      link: "3something.com",
    },
    {
      text: "data retention policy",
      link: "4something.com",
    },
  ];
  return (
    <div className="footer">
      <img src="/footerTop.svg" />
      <div className="footer-content">
        <div className="footer-above">
          <div className="footer-subscribe">
            <p>Subscribe for updates</p>
            <div className="footer-input">
              <input placeholder="your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer-comp">
            <h3>{linkSections[0]}</h3>
            <div className="footer-links">
              {firstLinks.map((l) => {
                return (
                  <a href={l.link} key={l.link} target="_blank">
                    {l.text}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footer-comp">
            <h3>{linkSections[1]}</h3>
            <div className="footer-links">
              {secondLinks.map((l) => {
                return (
                  <a href={l.link} key={l.link} target="_blank">
                    {l.text}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footer-comp">
            <h3>{linkSections[2]}</h3>
            <div className="footer-links">
              {thirdLinks.map((l) => {
                return (
                  <a href={l.link} key={l.link} target="_blank">
                    {l.text}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="footer-below-left">
              <p>© 2024 Evermorrow labs</p>
              <div className="footer-cc-links">
                {ccLinks.map((l) => {
                  return (
                    <a href={l.link} key={l.link} target="_blank">
                      {l.text}
                    </a>
                  );
                })}
              </div>
          </div>
          <div className="footer-below-right">
            <img src="/icons/linkedin.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
