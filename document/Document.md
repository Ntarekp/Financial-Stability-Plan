Here is the **complete content** of the PASSE Master Design System document, generated as readable text. This mirrors exactly what the DOCX file would contain—every heading, table, bullet list, color specification, and prompt.

---

# PASSE
**Enterprise Visitor & Workplace Access Control Platform**  
*Master UI/UX Design System & Prompt Guide*  
Version 2.0 • Production-Ready • Advanced Design System  
Hotels & Hospitality • Corporate Offices • Government • Healthcare  

**CONFIDENTIAL — DESIGN SYSTEM MASTER DOCUMENT**

---

## TABLE OF CONTENTS

| Section | Topic |
|---------|-------|
| Section 0 | Design Philosophy & Brand Identity |
| Section 1 | Ultra-Premium Color System |
| Section 2 | Typography, Spacing & Component System |
| Section 3 | User Roles & Portal Architecture |
| Section 4 | Splash & Onboarding Flow |
| Section 5 | Complete Authentication System |
| Section 6 | Visitor Portal — All Screens |
| Section 7 | Employee Portal — All Screens |
| Section 8 | Security Guard Portal — All Screens |
| Section 9 | Admin / HR / Receptionist Portal — All Screens |
| Section 10 | Access & Entry System (QR, Face, NFC, PIN) |
| Section 11 | Visit Management (Pre-register, Approve, Bulk Invite) |
| Section 12 | Analytics & Reporting Dashboard |
| Section 13 | Blacklist & Security Watchlist System |
| Section 14 | Multi-Location & Branch Management |
| Section 15 | History, Logs & Audit Trail |
| Section 16 | Digital Visitor Badge Generator |
| Section 17 | Notification & Alerts Center |
| Section 18 | Settings, Profile & Preferences |
| Section 19 | Multi-Language & Accessibility System |
| Section 20 | Edge Cases & System States |
| Section 21 | Motion Design & Micro-Interactions |
| Section 22 | Interlink & Navigation Logic Map |
| Section 23 | Developer Handoff & Component Specs |
| Section 24 | App Store Showcase & Marketing Screens |

---

## SECTION 0 — DESIGN PHILOSOPHY & BRAND IDENTITY

### Design Philosophy
You are not creating isolated screens. You are architecting a single, connected, breathing enterprise product — a world-class visitor and workplace access control ecosystem called PASSE.

Every screen, every component, every interaction must feel like it belongs to the same universe. Visual consistency is not optional — it is the foundation of trust, and trust is the product.

**Core Mandate**  
Design as if Apple, Stripe, and a luxury hotel brand co-created a security product. Premium, minimal, trustworthy, and effortlessly fast.

### Brand Essence

| Dimension | Description | Design Expression |
|-----------|-------------|--------------------|
| Security | Users must feel the app is serious, protected, reliable | Dark navy, biometric iconography, clean lines |
| Welcome | Visitors must feel welcomed, not surveilled | Warm cream tones, friendly typography, smooth animations |
| Efficiency | Entry must feel instant, zero friction | Large tap targets, minimal steps, success states |
| Intelligence | The app must feel smarter than a clipboard | Real-time data, predictive inputs, analytics |
| Prestige | Hotels & corps need to impress with the product | Premium gradients, glassmorphism, luxury typography |
| Clarity | Guards need zero confusion under pressure | High contrast, bold labels, immediate affordances |

### Target Feel
The final product should feel like:
- The security of a Swiss bank
- The warmth of a 5-star hotel lobby
- The speed of an Uber tap
- The elegance of an Apple product launch
- The clarity of a Stripe dashboard
- The data depth of a Bloomberg terminal

---

## SECTION 1 — ULTRA-PREMIUM COLOR SYSTEM

The Passe color system must psychologically communicate: security, welcome, trust, speed, luxury, and modern intelligence. It must work across light mode, dark mode, AMOLED screens, biometric overlays, maps, badge printing, and accessibility compliance.

### Primary Brand Colors

**Navy Midnight — Primary Identity**  
- Navy 900 — Main brand, headers, CTAs → `#0F2040`  
- Navy 800 — Navigation bars, modals → `#1A3560`  
- Navy 700 — Cards, elevated surfaces → `#1E4080`  
- Navy 100 — Light tints, hover states → `#E8EEF8`  
- Navy 50  — Subtle backgrounds → `#F0F4FF`

**Access Blue — Accent & Interactive**  
- Blue 600 — Buttons, links, active tabs → `#2563EB`  
- Blue 500 — Hover states, highlights → `#3B82F6`  
- Blue 100 — Info backgrounds → `#DBEAFE`

### Access Status Colors

**Granted — Success Green**  
- Green 600 — Access granted, check-in confirmed → `#059669`  
- Green 500 — Online status, active badges → `#10B981`  
- Green 100 — Success backgrounds → `#D1FAE5`

**Denied — Alert Red**  
- Red 600 — Access denied, blacklisted, critical → `#DC2626`  
- Red 500 — Errors, failed scans → `#EF4444`  
- Red 100 — Error backgrounds → `#FEE2E2`

**Pending — Warm Amber**  
- Amber 600 — Awaiting approval, in-progress → `#D97706`  
- Amber 400 — Warnings, overstay alerts → `#FBBF24`  
- Amber 100 — Warning backgrounds → `#FEF3C7`

### Luxury Highlight Colors

**Gold — VIP & Premium Tier**  
- Gold 600 — VIP badges, premium membership → `#B45309`  
- Gold 400 — Loyalty rewards, achievements → `#F59E0B`  
- Gold 100 — Premium card backgrounds → `#FEF3C7`

**Royal Purple — Admin & Elevated Access**  
- Purple 700 — Admin portal, superuser → `#4338CA`  
- Purple 500 — Role badges, permission indicators → `#6366F1`  
- Purple 100 — Admin surface backgrounds → `#EDE9FE`

**Teal — Security Guard Portal**  
- Teal 700 — Guard dashboard, scanner UI → `#0F766E`  
- Teal 500 — Real-time tracking, occupancy → `#14B8A6`  
- Teal 100 — Guard accent backgrounds → `#CCFBF1`

### Neutral System

| Token | Value & Usage |
|-------|----------------|
| Text Primary | `#111827` — Main content, headings |
| Text Secondary | `#374151` — Supporting text, labels |
| Text Muted | `#6B7280` — Captions, placeholders |
| Text Disabled | `#9CA3AF` — Inactive elements |
| Border Default | `#E5E7EB` — Cards, inputs, dividers |
| Border Strong | `#D1D5DB` — Emphasized borders |
| Surface 0 | `#FFFFFF` — Pure white cards |
| Surface 1 | `#F9FAFB` — Page backgrounds |
| Surface 2 | `#F3F4F6` — Subtle section backgrounds |
| Surface 3 | `#E5E7EB` — Skeleton loaders |

### Dark Mode System

- Dark BG 900 — True AMOLED black → `#080C14`
- Dark BG 800 — Main dark background → `#0D1420`
- Dark Card 700 — Elevated dark surfaces → `#121B2E`
- Dark Card 600 — Modal, sheet backgrounds → `#1A2540`
- Dark Border — Subtle separators → `#2D3B55`
- Dark Text Pri — Primary text on dark → `#F1F5F9`
- Dark Text Sec — Secondary text on dark → `#94A3B8`

### Gradient System

**CTA & Button Gradients**  
- Primary CTA: `#0F2040` → `#2563EB` (left to right, 135deg)  
- Access Granted: `#059669` → `#10B981`  
- Access Denied: `#DC2626` → `#EF4444`  
- VIP / Gold: `#B45309` → `#F59E0B`  
- Admin Power: `#4338CA` → `#6366F1`

**Background & Card Gradients**  
- Onboarding Hero: `#0F2040` → `#1A3560` → `#0D2B5E` (radial)  
- Premium Card: `#0F2040` at 95% opacity glassmorphism  
- Scanner Overlay: `#000000` at 60% with teal accent ring  
- Badge Card: White → `#F0F4FF` with Navy accent strip

### Glassmorphism Rules
Use subtle glassmorphism ONLY for:  
- Floating access pass card on scanner screen  
- Payment confirmation overlay  
- QR code display modal  
- Biometric verification overlay  
- Notification drawer overlay  

Properties: `backdrop-filter: blur(20px)`, `background: rgba(255,255,255,0.08)`, `border: 1px solid rgba(255,255,255,0.15)`. Never overuse. One glass element per screen maximum.

### Accessibility Compliance

| Requirement | Implementation |
|-------------|----------------|
| WCAG AA Text Contrast | Minimum 4.5:1 for all body text |
| WCAG AAA Large Text | 3:1 for headers above 18px |
| Color Blindness Safe | Never rely on color alone — use icons + labels |
| Focus States | 2px solid `#2563EB` ring on all interactive elements |
| Touch Target Size | Minimum 44×44px for all tappable elements |
| Reduced Motion | Respect prefers-reduced-motion media query |

---

## SECTION 2 — TYPOGRAPHY, SPACING & COMPONENT SYSTEM

### Typography System

| Token | Specification |
|-------|---------------|
| Display 1 | 32px / 700 / -0.5px tracking / Navy 900 |
| Display 2 | 28px / 700 / -0.3px tracking / Navy 900 |
| Heading 1 | 24px / 600 / -0.2px tracking |
| Heading 2 | 20px / 600 / -0.1px tracking |
| Heading 3 | 18px / 600 / normal tracking |
| Body Large | 16px / 400 / 1.6 line height |
| Body Regular | 14px / 400 / 1.5 line height |
| Body Small | 13px / 400 / 1.4 line height |
| Caption | 12px / 400 / 1.3 line height / Muted |
| Label | 11px / 600 / 0.08em tracking / UPPERCASE |
| Badge | 10px / 700 / 0.05em tracking |

### Spacing System (8-point grid)

| Token | Value & Usage |
|-------|----------------|
| space-1 | 4px — Icon-to-label gaps, tight badge padding |
| space-2 | 8px — Inline element spacing, chip padding |
| space-3 | 12px — Component internal padding (small) |
| space-4 | 16px — Standard component padding |
| space-5 | 20px — Card content padding |
| space-6 | 24px — Section spacing within screens |
| space-8 | 32px — Between major sections |
| space-10 | 40px — Screen edge padding (horizontal) |
| space-12 | 48px — Generous section breathing room |
| space-16 | 64px — Hero sections, splash screen spacing |

### Border Radius System

| Token | Value & Usage |
|-------|----------------|
| radius-xs | 4px — Tags, small badges |
| radius-sm | 8px — Inputs, chips, small cards |
| radius-md | 12px — Standard cards, buttons |
| radius-lg | 16px — Modals, bottom sheets, large cards |
| radius-xl | 20px — Hero cards, featured content |
| radius-2xl | 24px — Scanner frame, biometric overlay |
| radius-full | 9999px — Pills, avatar circles, toggle |

### Component Library

**Buttons**  

| Variant | Usage & States |
|---------|----------------|
| Primary Filled | Main CTAs (Check In, Approve, Register). States: default, hover, pressed, loading, success, disabled |
| Primary Outlined | Secondary actions (Edit, View Details). Navy border, navy text |
| Destructive | Deny, Delete, Blacklist. Red fill. Requires confirmation dialog |
| Ghost | Tertiary actions (Cancel, Skip). No border, no background |
| Icon Button | Circular, 44px min. Scanner, search, notification bell |
| Floating Action | 56px circle, navy fill. Quick scan, quick check-in |

**Input Fields**  

| State | Visual Treatment |
|-------|------------------|
| Default | 1px `#E5E7EB` border, white fill, 16px label above |
| Focused | 2px `#2563EB` border, light blue fill tint |
| Filled | 1px `#D1D5DB` border, slight gray fill |
| Error | 2px `#EF4444` border, red helper text below |
| Success | 2px `#10B981` border, green checkmark trailing icon |
| Disabled | Dashed `#E5E7EB` border, `#F9FAFB` fill, no interaction |

**Cards**  

| Type | Specification |
|------|---------------|
| Visitor Card | White bg, 16px radius, 1px border, shadow-sm. Photo + name + badge + status chip |
| Access Pass Card | Navy gradient bg, glassmorphism, QR code centered, metallic sheen |
| Alert Card | Left accent border (4px solid), bg matches severity (red/amber/green) |
| Stats Card | Surface 2 bg, 12px radius, large number + small label. No border |
| Location Card | Map thumbnail + branch name + occupancy pill. 16px radius |
| Badge Preview Card | White with print-safe layout: photo, name, org, role, date, QR |

**Status Chips & Badges**  

| Status | Color Specification |
|--------|---------------------|
| Checked In | Green 600 bg, White text, filled pill |
| Checked Out | Navy 100 bg, Navy 700 text, outline pill |
| Pending Approval | Amber 100 bg, Amber 700 text, filled pill |
| Access Denied | Red 100 bg, Red 600 text, filled pill |
| Overstayed | Red 600 bg, White text, filled pill with pulse animation |
| Pre-Registered | Blue 100 bg, Blue 700 text, filled pill |
| VIP | Gold 100 bg, Gold 700 text, star icon + label |
| Blacklisted | Red 900 bg, White text, warning icon + label |

**Navigation Structure**  
Bottom Tab Bar (all user roles). 5 tabs maximum per role. 68px height. Icons + labels. Active: Navy fill, navy label. Inactive: Gray 400 icon, gray label.

| Role | Bottom Tab Structure |
|------|----------------------|
| Visitor | Home · My Pass · Pre-Register · History · Profile |
| Employee | Home · My Pass · Guests · History · Settings |
| Security Guard | Scanner · Live View · History · Alerts · Profile |
| Admin | Dashboard · Analytics · Locations · People · Settings |

**Loading & Skeleton States**  
- Skeleton: animated shimmer, surface-3 base, surface-2 highlight, 1.5s loop  
- Spinner: 24px circular, Navy primary, 1.2s rotation  
- Progress bar: 4px height, Navy gradient fill, rounded ends  
- Pulse: used ONLY on Overstay chip and emergency alerts

**Empty States**  
- Illustration: simple SVG, max 200×200px, never stock photos  
- Title: 20px, 600, centered, descriptive  
- Subtitle: 14px, muted, max 2 lines  
- CTA: Primary button or ghost link

---

## SECTION 3 — USER ROLES & PORTAL ARCHITECTURE

Passe is a single app with four distinct role-based portals. Each portal has its own home screen, navigation structure, color accent, and feature set.

**VISITOR / GUEST PORTAL** (Accent: Blue #2563EB)  
- Access: QR code pass, face recognition, NFC, PIN  
- Digital visitor badge with QR code  
- Pre-register upcoming visits with date, host, purpose  
- Receive and track approval status in real time  
- Multi-organization access (different workplaces)  
- Visit history and overstay notifications  
- Invite link acceptance and organization onboarding

**EMPLOYEE / STAFF PORTAL** (Accent: Green #059669)  
- Access: NFC tap-to-enter (primary), QR, Face, PIN  
- Invite and manage personal guests  
- Receive push notification when guest arrives  
- Approve or decline guest entry requests  
- Meeting room booking integration  
- Personal access log and history  
- Multi-location switching (satellite offices, hotels)

**SECURITY GUARD PORTAL** (Accent: Teal #0F766E)  
- Rapid QR scanner with face verification  
- Real-time visitor list with status (in/out/overstay)  
- Blacklist / watchlist instant alert on scan  
- Manual check-in for walk-in visitors  
- Overstay timer with escalation actions  
- Incident logging and report generation  
- Live occupancy counter per zone/floor

**ADMIN / HR / RECEPTIONIST PORTAL** (Accent: Purple #4338CA)  
- Full analytics dashboard with charts and KPIs  
- Multi-location and branch management  
- User and role permission management  
- Blacklist creation, editing, and bulk import  
- Digital visitor badge design and generation  
- Audit trail: every entry/exit event logged  
- Report export (PDF, CSV) with date filtering  
- Organization settings, invite management, integrations

---

## SECTION 4 — SPLASH & ONBOARDING FLOW

**AI GENERATION PROMPT**  
Design a complete premium splash and onboarding flow for PASSE, an enterprise visitor access control platform. Use the Navy Midnight primary palette (`#0F2040`). Frame size: iPhone 15 Pro. Include light and dark mode.

### Splash Screens to Design

| Screen | Description |
|--------|-------------|
| App Launch | Full navy bg, Passe wordmark fades in with wifi-lock icon. 2.5s auto-dismiss |
| Animated Logo Reveal | Icon draws itself stroke-by-stroke. Tag: 'Secure Access. Simplified.' |
| Loading State | Skeleton shimmer version of home screen. Progress bar at bottom |
| No Internet | Disconnected SVG illustration, retry button, offline mode message |
| App Maintenance | Scheduled maintenance screen, estimated return time, contact support link |
| Update Required | Version gate screen, forced update CTA to App Store / Play Store |
| Permission: Camera | Contextual request for camera access — explain face recognition use |
| Permission: Notifications | Contextual request — explain what alerts will be sent |
| Permission: Biometrics | Face ID / fingerprint contextual permission request |
| Permission: NFC | Tap-to-enter NFC contextual permission request |

### Onboarding Screens (Swipe Flow)

| Slide | Content |
|-------|---------|
| Slide 1 — Secure Access | Illustration: shield with QR inside. Headline: 'Secure Access, Simplified'. Sub: 'Enter any workplace with QR, face, or tap.' |
| Slide 2 — Scan & Enter | Animation: phone scanning QR, face overlay glowing green. Headline: 'Scan. Verify. Enter.' Sub: 'Biometric confirmation in under 3 seconds.' |
| Slide 3 — Pre-Register | Calendar + clock illustration. Headline: 'Plan Ahead'. Sub: 'Pre-register visits before you arrive. Zero waiting.' |
| Slide 4 — Multi-Location | City building grid. Headline: 'One App. Every Location.' Sub: 'Hotels, offices, hospitals — Passe works everywhere.' |
| Slide 5 — Data Protected | Lock icon with data shield. Headline: 'Your Data, Protected.' Sub: 'Biometric data never leaves your device. Ever.' |
| Slide 6 — Get Started | Branding screen. CTA: 'Get Started' (primary button). Link: 'Already have an account? Sign In' |

Include: dot progress indicators, skip button (top right), swipe gesture detection, smooth slide transitions. Onboarding completion state: brief success animation before transitioning to sign up. Return user detection: if previously logged in, skip onboarding and go directly to role home.

---

## SECTION 5 — COMPLETE AUTHENTICATION SYSTEM

**AI GENERATION PROMPT**  
Design ALL authentication screens for PASSE. Maintain the Navy Midnight design system. Every screen must include a default state, filled state, validation error state, and loading/success state. Screens must feel connected via consistent header, back navigation, and button placement.

### Sign Up Flow

| Screen | Elements & States |
|--------|-------------------|
| Create Account | App logo + 'Sign Up' heading. Email field, Password field (with strength meter), Re-enter Password, Terms checkbox. Primary: 'Sign Up'. Divider 'OR'. Google SSO button. Footer: 'Already have an account? Sign In' |
| Email Already Exists | Inline error above email field: 'An account with this email already exists.' Login link injection |
| Password Strength Meter | 4-step bar: Weak (red), Fair (amber), Good (blue), Strong (green). Real-time on password input |
| Terms & Privacy | Full-screen scrollable terms with accept / decline at bottom. Cannot proceed without accepting |
| Verify Email | Email illustration, 'Check Your Inbox' message, resend timer 60s, Open Email App button |
| Email Verified | Green checkmark animation, 'Email Verified!' message, auto-proceed to role selection after 2s |
| Role Selection | 4 role cards: Visitor, Employee, Guard, Admin. User selects their role. Info tooltip on each. Single select, continue CTA |
| Invite Link Entry | Single large input for invite code. 'Set It Later' ghost link. Continue button |
| Organization Confirmed | 'Welcome to [Org Name]' screen. Org logo, branch, role badge. 'Let's Get Started' CTA |

### Login Flow

| Screen | Elements & States |
|--------|-------------------|
| Login — Default | Logo, 'Login' heading. Email, Password (toggle visibility). Remember Me checkbox, Forgot Password link. Login button. OR divider. Google SSO. Create Account link |
| Login — Filled | Both fields populated, show/hide toggled on password. Button becomes active |
| Invalid Email | Red border + error message under email: 'Please enter a valid email address' |
| Invalid Password | Red border + error: 'Incorrect password. Forgot password?' |
| Both Invalid | Both fields red border, combined error above form |
| Loading State | Button shows spinner: 'Signing in...' All inputs disabled |
| Login Success | Brief green flash + checkmark animation, transitions to role home |
| Account Locked | Red alert banner: 'Account locked after 5 attempts. Try again in 15 min.' Countdown timer |
| Biometric Login | Face ID / fingerprint prompt overlay. 'Use Password Instead' escape link |
| Suspicious Login | Yellow warning: 'Sign-in from new device detected. Verify your identity.' OTP sent |

### Forgot Password / Reset Flow

| Screen | Description |
|--------|-------------|
| Forgot Password | Illustration, email input, 'Send OTP' button |
| OTP Input | 6-box OTP entry, 60s countdown resend, 'Did Not Receive?' link |
| OTP Expired | Error state with resend option immediately visible |
| Confirm New Password | New Password + Confirm Password fields, strength meter, Confirm button |
| Reset Successful | Green success illustration, 'Password Updated Successfully', auto-redirect to login in 3s |

### 2FA & Security Screens

| Screen | Description |
|--------|-------------|
| Two-Factor Auth Setup | QR code for authenticator app + manual key option + verify code input |
| 2FA Verification | 6-digit code input, 30s timer, use backup code link |
| Trusted Devices | List of saved devices, remove option, 'Trust This Device' toggle on login |
| Session Expired | Soft lock screen: 'Your session expired. Re-enter password to continue.' No full logout |

---

## SECTION 6 — VISITOR PORTAL — ALL SCREENS

**AI GENERATION PROMPT**  
Design the complete Visitor portal for PASSE. Visitor accent: Blue `#2563EB`. Frame: iPhone 15 Pro. The visitor experience must feel welcoming, fast, and modern. Every screen must interconnect seamlessly — tapping any element leads to a logical next screen.

### Visitor Home Screen

| Element | Design Specification |
|---------|----------------------|
| Header | Avatar (top left) + 'Good Morning, [Name]' greeting + Bell icon (notification count badge) |
| Organization Banner | Current org name, location, user role pill. Tap to switch organization |
| Quick Actions Row | 4 icon cards: Scan to Enter · Pre-Register Visit · My Pass · My History |
| Upcoming Visit Card | Next visit details: host name, date/time, location, status chip (Approved/Pending). CTA: 'View Pass' |
| Recent Activity | Last 3 visit entries with check-in time, location, status chip |
| Bottom Tab | Home · My Pass · Pre-Register · History · Profile |

### My Pass Screen

| Element | Description |
|---------|-------------|
| Active Pass Card | Premium glass card: visitor name, photo, organization, role, QR code (large, live-generated). Valid date range |
| Pass Status | Large chip: ACTIVE / EXPIRED / PENDING APPROVAL — color coded |
| QR Zoom | Tap QR to fullscreen for easy scanning. Auto-brightness boost |
| Download / Share | Save to phone wallet, share via link, print badge button |
| Empty State | No active pass: illustration + 'No Active Pass. Pre-register a visit to receive your pass.' |

### Pre-Register Visit

| Screen | Description |
|--------|-------------|
| Step 1 — Select Organization | Search or pick from joined organizations. Show location, address, contact |
| Step 2 — Visit Details | Date picker, time picker, purpose of visit (dropdown), expected duration (5/15/30/45min/1h/other) |
| Step 3 — Host Selection | Search employee directory of org, select host by name/department |
| Step 4 — Additional Info | Notes field, special requirements toggle, visitor count (solo/group) |
| Step 5 — Review & Submit | Full summary card of all inputs. Edit links per section. Submit CTA |
| Submission Success | Animated checkmark + 'Visit Request Submitted! Your host will approve shortly.' Share confirmation option |
| Pending Approval | Status screen with visit summary, pending chip, notification opt-in |
| Approved Notification | Push notification template: '[Host Name] approved your visit for [Date]. Tap to view pass' |

### Visitor History

| Element | Description |
|---------|-------------|
| Filter Tabs | All · Approved · Pending · Completed · Denied — horizontal scroll |
| History List Item | Avatar + Host Name + Purpose + Location + Status chip + Date/Time + chevron |
| Visit Detail Screen | Full details: check-in time, check-out time, host, location, QR used, face verified badge, duration, status |
| Export Option | Download PDF of visit confirmation. Share via link |

---

## SECTION 7 — EMPLOYEE PORTAL — ALL SCREENS

**AI GENERATION PROMPT**  
Design the complete Employee portal for PASSE. Employee accent: Green `#059669`. The employee experience must feel efficient and professional. Guests are invited through this portal, and all approval flows originate here.

### Employee Home Screen

| Element | Description |
|---------|-------------|
| Header | Avatar, 'Good Morning, [Name]', Department tag, Bell with badge count |
| Stats Row | 2 cards: Active Guests (number) · Pending Approvals (number with amber accent) |
| Pending Approvals Section | Horizontal scroll cards for visitors awaiting approval. Quick Approve / Decline inline buttons |
| Quick Actions | Scan to Enter · Invite Guest · My History · Room Booking |
| Upcoming Guests Today | Chronological list of today's expected visitors with time and purpose |
| Recent History | Last 3 guest events with status |

### Invite Guest Flow

| Screen | Description |
|--------|-------------|
| Guest Details | Guest full name, email, phone (optional) |
| Visit Details | Date, time, duration, purpose, meeting room (optional) |
| Review & Send | Full summary, send invite CTA |
| Invite Sent | Success state: 'Invite sent to [guest name]. They will receive an email with their access link' |
| Bulk Invite | CSV import or multi-email input field for group visits |

### Approve / Decline Visitor

| Screen | Description |
|--------|-------------|
| Notification | Push: '[Visitor Name] has arrived and is awaiting your approval' |
| Approval Request | Visitor photo, name, purpose, check-in time, location. Large Approve (green) / Decline (red) buttons |
| Declined Flow | Optional decline reason dropdown. Visitor notified automatically |
| Post-Approval | Pass generated for visitor. Guard notified. Host sees guest as Active |
| Guest Checked Out | Notification: '[Name] has checked out. Duration: 45 mins' |

---

## SECTION 8 — SECURITY GUARD PORTAL — ALL SCREENS

**AI GENERATION PROMPT**  
Design the complete Security Guard portal for PASSE. Guard accent: Teal `#0F766E`. CRITICAL: Guard screens must prioritize SPEED and CLARITY above all else. Large text, high contrast, minimal taps. A guard must be able to approve entry in under 3 seconds.

### Guard Home / Live View

| Element | Description |
|---------|-------------|
| Header | Location name, current date/time (live clock), online status indicator |
| Occupancy Banner | Large number: 'CURRENT OCCUPANCY: 47 / 200'. Color coded: green (safe), amber (75%+), red (90%+) |
| Quick Scan FAB | Large floating action button: 'SCAN' — 72px, teal, always visible |
| Pending Approvals | Alert section for walk-in visitors needing manual check-in |
| Live Activity Feed | Real-time stream of check-ins/check-outs as they happen. Name + action + timestamp |
| Alerts Panel | Pinned alerts: Overstays (red pulse), Watchlist matches (red), Unrecognized faces (amber) |

### QR Scanner Screen

| State | Description |
|-------|-------------|
| Camera Active | Full-screen camera, teal corner brackets as frame, 'Point at QR code' instruction |
| QR Detected | Brief yellow highlight on detected QR, haptic feedback, processing spinner |
| Access Granted | Full-screen green overlay: large checkmark + visitor name + face match percentage. 3s auto-dismiss |
| Access Denied | Full-screen red overlay: X icon + reason (Expired / Not Approved / Blacklisted) + manual override option |
| Blacklist Match | Full-screen red with ALERT header: photo, name, blacklist reason. Escalate / Detain actions |
| Face Mismatch | Orange overlay: 'Face does not match pass holder. Verify identity manually' |
| Unknown QR | Gray overlay: 'Unrecognized pass. Issue visitor pass or contact admin' |
| Multi-Access | Method switcher: QR · Face · NFC · PIN — tap to switch scanning mode |

### Face Recognition Screen

| State | Description |
|-------|-------------|
| Camera Active | Oval face guide frame, teal outline, 'Look at the camera' instruction |
| Face Detected | Oval turns amber, scanning animation, 'Verifying...' |
| Face Matched | Oval turns green, visitor card slides up from bottom: photo, name, approval status, host |
| Face Not Recognized | Oval turns red, 'Face not recognized. Scan QR code or check ID manually' |
| Low Light Warning | Amber banner: 'Poor lighting detected. Move to brighter area' |

### Overstay Management

| Screen | Description |
|--------|-------------|
| Overstay Alert | Push notification + in-app pulsing red card: '[Name] has exceeded allowed duration by [X] mins' |
| Overstay Detail | Full visitor info, check-in time, approved duration, current duration (live counter), Contact Host / Initiate Checkout / Escalate actions |
| Incident Log | Log any security incident: type, description, persons involved, severity, photo attachment |

---

## SECTION 9 — ADMIN / HR / RECEPTIONIST PORTAL — ALL SCREENS

**AI GENERATION PROMPT**  
Design the complete Admin portal for PASSE. Admin accent: Purple `#4338CA`. The admin experience must feel like a premium enterprise dashboard — data-rich, organized, and authoritative. Admins control the entire organization.

### Admin Dashboard

| Element | Description |
|---------|-------------|
| Header | Organization logo + name, location switcher dropdown, user avatar |
| KPI Row (4 cards) | Today's Visitors · Current Occupancy · Pending Approvals · Alerts — each with trend arrow |
| Traffic Chart | Line chart: visitor check-ins over last 7 days. Toggle: Day / Week / Month |
| Top Hosts Table | Most visited employees this week: name, dept, visitor count, avg duration |
| Alerts Summary | Overstays · Blacklist matches · Failed scans — color coded, tap to drill down |
| Quick Actions | Add User · Export Report · Manage Blacklist · Switch Location |

### Role & Permission Management

| Screen | Description |
|--------|-------------|
| User Directory | Searchable list of all users: name, role badge, status (active/suspended), last access time |
| User Detail | Photo, name, email, role, organization, joined date, total visits, permission toggles |
| Edit Role | Role dropdown + custom permission matrix (toggles per feature) |
| Invite New User | Email + role assignment + organization + optional custom message |
| Suspend / Remove User | Confirmation dialog with reason. User notified. Audit log entry created |

---

## SECTION 10 — ACCESS & ENTRY SYSTEM (QR, Face, NFC, PIN)

**AI GENERATION PROMPT**  
Design all five access method screens for PASSE: QR Code, Face Recognition, NFC Tap, PIN Entry, and Multi-Method Picker. Every method must have: idle state, processing state, granted state, denied state, error state. Visual feedback must be IMMEDIATE and UNMISTAKABLE.

### Access Method Screens

| Method | Key Design Elements |
|--------|----------------------|
| QR Code Scanner | Teal corner brackets, live camera, auto-detect, torch toggle, QR code zoom function |
| Face Recognition | Oval guide frame, liveness detection indicator, 'Blink once' prompt, lighting check |
| NFC Tap-to-Enter | Large NFC icon with radial pulse animation, 'Hold phone near reader', haptic feedback |
| PIN Entry | Numpad (custom, not keyboard), 6-dot indicator, shuffle PIN option, biometric fallback |
| Method Picker | 4 large tiles: QR · Face · NFC · PIN. Icon + label + description. Full-width layout |

### Access Result Screens

| Result | Visual Treatment |
|--------|------------------|
| ACCESS GRANTED | Full-screen green, large checkmark (animated draw-in), name in 32px white, Location + time, 3s auto-dismiss |
| ACCESS DENIED | Full-screen red, X icon, denial reason in clear text, Contact Support link, Guard Override option |
| PROCESSING | Navy background, spinning teal ring, 'Verifying your identity...' in white |
| ALREADY CHECKED IN | Amber screen: 'You are already checked in at this location.' View active pass link |
| PASS EXPIRED | Gray screen: 'Your access pass has expired. Contact your host to renew.' |
| BLACKLISTED ALERT | Red screen with SECURITY ALERT header — guard-facing only. Photo + name + reason |

### Digital Visitor Badge

| Element | Specification |
|---------|---------------|
| Badge Layout | White card with navy header strip. Org logo top-right. Visitor photo (large, left). Name (24px bold), Company, Purpose, Host name, Valid dates, QR code (bottom right) |
| Badge Status | ACTIVE (green strip), EXPIRED (gray), PENDING (amber) |
| VIP Badge | Gold header strip instead of navy. Star icon. Priority clearance label |
| Actions | Download PNG · Print · Share Link · Add to Wallet |
| Security Features | QR encodes: visitor ID + org + timestamp + signature hash. Non-transferable |

---

## SECTION 11 — VISIT MANAGEMENT (Pre-register, Approve, Bulk Invite)

**AI GENERATION PROMPT**  
Design all visit management screens: pre-registration, approval flows, bulk invites, recurring visits, and checkout. Every state must be designed including edge cases. The flow must feel seamless — a visitor should be able to pre-register in under 60 seconds.

### Pre-Register Visit — Detailed Flow

| Step | Design Detail |
|------|----------------|
| 1. Organization | Search bar + recent orgs. Org card: logo, name, address, open hours, contact. Select + Continue |
| 2. Date & Time | Inline calendar (month view), time picker (15min intervals), duration selector |
| 3. Host | Employee search with department filter. Employee card: photo, name, dept, availability indicator |
| 4. Purpose | Dropdown: Meeting · Interview · Delivery · Maintenance · Client Visit · Other (with text input) |
| 5. Visitor Info | Pre-filled from profile. Add co-visitors option. Vehicle plate (optional) |
| 6. Review | Accordion summary of all steps. Edit per section. Submit CTA |
| 7. Success | Animated pass preview card + 'Awaiting Approval' status + Add to Calendar CTA |

### Bulk Invite (Admin/Employee)

| Feature | Description |
|---------|-------------|
| CSV Upload | Upload template, column mapping, validation preview showing errors before submit |
| Multi-Email Entry | Tag-style email input, add multiple guests, shared visit details |
| Group Pass | Single QR code for group, individual names listed, one check-in per person |
| Invite Status Dashboard | Table: name, email, invite sent, invite accepted, visit status |

### Recurring Visit

| Feature | Description |
|---------|-------------|
| Recurrence Setup | Daily / Weekly / Monthly / Custom. End date or occurrence count |
| Recurring Pass | Auto-generated pass before each visit date. Push notification 1 hour before |
| Pause / Cancel | Pause future occurrences or cancel all. Individual occurrence editing |

---

## SECTION 12 — ANALYTICS & REPORTING DASHBOARD

**AI GENERATION PROMPT**  
Design a premium analytics dashboard for PASSE admin users. It must feel like a Bloomberg or Stripe dashboard — data-dense but beautifully organized. Every chart and metric must be real-looking with realistic sample data. Include light and dark mode.

### Analytics Screens

| Screen | Elements |
|--------|----------|
| Analytics Overview | Date range picker (Today/7D/30D/Custom). 4 KPI cards. Line chart (traffic). Donut chart (visitor types). Bar chart (peak hours) |
| Foot Traffic Detail | 24-hour heatmap grid. Hourly bar chart. Busiest hour callout. Trend vs. last period |
| Peak Hours Heatmap | 7-day × 24-hour grid matrix. Color intensity = visitor volume. Interactive: tap cell to see exact count |
| Location Comparison | Multi-line chart comparing branches. Table with branch name + metrics |
| Visitor Type Breakdown | Pie/donut: Pre-Registered vs Walk-in vs Employee vs Recurring. Percentage labels |
| Individual Location Report | Full report per branch: daily traffic, top hosts, avg duration, incident count |
| Date Range Filter | Calendar range picker, preset buttons (Today, This Week, This Month, Custom), Apply button |
| Export Reports | Select metrics, format (PDF/CSV), date range, email/download. Progress screen during generation |

### Chart Design Standards

| Chart Type | Specification |
|------------|---------------|
| Line Chart | Navy primary line, blue fill below, grid lines at 20% opacity, round data points |
| Bar Chart | Navy bars, teal highlight on selected bar, rounded top corners, value labels on hover |
| Heatmap | White (0) → Blue 100 → Blue 500 → Navy (max). Legend at bottom |
| Donut Chart | 5 segments max, navy/blue/teal/amber/purple palette, center: total count + label |
| Area Chart | Gradient fill: Navy at top → transparent. Smooth bezier curves |

---

## SECTION 13 — BLACKLIST & SECURITY WATCHLIST SYSTEM

**AI GENERATION PROMPT**  
Design a comprehensive blacklist and security watchlist system for PASSE. This is a sensitive, high-stakes feature. Design must communicate seriousness while remaining professional. Include all states: adding, viewing, editing, matching, and alerting.

### Blacklist Screens

| Screen | Description |
|--------|-------------|
| Blacklist Manager | Searchable list with photo, name, ID, reason, added date, added by. Filter: Active/Archived |
| Add to Blacklist | Form: Photo upload, full name, ID type + number, reason (dropdown), severity (Low/Medium/High/Critical), notes, alert type toggle |
| Blacklist Person Detail | Full record: photo, personal info, all access attempts (timeline), reason, who added/when, edit/archive actions |
| Edit Blacklist Entry | Same form as Add, pre-filled. Change log at bottom |
| Archive Confirmation | Dialog: 'Archive [Name] from blacklist? They will be able to access facilities again.' Admin reason required |
| Watchlist Alerts | Real-time alert feed: person matched, location, time, confidence score, action taken |
| Match Alert Modal | Full-screen critical alert: photo comparison (captured vs. file), 96% match indicator, DENY ENTRY / VERIFY MANUALLY / DISMISS actions |
| Incident Log | All blacklist-related incidents: date, location, person, action taken, outcome. Export option |
| Bulk Import | CSV upload with required column mapping: name, ID, reason, severity. Preview and validate before import |

---

## SECTION 14 — MULTI-LOCATION & BRANCH MANAGEMENT

**AI GENERATION PROMPT**  
Design the multi-location management system for PASSE. Organizations may have dozens of branches across cities or countries. The experience must make switching locations effortless and managing all locations from one view intuitive.

### Multi-Location Screens

| Screen | Description |
|--------|-------------|
| Location List | Grid of location cards: name, city, photo, live occupancy pill, status (Open/Closed), tap to switch |
| Location Switcher Sheet | Bottom sheet: search bar, list with current location indicated, recent locations section |
| Location Detail | Map thumbnail, address, operating hours, capacity, current occupancy, floor count, guard contact, quick stats |
| Add New Location | Wizard: name → address → capacity → operating hours → floors/zones → guard assignment → photo |
| Floor / Zone Map | Visual floor plan grid. Each zone: name, capacity, current count, access level required. Tap zone to see live occupancy |
| Location Settings | Access rules per location, allowed methods, operating hours, holiday closures, manager assignment |
| Cross-Location Report | Aggregate data: all locations, sortable by occupancy, incidents, visitors, utilization |

---

## SECTION 15 — HISTORY, LOGS & AUDIT TRAIL

**AI GENERATION PROMPT**  
Design a comprehensive visit history and audit trail system. Different roles see different depths: visitors see personal history, guards see location history, admins see full organization audit. Every entry must be legally-grade detailed.

### History Screens

| Screen | Description |
|--------|-------------|
| History List | Filter tabs: All · Pre-Registered · Unregistered · Checked In · Checked Out · Overstayed · Denied. Search bar. Date range filter |
| History Item | Avatar, name, purpose, location, status chip (color-coded), check-in time, check-out time, duration |
| Visit Detail | Full audit record: access method used, face match %, QR serial, GPS location of scan, device ID, approving host, all timeline events |
| Audit Timeline | Vertical timeline per visit: Pre-registered → Approved → QR Generated → Scanned → Face Verified → Checked In → Checked Out. Each node: time + actor |
| Advanced Filters | Multi-select: date range, location, visitor type, access method, status, host name, purpose |
| Search | Full-text search: visitor name, purpose, host, ID number. Instant results |
| Export | Select fields, format (PDF/CSV/Excel), range. Progress indicator. Download + email options |

---

## SECTION 16 — NOTIFICATION & ALERTS CENTER

**AI GENERATION PROMPT**  
Design a comprehensive notification center for PASSE. Notifications must be categorized, actionable, and appropriately urgent. Critical security alerts look different from routine check-in confirmations. Include in-app, push, and badge notification designs.

### Notification Types & Design

| Type | Visual Treatment |
|------|------------------|
| Guest Arrival | Blue icon, 'John Smith has arrived and awaits your approval'. Approve / Decline inline actions |
| Access Granted | Green icon, '[Name] checked in at [Location] at [Time]'. View Pass CTA |
| Access Denied | Red icon, 'Your access was denied at [Location]. Contact [Host]'. Support link |
| Overstay Alert | Red pulsing icon, 'ALERT: [Name] has overstayed by [X] minutes at [Location]'. Guard-facing |
| Blacklist Match | Critical red banner, 'SECURITY: Blacklisted individual detected at [Location]'. Highest priority |
| Visit Approved | Green icon, '[Host] approved your visit for [Date]'. View Pass CTA |
| Visit Declined | Red icon, '[Host] declined your visit request. Tap to see reason' |
| Pre-Visit Reminder | Blue icon, 'Reminder: Your visit to [Org] is tomorrow at [Time]' |
| Pass Expiring | Amber icon, 'Your visitor pass expires in 2 hours' |
| System | Gray icon, maintenance, update, policy change notifications |

### Notification Center Screen

| Element | Description |
|---------|-------------|
| Filter Tabs | All · Security · Visits · Approvals · System — horizontal scroll |
| Notification Item | Icon (color by type) + title + subtitle + timestamp + unread dot. Swipe right: Mark Read. Swipe left: Delete |
| Grouped Notifications | Group by day: Today, Yesterday, This Week, Older |
| Empty State | Bell illustration + 'No notifications yet. We'll notify you about your visits and access updates' |
| Notification Preferences | Per-type toggle: push on/off, in-app on/off, email on/off. Sound/vibration settings |

---

## SECTION 17 — SETTINGS, PROFILE & PREFERENCES

**AI GENERATION PROMPT**  
Design the complete settings and profile system for PASSE. It must accommodate all four user roles. Settings are grouped logically. Every change must have a confirmation pattern. Profile completeness encourages security features.

### Settings Screens

| Screen | Content |
|--------|---------|
| Settings Home | Profile card (photo, name, email, role badge, completeness %). Sections: Account · Security · Notifications · Access · Privacy · Organization · Legal · Sign Out |
| Update Profile | Photo upload (camera/gallery), full name, phone, job title, department. Save button |
| Profile Completeness | Progress bar with missing items: add photo, enable biometrics, verify phone |
| Security Settings | Biometric toggle, PIN setup/change, trusted devices, 2FA toggle, active sessions list |
| Change Password | Current password, new password (strength meter), confirm, save |
| Access Preferences | Preferred access method (QR/Face/NFC/PIN), default location, auto check-out time |
| Notification Preferences | Per-type toggles: push, in-app, email. Quiet hours setting |
| Language Selector | List of languages with native name + flag. Search. Current shown with checkmark |
| Appearance | Light / Dark / System. Theme preview cards. Font size (Aa controls) |
| Privacy Policy | Scrollable content with last updated date. Accept/Decline (for new versions) |
| Terms & Conditions | Scrollable. Accept confirmation history at bottom |
| Delete Account | 3-step confirmation flow. Warning about data loss. 30-day grace period notice. Admin approval required |
| Organization Settings (Admin) | Org name, logo, address, contact, access policies, badge design, integrations |
| Sign Out | Confirmation dialog. Option to stay signed in on this device |

---

## SECTION 18 — MULTI-LANGUAGE & ACCESSIBILITY SYSTEM

**AI GENERATION PROMPT**  
Design the language selection and accessibility system for PASSE. The app must support multiple languages elegantly. First-time language selection is part of onboarding. RTL support must be considered in all layouts.

### Language System

| Feature | Description |
|---------|-------------|
| Onboarding Language Select | First screen after splash. Language cards with flag + native name + English name. Search bar. 'Continue in [Selected Language]' CTA |
| In-App Language Change | Settings → Language. Same list. Immediate app restart prompt or live reload |
| RTL Support | Arabic, Hebrew: full layout mirror. Icons, navigation, alignment all flip. Test with realistic RTL content |
| String Placeholders | All UI strings use translation keys. Date/time formats localized. Currency symbols localized |

### Accessibility Screens

| Feature | Description |
|---------|-------------|
| Accessibility Settings | Font size slider (5 sizes), bold text toggle, high contrast toggle, reduce motion toggle, haptic feedback toggle |
| Screen Reader Support | All images have alt text. All icons have accessibility labels. Reading order is logical |
| Color Blind Modes | Deuteranopia mode (shifts green → blue), Protanopia mode (shifts red → blue). Always pair color with icon |

---

## SECTION 19 — EDGE CASES & SYSTEM STATES

**AI GENERATION PROMPT**  
Design ALL edge case and system state screens for PASSE. These screens handle what goes wrong. Each must be informative, helpful, and never leave the user stranded. Every error must suggest a next action.

### Network & System States

| State | Screen Design |
|-------|----------------|
| No Internet Connection | WiFi-off SVG illustration, 'You're offline', cached data shown with 'Last updated: X mins ago' banner, Retry button |
| Poor Connection | Amber banner at top: 'Slow connection. Some features may be delayed.' Auto-dismiss when resolved |
| Server Timeout | Clock illustration, 'Taking longer than usual', Retry, Contact Support options |
| API Error / 500 | Robot/cloud illustration, 'Something went wrong on our end. We're on it.' Auto-retry with countdown |
| App Maintenance | Maintenance illustration, estimated time, 'We'll notify you when we're back' CTA |
| Update Required | Version gate: app icon, 'A new version is required', Update button (deep links to store). Can't bypass |
| Session Expired | Soft lock overlay on current screen, password re-entry field, biometric option, full logout option |

### Access & Entry Edge Cases

| State | Screen Design |
|-------|----------------|
| GPS Disabled | Contextual prompt: 'Enable location to verify you are at the correct facility'. Settings deep link |
| Camera Permission Denied | Settings redirect with visual guide showing how to enable camera in iOS/Android settings |
| NFC Not Available | Device doesn't support NFC: auto-fallback to QR, notification at top of method picker |
| Pass Already Used | Amber screen: 'This pass was already scanned today at [Time]. Are you trying to check in again?' |
| Location Mismatch | Warning: 'This pass is for [Other Location]. You are currently at [Current Location]'. Confirm / Cancel |
| Biometric Failure (3x) | Locked out of biometric: forced PIN entry or password. 'Too many attempts. Use PIN instead' |
| QR Code Expired | Gray screen: 'This QR code has expired. Request a new pass from your host or re-register' |
| Organization Suspended | Red screen: 'Access to [Org] has been suspended by the administrator. Contact your HR department' |

---

## SECTION 20 — MOTION DESIGN & MICRO-INTERACTIONS

**AI GENERATION PROMPT**  
Design the complete motion and micro-interaction system for PASSE. Define timing, easing, transitions, and gestures. Every animation must have a purpose — communicating state change, providing feedback, or guiding attention. Never animate for decoration alone.

### Transition System

| Transition Type | Specification |
|----------------|---------------|
| Screen Push | 300ms, ease-out cubic bezier. New screen slides in from right |
| Modal Rise | 400ms, spring(0.8, 0.9). Sheet rises from bottom with subtle scale |
| Tab Switch | 150ms, ease-out. Content cross-fades, icon scale 1.0→1.1→1.0 |
| Card Expand | 350ms, spring. Card expands in-place to fill screen |
| Success Animation | Checkmark draws in SVG stroke, 600ms, ease-in-out. Circle rings out |
| Error Animation | Shake: 3 cycles, 50ms intervals, 6px horizontal. Haptic: error pattern |
| Loading Skeleton | Shimmer: 1500ms loop, ease-in-out, left-to-right sweep |

### Micro-Interactions

| Interaction | Behavior |
|-------------|----------|
| Button Press | Scale 0.97 on press, 1.0 on release. 100ms. Haptic: light |
| Approve Action | Green ripple from tap point, checkmark appears, haptic: success |
| Deny Action | Red ripple, X appears, haptic: error |
| QR Scan Success | Teal bracket corners snap closed, green flash, visitor card slides up |
| Face Match | Oval border turns green and pulses once, card slides up from bottom |
| Notification Receive | Bell icon jiggles (2 cycles), badge number increments with pop |
| Status Chip Change | Chip morphs: current status fades out, new status fades in with color transition |
| Swipe to Delete (History) | Left swipe reveals red delete zone. Release beyond 60%: auto-confirms with haptic |
| Pull to Refresh | Custom animation: Passe logo spins, data loads, logo snaps back |
| Occupancy Counter | Numbers roll up/down like a ticker when value changes |

### Scanner Animations

| Animation | Specification |
|-----------|---------------|
| QR Scanner Line | Horizontal line scans top-to-bottom continuously, 2s loop, teal color, 2px height, fade at edges |
| Face Oval Pulse | Oval border pulses at 1.5s intervals while searching for face |
| NFC Radial Rings | 3 concentric circles expand outward from center, staggered 400ms, fade out at edge |
| Processing Ring | Circular progress ring, navy with teal tip, 1.2s rotation loop |
| Match Confidence | Number counts up from 0% to final score, 800ms, ease-out |

---

## SECTION 21 — INTERLINK & NAVIGATION LOGIC MAP

**AI GENERATION PROMPT**  
Design the complete navigation logic for PASSE. Every screen must know where it came from and where it leads. Design all transition patterns, deep link targets, notification tap destinations, and shared element transitions. No dead ends.

### Global Navigation Rules

- Every screen has a back action (chevron-left or swipe-right gesture) except: Home tabs, Scanner active state
- Tab bar persists across all portal screens. Hides only during: full-screen scanner, biometric overlay, success/denied result screens
- Deep links: every visit, pass, and alert is deep-linkable. Notification taps must open the correct screen with correct data
- Shared element transitions: visitor photo card expands from list item to detail screen
- Bottom sheets dismiss on: swipe down, tap outside, ESC key. Always show drag handle

### Screen Interconnection Map

| From Screen | Leads To |
|-------------|----------|
| Splash | Onboarding (first launch) OR Role Home (returning user) |
| Onboarding Slide 6 | Sign Up OR Login |
| Sign Up | Email Verify → Role Select → Invite Link → Org Confirmed → Role Home |
| Login | Role Home (success) OR Biometric (saved) OR 2FA (required) |
| Role Home (Visitor) | My Pass · Pre-Register · History · Profile · Notifications |
| Role Home (Guard) | Scanner · Live View · Overstay List · Incident Log · Profile |
| Role Home (Admin) | Dashboard · Analytics · Users · Blacklist · Locations · Settings |
| Pre-Register (Step 6 Success) | My Pass (showing new pending pass) AND push notification to host |
| Notification: Guest Arrived | Approval Request screen with approve/decline actions |
| QR Scanner: Access Granted | Result screen (3s) → auto-return to Scanner |
| QR Scanner: Blacklist Match | Security Alert screen → does NOT auto-dismiss |
| Analytics Chart (tap) | Drill-down detail screen for that metric |
| History Item (tap) | Visit Detail with full audit timeline |
| Blacklist Alert (tap) | Blacklist person detail screen |
| Settings: Sign Out | Confirmation dialog → Splash screen (clears session) |

### Notification Deep Link Targets

| Notification Type | Deep Link Destination |
|------------------|-----------------------|
| Guest arrival | Approval request screen for that specific visitor |
| Visit approved | My Pass screen showing the new active pass |
| Visit declined | Pre-register form pre-filled with same visit data for easy re-submit |
| Overstay alert | Guard: Overstay detail screen for that visitor |
| Blacklist match | Guard: Security alert screen with match detail |
| Pass expiring soon | My Pass screen with renew/contact host CTA |
| Pre-visit reminder | My Pass screen showing upcoming visit pass |

---

## SECTION 22 — DEVELOPER HANDOFF & COMPONENT SPECS

**AI GENERATION PROMPT**  
Prepare developer-ready component specifications for all key PASSE components. Include exact pixel values, colors (hex), fonts, spacing, border radius, shadow values, animation timing, and state variants. Output must be usable directly by a React Native or Flutter developer.

### Component Specification Table

| Component | Property | Value |
|-----------|----------|-------|
| Primary Button | Height | 52px |
| Primary Button | Border Radius | 12px |
| Primary Button | Background | `#0F2040` |
| Primary Button | Font | 16px / 600 / white |
| Primary Button | Padding | 16px 24px |
| Primary Button | Active Scale | 0.97 |
| Input Field | Height | 52px |
| Input Field | Border Radius | 10px |
| Input Field | Border Default | 1px solid `#E5E7EB` |
| Input Field | Border Focus | 2px solid `#2563EB` |
| Input Field | Font | 15px / 400 |
| Status Chip | Height | 24px |
| Status Chip | Border Radius | 99px |
| Status Chip | Font | 11px / 700 / uppercase |
| Status Chip | Padding | 4px 10px |
| Card | Border Radius | 16px |
| Card | Border | 1px solid `#E5E7EB` |
| Card | Shadow | 0 2px 8px rgba(0,0,0,0.06) |
| Card | Padding | 20px |
| Bottom Tab | Height | 68px |
| Bottom Tab | Icon Size | 24px |
| Bottom Tab | Label Font | 10px / 600 |
| FAB | Size | 56px circle |
| FAB | Shadow | 0 4px 16px rgba(15,32,64,0.3) |
| Avatar (list) | Size | 44px circle |
| Avatar (detail) | Size | 80px circle |

### Animation Timing Reference

| Animation | Duration / Easing |
|-----------|-------------------|
| Button press feedback | 100ms / ease-out |
| Screen transition | 300ms / cubic-bezier(0.4, 0, 0.2, 1) |
| Modal rise | 400ms / spring(stiffness:300, damping:30) |
| Success checkmark | 600ms / ease-in-out |
| Error shake | 400ms / 3 iterations |
| Skeleton shimmer | 1500ms / ease-in-out / infinite |
| Scanner line | 2000ms / linear / infinite |
| NFC rings | 1200ms / ease-out / infinite / staggered 400ms |
| Occupancy counter | 800ms / ease-out |
| Tab switch | 150ms / ease-out |

---

## SECTION 23 — APP STORE SHOWCASE & MARKETING SCREENS

**AI GENERATION PROMPT**  
Design App Store quality showcase and marketing screens for PASSE. These are investor-ready, press-ready compositions. Each must tell a story about one key feature. Use iPhone 15 Pro device frames. Premium photography-quality compositions with real-looking data.

### Marketing Screens to Design

| Screen | Headline & Focus |
|--------|------------------|
| Hero Shot | 'Access Reinvented' — full-bleed navy background, glowing phone showing Access Granted screen, teal light rays |
| QR & Face Feature | 'Scan. Verify. Enter in 3 seconds.' — split screen: QR scan left, face recognition right |
| Multi-Location | 'One App. Every Location.' — isometric city map with Passe pins at multiple buildings |
| Analytics Power | 'Security Intelligence at a Glance.' — iPad + iPhone showing analytics dashboard |
| Badge Generator | 'Professional Access Passes, Instantly.' — printed badge mockup next to digital version |
| Blacklist Protection | 'Protecting Your Premises, Automatically.' — abstract security shield with subtle data visualization |
| Enterprise Ready | 'Built for Hotels, Offices, Hospitals.' — industry icons in premium card layout |

### App Store Assets

| Asset | Specification |
|-------|---------------|
| App Icon | 1024×1024px. Navy background, white wifi-lock icon. No alpha channel |
| iPhone Screenshots | 1290×2796px (6.7 inch). 5 required, up to 10. Use marketing frames |
| iPad Screenshots | 2048×2732px. 3 required if universal app |
| App Preview Video | 15-30 seconds. Show: scan entry, approval flow, analytics, badge. No voiceover needed |
| Feature Graphic (Android) | 1024×500px. Text: 'Enterprise Access Control. Simplified.' |

---

## SECTION 24 — AI GENERATION WORKFLOW INSTRUCTIONS

**IMPORTANT**  
DO NOT generate all prompts at once. Follow the sequential workflow below. Each section builds on the previous. Skipping steps creates visual inconsistency.

### Generation Order

| Order | Section to Generate First |
|-------|---------------------------|
| Step 1 | Section 1: Color System + Section 2: Component Library — establish the design foundation |
| Step 2 | Section 4: Splash & Onboarding — first user touchpoint |
| Step 3 | Section 5: Authentication — complete all auth screens before any portal |
| Step 4 | Section 6: Visitor Portal — most common user type, establish portal pattern |
| Step 5 | Section 7: Employee Portal — reuse visitor portal patterns |
| Step 6 | Section 8: Security Guard Portal — unique scanning-first UX |
| Step 7 | Section 9: Admin Portal — most complex, builds on all previous |
| Step 8 | Section 10: Access Methods — shared across all portals |
| Step 9 | Section 11-15: Feature systems (Visit Mgmt, Analytics, Blacklist, Multi-Location, History) |
| Step 10 | Section 16-18: Supporting systems (Notifications, Settings, Language) |
| Step 11 | Section 19: Edge Cases — every screen must handle failure gracefully |
| Step 12 | Section 20: Motion System — applied retroactively across all screens |
| Step 13 | Section 21-22: Navigation Logic + Developer Handoff |
| Step 14 | Section 23: Marketing Screens — done last, after product is defined |

### Consistency Checklist (Apply to Every Screen)

- Same logo placement (top left or centered, never both)
- Same back navigation pattern (chevron-left + screen title)
- Same status bar treatment (light on dark bg, dark on light bg)
- Same bottom tab bar across all portal screens
- Same typography scale (no custom font sizes outside the system)
- Same button styles (no mixing filled/outlined without purpose)
- Same card shadow and radius (16px, 1px border, shadow-sm)
- Same color for same status (green = granted, red = denied, amber = pending — ALWAYS)
- Same empty state format (illustration + title + subtitle + CTA)
- Same loading state (skeleton shimmer, not spinner inside content area)

### Design Quality Gates

Before finalizing any screen, verify:
- All text passes WCAG AA contrast ratio
- All interactive elements are minimum 44×44px
- All states are designed: default, loading, success, error, empty
- Screen makes sense without color alone (icon + text + color)
- Dark mode version is designed or explicitly documented
- Developer can build this from the spec without asking questions

### Final Product Vision

The finished Passe design system must feel like:
- A product a luxury hotel chain would proudly deploy in their lobby
- A system a government ministry would trust with national building security
- An app a tech company features in their investor deck
- A design a team of 10 Figma experts built over 6 months
- Something you would see featured in Apple's App Store 'Apps We Love' section

---

**You are not designing screens. You are building a world-class product.**  

**PASSE — Enterprise Access. Redesigned.**  
*Master Design System v2.0*

--- 

This concludes the textual representation of the generated DOCX document.