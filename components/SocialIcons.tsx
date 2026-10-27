type IconProps = { size?: number };

export function MailIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      <path d="M12 2a10 10 0 0 0-8.6 15.07L2 22l5.06-1.33A10 10 0 1 0 12 2Zm0 18.2a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3 .79.8-2.92-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.56c0-.86.24-1.44 1.47-1.44h1.57V4.47A21 21 0 0 0 14.3 4.3c-2.26 0-3.8 1.38-3.8 3.9v2.24H7.93v2.96h2.57V21h3Z" />
    </svg>
  );
}

export function YouTubeIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12s0-3.2-.41-4.7a2.78 2.78 0 0 0-1.95-1.97C18.1 5 12 5 12 5s-6.1 0-7.64.33A2.78 2.78 0 0 0 2.41 7.3C2 8.8 2 12 2 12s0 3.2.41 4.7a2.78 2.78 0 0 0 1.95 1.97C5.9 19 12 19 12 19s6.1 0 7.64-.33a2.78 2.78 0 0 0 1.95-1.97C22 15.2 22 12 22 12Z" fillOpacity=".15" />
      <path d="M22 12s0-3.2-.41-4.7a2.78 2.78 0 0 0-1.95-1.97C18.1 5 12 5 12 5s-6.1 0-7.64.33A2.78 2.78 0 0 0 2.41 7.3C2 8.8 2 12 2 12s0 3.2.41 4.7a2.78 2.78 0 0 0 1.95 1.97C5.9 19 12 19 12 19s6.1 0 7.64-.33a2.78 2.78 0 0 0 1.95-1.97C22 15.2 22 12 22 12Z" stroke="currentColor" strokeWidth="0" />
      <path d="M10 15.2V8.8L15.5 12 10 15.2Z" />
    </svg>
  );
}

export function SpotifyIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fillOpacity=".15" />
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 9.8c2.9-.8 6.3-.6 8.9.9M7.5 12.8c2.4-.6 5-.5 7.3.7M8 15.6c2-.4 4-.3 5.8.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
