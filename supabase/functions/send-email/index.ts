import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_URL = "https://api.resend.com/emails";

function esc(s: string): string {
  if (!s) return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function maskText(str: string): string {
  if (!str) return "";
  if (str.includes('@')) {
    const parts = str.split('@');
    return parts[0].charAt(0) + '****@' + parts[1];
  }
  return str.split(' ').map(n => n.charAt(0) + '***').join(' ');
}

type HighlightItem = { label: string; value: string; isLink?: boolean };

function buildTemplate(
  title: string, 
  name: string, 
  message: string, 
  highlights: HighlightItem[], 
  buttonText: string | null,
  buttonLink: string | null,
  footerText: string,
  isAlert = false
) {
  const alertStyle = isAlert ? 'color: #ff3b30;' : 'color: #1d1d1f;';
  const cardBg = isAlert ? 'background-color: #fff0f0;' : 'background-color: #f5f5f7;';
  const labelColor = isAlert ? 'color: #ff3b30;' : 'color: #86868b;';
  const valueColor = isAlert ? 'color: #ff3b30;' : 'color: #1d1d1f;';
  
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    :root { color-scheme: light dark; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #f5f5f7; color: #1d1d1f; margin: 0; padding: 40px 20px; line-height: 1.5;
    }
    .container {
      max-width: 480px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; padding: 40px;
    }
    .logo-container { text-align: center; margin-bottom: 12px; }
    .logo-img { width: 44px; height: 44px; border-radius: 10px; margin-bottom: 4px; object-fit: contain; }
    .logo-text { font-size: 16px; font-weight: 700; letter-spacing: -0.01em; color: #1d1d1f; }
    .header { text-align: center; font-size: 26px; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 20px; ${alertStyle} }
    .content { font-size: 17px; letter-spacing: -0.01em; color: #515154; margin-bottom: 28px; }
    .greeting { font-weight: 600; color: #1d1d1f; margin-bottom: 8px; }
    .highlight-card { ${cardBg} border-radius: 16px; padding: 20px; margin-bottom: 32px; }
    .highlight-item { margin-bottom: 16px; }
    .highlight-item:last-child { margin-bottom: 0; }
    .highlight-label { font-size: 13px; font-weight: 600; ${labelColor} text-transform: uppercase; letter-spacing: 0.02em; margin-bottom: 4px; }
    .highlight-value { font-size: 17px; font-weight: 600; ${valueColor} word-break: break-all; }
    .highlight-value.link { text-decoration: underline; }
    
    /* Hover reveal styles with safe inline fallback */
    .reveal-wrapper { cursor: default; }
    @media (hover: hover) {
      .reveal-wrapper:hover .masked { display: none !important; }
      .reveal-wrapper:hover .unmasked { display: inline !important; letter-spacing: normal; }
    }

    .button {
      display: block; background-color: #1d1d1f; color: #ffffff; font-size: 17px; font-weight: 600; text-decoration: none; padding: 16px 24px; border-radius: 14px; text-align: center; width: 100%; box-sizing: border-box;
    }
    .footer { max-width: 480px; margin: 32px auto 0; text-align: center; font-size: 13px; color: #86868b; line-height: 1.4; }
    
    @media (prefers-color-scheme: dark) {
      body { background-color: #000000; color: #f5f5f7; }
      .container { background-color: #1c1c1e; }
      .header, .logo-text, .greeting { color: #ffffff; }
      .content { color: #a1a1a6; }
      .highlight-card { ${isAlert ? 'background-color: #3b1515;' : 'background-color: #2c2c2e;'} }
      .highlight-label { ${isAlert ? 'color: #ff6b60;' : 'color: #98989d;'} }
      .highlight-value { ${isAlert ? 'color: #ff6b60;' : 'color: #ffffff;'} }
      .button { background-color: #ffffff; color: #1d1d1f; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo-container">
      <img src="https://res.cloudinary.com/dahlcyt3t/image/upload/v1788353887/prive_iovvna.svg" alt="Privé Logo" class="logo-img" />
      <div class="logo-text">Privé</div>
    </div>
    <div class="header">${title}</div>
    <div class="content">
      <div class="greeting">Hi <span class="reveal-wrapper"><span class="masked" style="display: inline; letter-spacing: 2px;">${esc(maskText(name))}</span><span class="unmasked" style="display: none; mso-hide: all;">${esc(name)}</span></span>,</div>
      ${message}
    </div>
    ${highlights.length > 0 ? `
    <div class="highlight-card">
      ${highlights.map(h => `
      <div class="highlight-item">
        <div class="highlight-label">${h.label}</div>
        <div class="highlight-value ${h.isLink ? 'link' : ''}">${h.value}</div>
      </div>`).join('')}
    </div>
    ` : ''}
    ${buttonText && buttonLink ? `<a href="${buttonLink}" class="button">${buttonText}</a>` : ''}
  </div>
  <div class="footer">
    &copy; Privé &middot; Secure Password Manager<br>
    ${esc(footerText)}
  </div>
</body>
</html>`;
}

function buildWelcome(name: string): string {
  return buildTemplate(
    "Welcome to Privé", name,
    "Your Privé account is ready. Set up your vault to start saving and managing your credentials securely.",
    [], 
    null, null,
    "If you did not sign up for Privé, please ignore this email."
  );
}

function buildVaultSetup(name: string): string {
  return buildTemplate(
    "Your vault is ready", name,
    "Your Privé vault has been successfully set up. Your credentials are encrypted and secured with your master password.<br><br><b>Important:</b> Your vault password is not recoverable. Always remember it and keep it safe. Never give anyone your security details.",
    [], 
    null, null,
    "If you did not set up this vault, please ignore this email."
  );
}

function buildShareCreated(name: string, site: string): string {
  return buildTemplate(
    "Credential shared", name,
    "You just created a secure share link. The recipient will be able to access your credential securely.",
    [
      { label: "Service", value: esc(site), isLink: true },
      { label: "Expiration", value: "10 minutes" }
    ],
    "Log in to Privé", "https://prive-extension.com",
    "If you did not create this share link, log in to your extension and revoke access immediately."
  );
}

function buildShareAddedSender(name: string, site: string, recipientName: string): string {
  const maskedName = esc(maskText(recipientName));
  const unmaskedName = esc(recipientName);
  return buildTemplate(
    "Credential added", name,
    `Since someone has edited your credentials for <b>${esc(site)}</b>.<br><br>
    <b>Added by:</b><br>
    Name: <span class="reveal-wrapper"><span class="masked" style="display: inline; letter-spacing: 2px;">${maskedName}</span><span class="unmasked" style="display: none; mso-hide: all;">${unmaskedName}</span></span>`,
    [],
    "Log in to Privé", "https://prive-extension.com",
    "If you do not recognize this person, log in to your extension and revoke access immediately."
  );
}

function buildShareAddedRecipient(name: string, site: string): string {
  return buildTemplate(
    "Credential added", name,
    "You have successfully added a shared credential to your secure vault.",
    [
      { label: "Service", value: esc(site), isLink: true }
    ],
    "Log in to Privé", "https://prive-extension.com",
    "If you did not add this credential to your vault, please log in and remove it."
  );
}

function buildShareRevokedRecipient(name: string, site: string, revokerName: string): string {
  const maskedRevoker = esc(maskText(revokerName));
  const unmaskedRevoker = esc(revokerName);
  const revokerHtml = `<span class="reveal-wrapper"><span class="masked" style="display: inline; letter-spacing: 2px;">${maskedRevoker}</span><span class="unmasked" style="display: none; mso-hide: all;">${unmaskedRevoker}</span></span>`;

  return buildTemplate(
    "Access Revoked", name,
    "Your access to the shared credential has been securely revoked.",
    [
      { label: "Service", value: esc(site), isLink: true },
      { label: "Revoked by", value: revokerHtml }
    ],
    null, null,
    "If you believe this is a mistake, please ask the owner to share it again.",
    true
  );
}

function buildShareRevokedSender(name: string, site: string): string {
  return buildTemplate(
    "Access Revoked", name,
    "You have successfully revoked access to your shared credential.",
    [
      { label: "Service", value: esc(site), isLink: true }
    ],
    null, null,
    "If you did not initiate this action, please review your account security.",
    true
  );
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method !== "POST") {
      return json({ error: "Method not allowed" }, 405);
    }

    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return json({ error: "Unauthorized" }, 401);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return json({ error: "Unauthorized" }, 401);
    }
    let recipientEmail = user.email!;

    // deno-lint-ignore no-explicit-any
    let body: any;
    try {
      body = await req.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400);
    }

    const action: unknown = body?.action;
    let name: string = typeof body?.name === "string" ? body.name : "there";
    const site: string = typeof body?.site === "string" ? body.site : "a site";
    const recipientName: string = typeof body?.recipient_name === "string" ? body.recipient_name : "Someone";
    
    // Revoker name defaults to `name`
    const revokerName: string = typeof body?.revoker_name === "string" ? body.revoker_name : name;

    // If to_user_id is provided, we fetch their email using the service role key
    if (typeof body?.to_user_id === "string") {
      const supabaseAdmin = createClient(
        Deno.env.get("SUPABASE_URL")!,
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
      );
      const { data: { user: toUser } } = await supabaseAdmin.auth.admin.getUserById(body.to_user_id);
      if (toUser && toUser.email) {
        recipientEmail = toUser.email;
        if (name === "there" && toUser.user_metadata?.full_name) {
          name = toUser.user_metadata.full_name;
        } else if (name === "there" && toUser.email) {
          name = toUser.email.split("@")[0];
        }
      }
    } else if (typeof body?.to_email === 'string' && body.to_email) {
      recipientEmail = body.to_email;
    }

    if (typeof action !== "string" || !action) {
      return json({ error: "action is required" }, 400);
    }

    const templates: { [key: string]: { subject: string; html: string } | undefined } = {
      welcome:       { subject: "Welcome to Privé",                  html: buildWelcome(name) },
      vault_setup:   { subject: "Your Privé vault is ready",         html: buildVaultSetup(name) },
      share_created: { subject: "You shared a credential on Privé",  html: buildShareCreated(name, site) },
      share_added_sender: { subject: "Your shared credential was added", html: buildShareAddedSender(name, site, recipientName) },
      share_added_recipient: { subject: "Shared credential added to vault", html: buildShareAddedRecipient(name, site) },
      share_revoked_recipient: { subject: "Access Revoked: Shared Credential", html: buildShareRevokedRecipient(name, site, revokerName) },
      share_revoked_sender: { subject: "Access Revoked: Shared Credential", html: buildShareRevokedSender(name, site) },
    };

    const template = templates[action];
    if (!template) {
      return json({ error: "Unknown action" }, 400);
    }

    const resendKey = Deno.env.get("RESEND_API_KEY");
    const fromAddress = Deno.env.get("RESEND_FROM");
    if (!resendKey || !fromAddress) {
      console.error("Missing RESEND_API_KEY or RESEND_FROM env vars");
      return json({ error: "Server misconfiguration" }, 500);
    }

    const resendRes = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: fromAddress,
        to: recipientEmail,
        subject: template.subject,
        html: template.html,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error("Resend error:", resendRes.status, errBody);
      return json({ error: "Failed to send email" }, 500);
    }

    return json({ success: true }, 200);
  } catch (err) {
    console.error("send-email error:", err);
    return json({ error: "Internal server error" }, 500);
  }
});

function json(body: object, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
