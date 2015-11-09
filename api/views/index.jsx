// Default layout template
const React = require('react');
const jsBundle = require('../../build/utils.js').getJsBundle();

export default class Index extends React.Component {
  render() {
    const title = 'Near-Earth Asteroids';
    const jsBundlePath = `/static/js/${jsBundle}`;

    return (
      <html>
      <head>

        <meta
          charSet="utf-8">
        </meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1">
        </meta>
        <title>
          {title}
        </title>
            <link
              href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
              rel="stylesheet">
            </link>
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
          type="text/css">
        </link>
      </head>
      <body>
        <div id="app">
        </div>
        <script
          src="http://code.jquery.com/jquery-2.1.4.min.js">
        </script>
        <script
          src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js">
        </script>
        <script
          src={jsBundlePath}>
        </script>
      </body>
      </html>
    );
  }
}

