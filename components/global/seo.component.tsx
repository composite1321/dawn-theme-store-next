
import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
}

const SITE_NAME = "Dawn | Store";
const SITE_URL = "https://dawn-shop.com";

export default function SEO({
  title,
  description = "Welcome to Dawn Fashion Store.",
  canonical = SITE_URL,
  image = "/assets/main-logo.png",
  noindex = false,
}: SEOProps) {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : SITE_NAME;

  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{pageTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={canonical}
      />

      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow"
        }
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
