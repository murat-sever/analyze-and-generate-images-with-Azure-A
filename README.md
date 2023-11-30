# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# About this project
This project is developed under [GitHub Universe Cloud Skills Challenge](https://learn.microsoft.com/en-us/collections/kkqrhmxoqn54?WT.mc_id=cloudskillschallenge_ef5f9f41-0818-4895-9217-79d19827a322)

For image analysis and generation, I got help from [this repo.](https://github.com/codeavila/analyze-and-generate-images-with-Azure-A)
## Image Analysis
For image analysis start npm with key like this: `REACT_APP_ENDPOINTVISION_KEY_1=abcdef npm start`

For local test use this [Image analysis example URL](https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png)

## Image Generation
OpenAI is used because DALL-E is only available for East US and Sweden. 
Created key at OpenAI for `GitHub Universe Cloud Skills Challenge`

Changed the endpoint in the reference repo.  

Then, start npm with `REACT_APP_DALLE_KEY=abcdef npm start`

You can use the prompt 'A puppy sitting in the grass' to test your app.

