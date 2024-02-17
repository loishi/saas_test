import { env } from "@/env.mjs";
import { SiteConfig } from "types"

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Keio University Chess Club",
  description:
    "慶應義塾大学公認団体チェスクラブです。毎週月曜日と木曜日に日吉キャンパスで活動しています。",
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: "https://twitter.com/loishi_u",
    github: "https://github.com/loishi/saas_test",
  },
  mailSupport: "support@saas-starter.com"
}
