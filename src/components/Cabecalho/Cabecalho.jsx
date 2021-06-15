import Head from 'next/head'

export default function Cabecalho() {
  return (
    <div>
      <Head>
        <title>Challegend BossaBox</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name = "description" content = "Site criado no projeto do bossaBox para testar meus conhecimentos sobre react.js, no qual busca pela api posts contendo uma descrição previa e ao clicar neles você é redirecionado para pagina do site ao qual o post faz referencia." />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="rating" content="general" />
        <meta name = "robôs" content = "index, nofollow" />
        <meta name="author" content="Vitor Sierro"/>
        <meta name="keywords" content="Site, web, desenvolvimento react, React.js, Api/Rest, api, axios, ant-design" />
      </Head>
    </div>
  )
}