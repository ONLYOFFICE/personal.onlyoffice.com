import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const Homepage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <link
          href="/images/logo/favicon_general.ico"
          rel="icon"
          type="image/x-icon"
        />
      </Head>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Homepage;
