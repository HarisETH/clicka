// React Imports

import Head from "next/head";
import Image from "next/image";

// Component Imports

import Editor from "@/components/Editor";
import Header from "@/components/Header";
//API Imports

//CodeMirror

import CodeMirror from "@uiw/react-codemirror";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gravity - LightWeight Code Screenshot Exporter</title>
        <meta
          name="description"
          content="Code Screenshot exporter light as a feather fast as light"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="flex bg-gray-100 flex-col items-center justify-start pt-16 min-h-screen w-full  ">
        <Header />

        <Editor />

      </main>
    </>
  );
}

// installed codemirror base, themes, languages
