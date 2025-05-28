import React from "react";
import { BackgroundEffects } from "./BackgroundEffects"; // adjust the import path as needed

const socialLinks = [
  {
    href: "https://github.com/Varshil25",
    label: "GitHub",
    icon: (
      <svg width="24" height="24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1-2.75-.1-.26-.44-1.3.09-2.7 0 0 .83-.27 2.75 1.02A9.38 9.38 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.29 2.75-1.02 2.75-1.02.53 1.4.19 2.44.09 2.7.62.72 1 1.63 1 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/Varshil2507",
    label: "LinkedIn",
    icon: (
      <svg width="24" height="24" fill="currentColor" aria-hidden="true">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/varshil.2507",
    label: "Instagram",
    icon: (
      <svg width="24" height="24" fill="currentColor" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-2.38a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26z" />
      </svg>
    ),
  },
  {
    href: "mailto:pvarshild.25@gmail.com",
    label: "Email",
    icon: (
      <svg width="24" height="24" fill="currentColor" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.23l7.38 6.34c.38.33.94.33 1.32 0L20 8.23V18H4z" />
      </svg>
    ),
  },
];

const Footer = () => (
  <footer
    style={{
      background: "#222",
      color: "#fff",
      padding: "1.5rem 0",
      textAlign: "center",
      marginTop: "2rem",
      position: "relative", // important for blobs
      overflow: "hidden",   // hides blobs overflowing the container
    }}
  >
    <BackgroundEffects /> {/* Animated background blobs */}

    <div style={{ position: "relative", zIndex: 10 }}>
      <div style={{ marginBottom: "0.5rem" }}>
        &copy; {new Date().getFullYear()} Varshil. All rights reserved.
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
        {socialLinks.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{ color: "#fff", transition: "color 0.2s" }}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
