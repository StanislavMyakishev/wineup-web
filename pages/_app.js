import { RecoilRoot } from 'recoil'

const App = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <style jsx global>
        {`
          /* Box sizing rules */
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          /* Remove default padding */
          ul[class],
          ol[class] {
            padding: 0;
          }

          /* Remove default margin */
          body,
          h1,
          h2,
          h3,
          h4,
          p,
          ul[class],
          ol[class],
          li,
          figure,
          figcaption,
          blockquote,
          dl,
          dd {
            margin: 0;
          }

          /* Set core body defaults */
          body {
            font-family: 'PT Sans', sans-serif;
            min-height: 100vh;
            scroll-behavior: smooth;
            text-rendering: optimizeSpeed;
            line-height: 1.5;
          }

          /* Remove list styles on ul, ol elements with a class attribute */
          ul[class],
          ol[class] {
            list-style: none;
          }

          /* A elements that don't have a class get default styles */
          a:not([class]) {
            text-decoration-skip-ink: auto;
          }

          /* Make images easier to work with */
          img {
            max-width: 100%;
            display: block;
          }

          /* Inherit fonts for inputs and buttons */
          input,
          button,
          textarea,
          select {
            font: inherit;
          }
        `}
      </style>
    </RecoilRoot>
  )
}

export default App