This README is a work-in-progress. Please check the issues to see if something has not already been flagged for review.

# Getting Started

The Prifina app is a container application and this starter repository helps you develop apps within that platform. As a third-party developer, you can download Prifina's pre-built libraries, assets, and components to then design and craft your own application to be hosted on Prifina's platform.

*Warning:* Since our starter app is already built on React, there is no need to run `create-react-app`.

# Build with Starter

Build a Prifina app with the Prifina Starter and utilities. 

# Test with Launcher

Test locally or use the [Prifina launcher](https://github.com/prifina/prifina-widgets-launcher) to test your code in the Prifina platform.

# TLDR

Prifina provides a user-held data platform that allows you to build React applications that the user can install via our App Market and run them in their personal data clouds (AWS). These apps use <a href="https://reactjs.org/docs/components-and-props.html">props</a> or <a href="https://reactjs.org/docs/context.html">context providers</a> as the interface to connect with users personal data. 

To get your application published in our platform, you will need to supply the Prifina team an archive build deployment package with the relevant <a href="https://web.dev/add-manifest/">manifest</a> file, to be reviewed by the Prifina App market team. 

Your archive *must contain* a Prifina appID field in the manifest.js file. Wait to register as a developer to get an appID or contact one of our team on [Slack](https://join.slack.com/t/libertyequalitydata/shared_invite/zt-ddr4t974-MCzsch4FSeux8DrFQ2atbQ) to get ahead of the line.

## What Application to Build?

If you are wondering what data is available to build your application on, you can download the type of data that the users have, from looking at the <a href="https://www.prifina.com/your-data.html">Prifina Your Data</a> page. We recommend that you simply download your own data from any of these platforms or identify any other sources that are most interesting to you.

Probably the most interesting new type of applications can be built by mixing data from multiple different data sources and or combining those with public data sources, an example would be combining streaming data from personal data and utilizing it with publicly available movie/series data.

In addition to data that your application is using, you should also think about new data that your application will be able to generate for the user, that will become a new data source for other applications.

## How to Start?

When you have decided the application you want to build and have the data sources identified, a simple way to start building is by simply forking the relevant GitHub [library](https://github.com/prifina) and start building your own app.

You can also use these open source components from our Blend Design System library in our <a href="http://alpha.blend-ui.prifina.com/">Storybook</a>, and other useful assets from our <a href="https://github.com/prifina/blend-ui">GitHub</a>. 

You do not need to use these assets, but they can help get you started. 

## Application Data Model

### Data Source Details

Submit the data source information your applications will use:

- Data source URL, description
- Data Model and API Documentation URL if available
- Description of data objects and fields to be used
- How you plan to use this data in your application
- Additional notes

### About New Data Your Application Generates:

- Data Category
- Description of data objects and fields
- Additional notes
- Document Your App Data as a GraphQL Schema
- The end result for interacting with user-held data is documented in GraphQL Schema format
- Document your application data model as a GraphQL schema and send it to us for review along with schema visualization
- We will integrate it with our Open Standard Master Schema and provide you with the supported data model to use in your final application

### Helpful Tips

Here are some things to consider when thinking about data in your app:

- When considering the data model for your application, look into any open, industry or de facto standards where available
- New personal data that your application can create has increasing value to your customer and other developers
- What ‘log data’ you will need for debugging your application
- What non-personal / statistic data can your application create that may have value for your customers or other developers 
- What transactional data your application will generate
- Any configuration data you may need

## Getting Your Application Published

### Application Details for App Market

The App Market has the following fields that need to be filled out to describe the application and its various functionality:

- AppID (register as dev to claim - or get in touch on Slack)
- App name
- Description [max 250 characters]
- Key Features 
- Application Screenshot Images [SVG, GIF, JPEG under 5mb]
- App Publisher name 
- Type of Application, Local Data App, Widget App or Profile Data App.
- Application Category
- Available User Interfaces (Desktop Browser, Mobile Browser, Mobile App)
- Languages Supported
- Age Restrictions
- Data Permissions,  what type of data your application will require
- Support Contact

## Package Your Application
To get your application published in our App Market, you will need to supply the Prifina team a .Zip build deployment package with the relevant <a href="https://web.dev/add-manifest/">manifest</a> file, to be reviewed by the Prifina App market team.

## Get In Touch

To get in touch with us you can join our [Slack](https://join.slack.com/t/prifinadev/shared_invite/zt-8d8ynow6-UFwwICFyYmgT8L~juBsBUw) or email developer@prifina.com


## FAQ
**Q**: Do I have to use this starter repo to develop for Prifina?
**A**: If you would prefer to develop from scratch, we welcome you to do so.

**Q**: Do you support any JavaScript frameworks aside from React?  
**A**: We will gradually expand our support for other JavaScript libraries and frameworks. 

**Q**: I can't register as a developer. How do I get my appID?
**A**: Get in touch with us on [Slack](https://join.slack.com/t/libertyequalitydata/shared_invite/zt-ddr4t974-MCzsch4FSeux8DrFQ2atbQ).


# Further Resources

https://dev.prifina.com/  
https://docs.prifina.com/  
https://www.prifina.com/


