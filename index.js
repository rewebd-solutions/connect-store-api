import Express from 'express'
import cors from 'cors';

const app = Express()

app.use(cors())
app.use(Express.json())

app.post("/connect-shopify", async (req, res) => {
    const reqBody = req.body;
    // console.log(reqBody);
    const SHOPIFY_API_KEY = 'cd05b26a775ef288edb38cc689393e9c';
    const SHOPIFY_SECRET_KEY = '2ef5f09f546e58780a58c2a00bab8428';
    const SHOPIFY_ACCESS_TOKEN = reqBody.access_token;
    const SHOPIFY_SHOP_URL = reqBody.store_url
    // console.log(SHOPIFY_ACCESS_TOKEN + SHOPIFY_SHOP_URL)
    const shopifyEndpoint = `https://${SHOPIFY_SHOP_URL}.myshopify.com/admin/api/2023-07/orders.json?status=open&fields=created_at,id,name,total-price,contact-email`

    const fetchReq = await fetch(shopifyEndpoint, {
        headers: {
            'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN
        }
    })
    const fetchData = await fetchReq.json();

    res.status(200).json(fetchData);
})

app.listen(8080, () => {
    console.log("App is running")
})

// {
//     "access_token": "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",
//     "store_url": "testing-another-shop-data"
//   }