import React from "react";
import Footer from "@theme-original/BlogPostItem/Footer";
import Giscus from "@giscus/react";

export default function FooterWrapper(props) {
  return (
    <>
      <Giscus
        repo="adriatic/RADC"
        repoId="R_kgDOHXU2GQ"
        category="General"
        categoryId="DIC_kwDOHXU2Gc4CSZzR"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="1"
        theme="dark"
      />
      <Footer {...props} />
    </>
  );
}
