This README is a work-in-progress. Please check the issues to see if something has not already been flagged for review.

# Quickstart

See [`QUICKSTART.md`](./QUICKSTART.md).

# Getting Started

The Prifina app is a container application and this starter repository helps you develop apps within that platform. As a third-party developer, you can download Prifina's pre-built libraries, assets, and components to then design and craft your own application to be hosted on Prifina's platform.

*Warning:* Since our starter app is already built on React, there is no need to run `create-react-app`.

# How Prifina Works

As a third-party developer, you can design and create React applications that will be hosted on our user-held data platform which runs users' personal data clouds (hosted on AWS). In order for your app to interface with users' personal data, you'll want to use either [props](https://reactjs.org/docs/components-and-props.html) or [context providers](https://reactjs.org/docs/context.html).

In order to publish your app on our platform, we ask that you provide a [manifest](https://web.dev/add-manifest/) file that contains an archive of your build deployment package. Our Prifina platform team will review it for approval.

The `manifest.js` file should have a Prifina `appID` field. Currently, registration for an `appID` can be requested in our public [Slack](https://join.slack.com/t/libertyequalitydata/shared_invite/zt-ddr4t974-MCzsch4FSeux8DrFQ2atbQ) workspace.

## Building Your Application

An easy way to start building your application is to fork the relevant Prifina [repository](https://github.com/prifina). You can also use open-source components and assets located in our [Blend Design System](https://github.com/prifina/blend-ui) library or [Storybook](http://alpha.blend-ui.prifina.com/). You do not need to use these resources, but they are designed for learn best by building.

If you are wondering what data is available to build your application on, you can download the type of data that the users have, from looking at the [Prifina Your Data](https://www.prifina.com/your-data.html) page. We recommend that you simply download your own data from any of these platforms or identify any other sources that are most interesting to you.

### Application Design Considerations

New kinds of applications can be built by mixing data from different data sources and/or combining them with public data sources: An example would be to combine a user's personal streaming data with publicly available movie/television review data.

In addition to data that your application is using, you might consider what sort of new data your application generates for users: This in and of itself becomes a new data source for other applications.

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
To get your application published in our App Market, you will need to supply the Prifina team a .Zip build deployment package with the relevant [manifest](https://web.dev/add-manifest/) file, to be reviewed by the Prifina App market team.

# Build with Starter

Build a Prifina app with the Prifina Starter and utilities. 

# Test with Launcher

Test locally or use the [Prifina launcher](https://github.com/prifina/prifina-widgets-launcher) to test your code in the Prifina platform.

# FAQ
**Q**: Do I have to use this starter repo to develop for Prifina?  
**A**: If you would prefer to develop from scratch, we welcome you to do so.

**Q**: Do you support any JavaScript frameworks aside from React?  
**A**: We will gradually expand our support for other JavaScript libraries and frameworks. 

**Q**: I can't register as a developer. How do I get my appID?  
**A**: Get in touch with us on [Slack](https://join.slack.com/t/libertyequalitydata/shared_invite/zt-ddr4t974-MCzsch4FSeux8DrFQ2atbQ).

# Contact Prifina

To reach us, you can join our [Slack](https://join.slack.com/t/prifinadev/shared_invite/zt-8d8ynow6-UFwwICFyYmgT8L~juBsBUw) or email us @ developer@prifina.com!

# Further Resources

https://dev.prifina.com/  
https://docs.prifina.com/  
https://www.prifina.com/
