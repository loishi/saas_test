import Link from "next/link"

import { buttonVariants } from "~/components/ui/button"
import { siteConfig } from "~/config/site"
import { cn, nFormatter } from "~/lib/utils"
import { Icons } from "~/components/shared/icons"

export default async function IndexPage() {

  return (
    <>
      <section className="space-y-6 pb-12 pt-16 lg:py-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-5 text-center">
          <h1
            className="animate-fade-up text-balance font-urban text-2xl font-extrabold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Keio University Chess Club について

          </h1>

          <p
            className="max-w-[42rem] animate-fade-up text-balance leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >慶應義塾大学 公認大学 チェスクラブです。 </p>
          <p
            className="max-w-[42rem] animate-fade-up text-balance leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >毎週月曜日と木曜日に日吉キャンパスで活動しています</p>

          <div
            className="flex animate-fade-up justify-center space-x-2 opacity-0 md:space-x-4"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
          </div>
        </div>
      </section>
    </>
  )
}