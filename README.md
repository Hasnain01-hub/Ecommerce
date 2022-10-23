# Medusa Store


<!-- ![Screenshot](./cover-image.jpg) -->


## About

### Participants

* Hasnain Sayyed - [GitHub](https://github.com/refinedev/refine) - [LinkedIn](https://twitter.com/refine_dev)
* Adil Khatri  -  [GitHub](https://github.com/adil-khatri) - [LinkedIn](https://twitter.com/refine_dev)
* Ronak Lala  -  [GitHub](https://github.com/adil-khatri) - [LinkedIn](https://twitter.com/refine_dev)
* Om Jadhav  -  [GitHub](https://github.com/adil-khatri) - [LinkedIn](https://twitter.com/refine_dev)


### Description

This is a complete eCommerce app built with Medusa.js, Next.js, Tailwind.

We have built an eCommerce Web App 
We were planning to build a swag store for our open source project called refine.

We had two options when it came to building this shop.

The first option was to deploy a ready-made solution like Shopify, and the second was to create a custom solution.

Since refine can be used to build eCommerce storefronts with SSR support, we started looking for Headless eCommerce solutions.
During this process, we met with the Medusa, and we decided that the solution offered by Medusajs fit us quite well. 
Starting from this, we decided to use the Medusa commerce API and built the storefront app with refine and Next.js. 
 
In that way, we could share complete eCommerce store solutions with the open source community. Also, it helps us to test our framework with a real-world use case.

We deployed our Medusa commerce API fastly without pain. First, we deployed our admin interface and created products, collections, and other stuff. 
For the UI, we used [Vercel's eCommerce template](https://demo.vercel.store/). Since there is no payment step involved in Vercel's eCommerce template, we took advantage of the (nextjs-starter-medusa)[https://github.com/medusajs/nextjs-starter-medusa] for checkout and account features.

So basically, we built a complete eCommerce storefront by combining Vercel's eCommerce template with nextjs-starter-medusa.

Currently, we are using this store and have already processed real shopping transactions with credit cards and gift codes. 

 The app includes the following features:
- Authentication & Authorization
- Product Listing
- Account information pages
- Product detail
- Shopping cart
- Payment with Stripe
- Gift Code feature
- Email send and verification

### Preview


<!-- ![App preview](https://refine-store.fra1.cdn.digitaloceanspaces.com/video/refine-store-demo.gif)                                                                -->
   
                                                                              
                                                                   
## Set up Project   
### Prerequisites

- Minimum Node v16.0.0 
- [Medusa API](https://docs.medusajs.com/quickstart/quick-start)

### Install Project

Clone the project

```
git clone https://github.com/Hasnain01-hub/Ecommerce
```

Go to the project directory inside client folder, Install Medusajs globally.

```
npm install -g @medusajs/medusa-cli
```
```
npm install
```

Create your own medusa store locally inside client folder.

```
medusa new my-medusa-store --seed
```
This will create a my-medusa-store folder

```
cd my-medusa-store
develop medusa
```
This will start the medusa server on port 9000

### Running the development server inside client folder.

```bash
npm run dev
```

