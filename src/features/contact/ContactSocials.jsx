function ContactSocials() {
  const socials = [
    {
      social: "email",
      un: "jrdjoevin@gmail.com",
      href: "mailto:jrdjoevin@gmail.com",
    },
    {
      social: "instagram",
      un: "@jrd_joe",
      href: "https://www.instagram.com/jrd_joe",
    },
    {
      social: "github",
      un: "JerrardJ",
      href: "https://github.com/JerrardJ/",
    },
    {
      social: "linkedin",
      un: "Jerrard Joevin",
      href: "https://www.linkedin.com/in/jerrard-joevin/",
    }
  ];
  return (
    <div className="line-container flex flex-col">
      <p className="  text-3xl text-textColor">Let's Connect! </p>
      <div className="flex flex-col space-y-2 pt-5">
        <p className="line text-base text-textColor md:text-2xl">
          .socials &#123;{" "}
        </p>
        {socials.map((social) => {
          return (
            <div className="  line text-base md:text-2xl" key={social.social}>
              <span className="pl-5 text-textColor md:pl-8">
                {social.social}:
              </span>
              <a
                className=" pl-2 text-base text-accentColor hover:underline md:text-2xl"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.un};
              </a>
            </div>
          );
        })}
        <p className="line text-base text-textColor md:text-2xl">&#125;</p>
      </div>
    </div>
  );
}

export default ContactSocials;
