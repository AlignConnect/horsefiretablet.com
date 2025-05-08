import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./statemanage/context";
import Script from "next/script";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const Wrapper = dynamic(() => import("@/app/wrapper/page"));

export const metadata = {
  title: "Horse Fire Tablet",
  description: "Horse Fire Tablet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* //-------------------------------------------------------- */}



        <input type="hidden" value="arayurveda.shop" id="sellerDomain" />

        <script
          src="https://fastrr-boost-ui.pickrr.com/assets/js/channels/shopify.js"
          defer
        ></script>

        <link
          rel="stylesheet"
          href="https://fastrr-boost-ui.pickrr.com/assets/styles/shopify.css"
        ></link>


        {/* <!-- Criteo Loader File --> */}
        <script type="text/javascript" src="//dynamic.criteo.com/js/ld/ld.js?a=119702" async={true}></script>
        {/* <!-- END Criteo Loader File --> */}


        {/* <!-- Criteo Homepage Tag --> */}


        <Script strategy="lazyOnload" type="text/javascript">
          {`

      window.criteo_q = window.criteo_q || [];
  var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";
  window.criteo_q.push(
    { event: "setAccount", account: 119702 },
     { event: "setEmail", email: "##Email Address of User##" },
    { event: "setSiteType", type: deviceType},
    { event: "viewHome" }
  );

          `}
        </Script>

        {/* <!-- END Criteo Homepage Tag --> */}




        <Script strategy="lazyOnload" type="text/javascript">
          {`

      window.criteo_q = window.criteo_q || [];
  var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";
  window.criteo_q.push(
    { event: "setAccount", account: 119702 },
    { event: "setEmail", email: "##Email Address of User##" },
    { event: "setSiteType", type: deviceType},
    { event: "viewItem",
       item: "##Product ID##"
     }
  );


          `}
        </Script>








        {/* <script

          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var flspdx = new Worker("data:text/javascript;base64," + btoa('onmessage=function(e){var t=new Request("https://raw.githubusercontent.com/gospeedify/files/main/speedreq.js",{redirect:"follow"});fetch(t).then(e=>e.text()).then(e=>{postMessage(e)})};'));flspdx.onmessage = function (t) {var e = document.createElement("script");e.type = "text/javascript", e.textContent = t.data, document.head.appendChild(e)}, flspdx.postMessage("init");`,
          }}
        ></script>
        <script

          type="text/javascript"
          data-flspd="1"
          dangerouslySetInnerHTML={{
            __html: `var flspdxHA=["hotjar","xklaviyo","recaptcha","gorgias","facebook.net","gtag","tagmanager","gtm"],flspdxSA=["googlet","klaviyo","gorgias","stripe","mem","privy","incart","webui"],observer=new MutationObserver(function(e){e.forEach(function(e){e.addedNodes.forEach(function(e){if("SCRIPT"===e.tagName&&1===e.nodeType)if(e.innerHTML.includes("asyncLoad")||"analytics"===e.className)e.type="text/flspdscript";else{for(var t=0;t<flspdxSA.length;t++)if(e.src.includes(flspdxSA[t]))return void(e.type="text/flspdscript");for(var r=0;r<flspdxHA.length;r++)if(e.innerHTML.includes(flspdxHA[r]))return void(e.type="text/flspdscript")}})})}),ua=navigator.userAgent.toLowerCase();ua.match(new RegExp("chrome|firefox"))&&-1===window.location.href.indexOf("no-optimization")&&observer.observe(document.documentElement,{childList:!0,subtree:!0});`,
          }}
        ></script>

        <script src="./speedmin.js"></script> */}

        {/* --------------------------- */}

        {/* <!--Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GC608J9SEF"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-GC608J9SEF');
      </script> */}

        {/* START ExoClick Goal Tag | Website Interation  */}
        <script
          type="application/javascript"
          src="https://a.exoclick.com/tag_gen.js"
          data-goal="7e5b498a58b821e11d9820a8460f60de"
        ></script>
        {/* END ExoClick Goal Tag | Website Interation */}

        <link
          rel="icon"
          media="all"
          href={
            "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/30df694e-2a8a-423e-0bbc-e76cb744aa00/public"
          }
        />

        <Script
          strategy="lazyOnload"
          // async={true}
          // defer={true}
          src={`https://www.googletagmanager.com/gtag/js?id=G-GC608J9SEF`}
        />
        <Script
          strategy="lazyOnload"
        // defer
        // async
        >
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-GC608J9SEF', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>

        {/* <Script strategy="lazyOnload" src="https://cdn.ocmhood.com/sdk/osw.js">
       
      </Script>


      <Script strategy="lazyOnload">
        {`
       !function(h,oo,d,y,t,a,g){h[y]=t[y]||function(){(h[y].q=h[y].q||[]).push(arguments)},h[y].l=1*new Date,a=oo.createElement(d),g=oo.getElementsByTagName(d)[0],a.async=1,a.crossOrigin='anonymous',a.src=t,g.parentNode.insertBefore(a,g)}(window,document,'script','Hood','https://sdk.ocmhood.com/sdk/ht.js?tag=NjY4UpByNLeVvzQ2B4gxNDY4MjE0NnFs');
        `}
      </Script> */}

        <Script strategy="lazyOnload">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W9XCD5FJ');
        `}
        </Script>
      </head>

      <body className={inter.className}>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W9XCD5FJ"
          height="0"
          width="0"
        ></iframe>

        <Image
          src="//tsyndicate.com/api/v1/retargeting/set/6c4f0005-359d-47e8-892b-3c6003fb220e"
          alt="alt"
          width={1}
          height={1}
        />

        {/* ---------------------------------------------------------- */}
        {/* <div style={{
          position: "absolute",
          fontSize: "1200px",
          lineHeight: 1,
          wordWrap: 'break-word',
          top: 0, left: 0, width: '50vw', height: '50vh', maxWidth: '50vw', maxHeight: '50vh',
          pointerEvents: 'none', zIndex: 99999999999,
          color: 'transparent', overflow: 'hidden'
        }}
          data-optimizer="SP:Store-js">□</div> */}

        {/* ---------------------------------------------------------- */}

        <GlobalContextProvider>
          <Wrapper>{children}</Wrapper>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
