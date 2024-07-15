import "./footer.css";

export default function Footer({
  onSubscribeEnter,
  onSubscribeExit,
  onLinkEnter,
  onLinkExit,
}) {
  const linkSections = [
    {
      title: "Use Cases",
      links: [
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
      ],
    },
    {
      title: "Company",
      links: [
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
      ],
    },
    {
      title: "Modules",
      links: [
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
      ],
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

  const socials = [
    {
      iconPath: "/icons/linkedin.svg",
      link: "https://www.linkedin.com/company/evermorrow-labs/",
    },
    {
      iconPath: "/icons/instagram.svg",
      link: "https://www.instagram.com/evermorrowlabs/",
    },
    {
      iconPath: "/icons/x.svg",
      link: "https://www.x.com/evermorrowlabs/",
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
              <button
                onMouseEnter={onSubscribeEnter}
                onMouseLeave={onSubscribeExit}
              >
                Subscribe
              </button>
            </div>
          </div>
          {linkSections.map((linkSection, ind) => {
            return (
              <div className="footer-comp" key={ind}>
                <h3>{linkSection.title}</h3>
                <div className="footer-links">
                  {linkSection.links.map((l) => {
                    return (
                      <a
                        href={l.link}
                        key={l.link}
                        target="_blank"
                        onMouseEnter={onLinkEnter}
                        onMouseLeave={onLinkExit}
                      >
                        {l.text}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer-below">
          <div className="footer-below-left">
            <p>© 2024 Evermorrow labs</p>
            <div className="footer-cc-links">
              {ccLinks.map((l) => {
                return (
                  <a
                    href={l.link}
                    key={l.link}
                    target="_blank"
                    onMouseEnter={onLinkEnter}
                    onMouseLeave={onLinkExit}
                  >
                    {l.text}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footer-below-right">
            {socials.map((social) => {
              return (
                <a
                  href={social.link}
                  key={social.link}
                  target="_blank"
                  onMouseEnter={onLinkEnter}
                  onMouseLeave={onLinkExit}
                >
                  <img src={social.iconPath} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
