import Document, { Html, Head, Main, NextScript } from "next/document";

class myApp extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {/* Bootstrap CSS */}
          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
            integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
            crossOrigin='anonymous'
          />
          {/*Font Awesome*/}
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css' />
          {/*Lity Lightbox*/}
          <link href='https://cdnjs.cloudflare.com/ajax/libs/lity/2.3.1/lity.css' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/*Bootstrap scripts*/}
          <script
            src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
            integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
            crossOrigin='anonymous'
          />
          {/*Lity Lightbox script*/}
          <script src='https://cdnjs.cloudflare.com/ajax/libs/lity/2.3.1/lity.js' />
          <script
            src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'
            integrity='sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49'
            crossOrigin='anonymous'
          />
          <script
            src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
            integrity='sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy'
            crossOrigin='anonymous'
          />
        </body>
      </Html>
    );
  }
}

export default myApp;
