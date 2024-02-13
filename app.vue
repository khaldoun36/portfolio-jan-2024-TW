<template>
  <div class="content-grid">
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="preload"
        href="./public/fonts/GeistVariableVF.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <title>Khaldoon.dev</title>
    </Head>
    <PrimaryHeader />
    <div class="py-20 lg:py-24">
      <NuxtPage />
    </div>
    <PrimaryFooter />
  </div>
</template>

<style></style>
