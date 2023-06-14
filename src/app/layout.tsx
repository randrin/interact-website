import InteractFooter from "@/core/InteractFooter";
import "./globals.css";
import { Inter } from "next/font/google";
import InteractHeader from "@/core/InteractHeader";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>Interact - Business Consulting and Agency</title>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Calling Favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.png" />
        {/* Calling Favicon */}
        {/* ********************* */}
        {/* CSS files */}
        <link rel="stylesheet" href="../../css/bootstrap.min.css" />
        <link rel="stylesheet" href="../../css/animate.css" />
        <link rel="stylesheet" href="../../css/all.min.css" />
        <link rel="stylesheet" href="../../css/owl.carousel.min.css" />
        <link rel="stylesheet" href="../../css/nice-select.css" />
        <link rel="stylesheet" href="../../css/magnific-popup.css" />
        <link rel="stylesheet" href="../../css/meanmenu.css" media="all" />
        <link rel="stylesheet" href="../../css/default.css" />
        <link rel="stylesheet" href="../../css/style.css" />
        <link
          rel="stylesheet"
          className="color-changing"
          href="../../css/color.css"
        />
        <link rel="stylesheet" href="../../css/responsive.css" />
        <script src="../../js/jquery-1.12.4.min.js" async></script>

      </head>
      <body>
        {/* Preloader start */}
        <div className="loader-page flex-center">
          <img src="../../img/loader.gif" alt="Loader" />
        </div>
        {/* Preloader end */}
        <InteractHeader />
        {children}
        <InteractFooter />
        {/* Theme skins */}
        {/* JS Files */}

        {/* <script src="../../js/main.js" async></script> */}
        <script src="../../js/owl.carousel.min.js" async></script>
        <script src="../../js/bootstrap.bundle.min.js" async></script>
        <script src="../../js/jquery.magnific-popup.min.js" async></script>
        <script src="../../js/modernizr-3.5.0.min.js" async></script>
        <script src="../../js/jquery.nice-select.min.js" async></script>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js" integrity="sha512-fHXRw0CXruAoINU11+hgqYvY/PcsOWzmj0QmcSOtjlJcqITbPyypc8cYpidjPurWpCnlB8VKfRwx6PIpASCUkQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" async></script> */}
        <script src="../../js/jquery.counterup.min.js" async></script>
        <script src="../../js/jquery.countdown.min.js" async></script>
        <script src="../../js/lightslider.min.js" async></script>
        <script src="../../js/wow.min.js" async></script>
        {/* <script src="../../js/isotope.pkgd.min.js" async></script> */}
        <script src="../../js/jquery.meanmenu.min.js" async></script>
        <script src="../../js/main.js" async></script>
        {/* JS Files end */}
      </body>
    </html>
  );
}
