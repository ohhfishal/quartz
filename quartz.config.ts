import { QuartzConfig } from "./quartz/cfg"
import { OgImage } from "./quartz/components"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "ohhfishal",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "ohhfishal.net",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
      lightMode: {
          light: "#ffffff",
          lightgray: "#f6f8fa",
          gray: "#d0d7de",
          darkgray: "#57606a",
          dark: "#24292f",
          secondary: "#0969da",
          tertiary: "#8250df",
          highlight: "rgba(9, 105, 218, 0.1)",
          textHighlight: "#fff8c5",
        },
        darkMode: {
          light: "#0d1117",
          lightgray: "#161b22",
          gray: "#30363d",
          darkgray: "#8b949e",
          dark: "#e6edf3",
          secondary: "#58a6ff",
          tertiary: "#a371f7",
          highlight: "rgba(88, 166, 255, 0.1)",
          textHighlight: "#ffd60a33",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages( {
        colorScheme: "darkMode",
      }),
    ],
  },
}

export default config
