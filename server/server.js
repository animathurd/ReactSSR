import express from "express";
import path from "path";

const app = express();

app.use( express.static( path.resolve( __dirname, "./dist" ) ) );

app.get( "/resources/:filepath", ( req, res ) => {
    res.sendFile(path.resolve(__dirname, `../dist/${req.params.filepath}`));
});

app.get( "/*", ( req, res ) => {
    res.sendFile(path.resolve(__dirname, `../index.html`));
} );

app.listen( 2048, () => {
    console.log('Server running on port 2048...')
} );
