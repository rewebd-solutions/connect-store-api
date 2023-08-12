import Express from 'express'

const app = Express()

app.use(Express.json())

app.post("/connect-shopify", (req, res) => {
    console.log(req.body);
    res.status(200).send("OK")
})

app.listen(8080, () => {
    console.log("App is running")
})