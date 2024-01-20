# Node.js and React: Sample App
# Mario Test App

## Installation
### Prerequisites
* A DocuSign Developer account (email and password) on [demo.docusign.net](https://demo.docusign.net). If you don't already have a developer account, create a [free account](https://go.docusign.com/sandbox/productshot/?elqCampaignId=16535).
* A DocuSign integration key (a client ID) that is configured to use **JSON Web Token (JWT) Grant**. You will need the **integration key** itself and its **RSA key pair**. To use this application, you must add your application's **Redirect URI** to your integration key. To run locally, add http://localhost:3000/index and http://localhost:3000 as your **Redirect URI**. This [**video**](https://www.youtube.com/watch?v=GgDqa7-L0yo) demonstrates how to create an integration key (client ID) for a user application like this example.
* [Payment gateway](https://github.com/docusign/sample-app-mytelecom-nodejs#configure-a-payment-gateway) for your developer account.
* [Enable SMS delivery for your account](https://developers.docusign.com/docs/esign-rest-api/esign101/concepts/sms-delivery/).
* [Node.js](https://nodejs.org/) v10+.

### Creating a new integration
Before you can run this app on your local machine, you first must create a new integration with a DocuSign developer account.
1. First, get a local copy of this repo by either downloading it or cloning it onto your computer.
2. If you don't already have one, create a [free developer account](https://go.docusign.com/o/sandbox/).
3. Log into your developer account, and navigate to [Apps and Keys](https://admindemo.docusign.com/authenticate?goTo=appsAndKeys).
4. Copy over **User ID** and **API Account ID** to your `env_example` file
   * Rename the file to `.env`
5. On the Apps and Keys page, select **Add App and Integration Key**.
6. Name the integration and then copy over the **Integration Key** GUID to your `.env` file
7. On the integration page, navigate to **Service Integration** and select **Generate RSA**
   * Copy the Private Key into your local repo in the `example_private.key` file.
     * Rename the file to `private.key`
8. Add the following as redirect URIs for your app:
   * http://localhost:3000
   * http://localhost:3000/index


### Environment variables
* **USER_ID** - A GUID unique to each user's DocuSign Account, located on the Apps and Keys page.
* **API_ACCOUNT_ID** - A GUID unique to each user's DocuSign Account, located on the Apps and Keys page.
* **INTEGRATION_KEY** - The integration key is the same as the client ID.
* **DS_OAUTH_SERVER** - The DocuSign authentication server, used for JWT (for testing purposes, use `https://account-d.docusign.com`).
* **SESSION_SECRET** - A unique string of your choice that is used to encrypt the session cookie.
* **TARGET_ACCOUNT_ID** - Target account ID. Use FALSE to indicate the user's default.
* **PAYMENT_GATEWAY_ACCOUNT_ID**.
* **PAYMENT_GATEWAY_NAME**.
* **PAYMENT_GATEWAY_DISPLAY_NAME**.
* **REDIRECT_URI_HOME** - Where the user will be redirected after providing consent for JWT.
* **REDIRECT_URI** - Where the user will be redirected after executing the scenarios.
* **PORT_NUMBER** - The port number for back end application.

### Installing the dependencies
After you have configured your DocuSign settings and integration, you can begin installing the dependencies on your local machine.
1. If you do not already have Node.js installed on your computer, install it from the [Node.js website](https://nodejs.org/en/download/). If you are not sure whether you already have Node.js installed, open up a command-line window and enter: `npm version`  
If you get the current version or a message about a patch, you have Node.js installed. If not, you will need to install it.
2. Open up a command-line window and navigate to the client window with `cd client` and run `npm install`
3. Then, navigate into the server directory with `cd ../server` and run `npm install`

## Running locally
### Manual
1. Navigate to project folder: **`cd sample-app-nodejs`**
2. Navigate to the client folder with **`cd client`** and run **`npm run start`**
3. Navigate to the server directory with **`cd ../server`** and run **`npm run start`**
4. Open a browser to http://localhost:3000 

### Using scripts
1. Navigate to the application folder: **`cd sample-app-nodejs`**
2. Navigate to the server folder: **`cd server`**
3. Run **``npm run dev``**
4. Open a browser to http://localhost:3000 
