app.use(express.static('./dist/cvjd'));
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/cvjd/' }
    );
});
app.listen(process.env.PORT || 8080);