import React from 'react';

import EmailIcon from '/public/email.svg';
import GithubIcon from '/public/github.svg';
import LinkedInIcon from '/public/linkedin.svg';

export default function SocialIcons({iconClass = 'btn-icon'}: {iconClass?: string}) {
  return (
    <ul className="flex justify-center gap-2 lg:justify-start">
      <li>
        <a
          aria-label="go to github"
          target={'_blank'}
          href="https://github.com/wghglory"
          className={iconClass}
          rel="noreferrer"
        >
          <GithubIcon className="w-8" />
        </a>
      </li>
      <li>
        <a
          aria-label="go to linkedin"
          target={'_blank'}
          href="https://www.linkedin.com/in/guanghuiwang/"
          className={iconClass}
          rel="noreferrer"
        >
          <LinkedInIcon className="w-8" />
        </a>
      </li>
      <li>
        <a aria-label="send email" href="mailto:guanghui-wang@foxmail.com" className={iconClass}>
          <EmailIcon className="w-8" />
        </a>
      </li>
    </ul>
  );
}
