import React from 'react';

import EmailIcon from '/public/email.svg';
import GithubIcon from '/public/github.svg';
import LinkedInIcon from '/public/linkedin.svg';

export default function SocialIcons() {
  return (
    <ul className="flex justify-center gap-2 lg:justify-start">
      <li>
        <a target={'_blank'} href="https://github.com/wghglory" className="btn-icon" rel="noreferrer">
          <GithubIcon className="w-8" />
        </a>
      </li>
      <li>
        <a target={'_blank'} href="https://www.linkedin.com/in/guanghuiwang/" className="btn-icon" rel="noreferrer">
          <LinkedInIcon className="w-8" />
        </a>
      </li>
      <li>
        <a href="mailto:guanghui-wang@foxmail.com" className="btn-icon">
          <EmailIcon className="w-8" />
        </a>
      </li>
    </ul>
  );
}
