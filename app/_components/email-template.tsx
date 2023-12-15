import * as React from 'react';

interface EmailTemplateProps {
  message: string,
  name: string

}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message, name
}) => (
  <div>
    <p>From: {name}</p>
    <p>{message}</p>
  </div>
);
