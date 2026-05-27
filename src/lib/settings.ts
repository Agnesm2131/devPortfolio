export const settings = {
  branding: {
    name: process.env.NEXT_PUBLIC_BRANDING_NAME || "devAgnes",
    suffix: process.env.NEXT_PUBLIC_BRANDING_SUFFIX || ".co"
  },
  colors: {
    accent: process.env.NEXT_PUBLIC_ACCENT_COLOR || "#c89814"
  },
  spotify: {
    discordId: process.env.NEXT_PUBLIC_DISCORD_ID || "1174296487782531084"
  }
};