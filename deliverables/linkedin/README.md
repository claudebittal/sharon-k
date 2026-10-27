# LinkedIn deliverables — Sharon Kaniel

Profile: https://www.linkedin.com/in/sharon-kaniel-960175447/

## Files
- `profile-photo.png` — cropped from the verified site performance photo (`public/img/liveband.jpg`). Square, ready to upload.
- `banner.png` — 1584×396 cover banner, Studio Noir Glow identity, built from the same verified photo.

## Already done on the live profile
- Headline, About, Experience: filled (bilingual-sourced, verified facts only).
- Featured: 2 videos added (No Junkfood Boys official video; "All I Do" live at Blue Room, LA).
- Skills: Live Music Performance, Songwriting, Music Production, Vocal Coaching (plus 2 pre-existing).
- Contact info → Website: fixed from a dead/typo'd preview URL to `sharonkmusic.com` (type: Portfolio).

## Manual steps still needed (platform limits automation can't cross)
1. **Upload `profile-photo.png` and `banner.png`** — LinkedIn only creates its file-picker input after you click "Upload photo" / "Add background image", which opens the OS's native file dialog. That dialog can't be reached by browser automation, so this needs a human click: Profile → camera icon → Upload photo (and same for the background banner).
2. **Featured → website link** — a link card for sharonkmusic.com couldn't be added because the domain isn't resolving yet (LinkedIn's preview fetcher needs a live page). Once `sharonkmusic.com` is pointed at the site, add it under Featured → Add a link.
3. **Account email** (Contact info still shows `info@securetech.co.il`) — this is the account's login email, not a free-text field, so changing it requires LinkedIn's own verification email flow. Needs Sharon's input directly in Settings → Account if it should be her own address instead.
