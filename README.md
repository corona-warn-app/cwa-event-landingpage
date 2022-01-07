<p align="center">
 <a href="https://e.coronawarn.app/en/"><img src="https://raw.githubusercontent.com/corona-warn-app/cwa-documentation/master/images/CWA_title.png" width="400"></a>
</p>

<hr />

<p align="center">
    <a href="#about-this-repository">About this Repository</a> •
    <a href="#development">Development</a> •
    <a href="#documentation">Documentation</a> •
    <a href="#support-and-feedback">Support and Feedback</a> •
    <a href="#how-to-contribute">How to contribute</a> •
    <a href="#licensing">Licensing</a> •
    <a href="https://e.coronawarn.app/en/">Event landing page Website</a> •
    <a href="https://e.coronawarn.app/en/">Rapid antigen test landing page Website</a>
</p>
<hr />

# Corona-Warn-App: Landing page

## About this Repository

This repository contains the source files of the official Corona-Warn-App landing page as it is available at [e.coronawarn.app](https://e.coronawarn.app) (for event-registration) or at [s.coronawarn.app](https://s.coronawarn.app) (for rapid antigen tests). The page opens for first-time users who have not installed the CWA app after scanning a check-in QR code or a QR code for a rapid antigen test result with a native camera app. The page also opens for users who clicked a link on an external website and the browser does not redirect to the CWA. This might be due to preference settings of the browser app and/or OS settings.
For information about the project, please see our [documentation repository](https://github.com/corona-warn-app/cwa-documentation).

## Development

### Requirements

You need the LTS version of [Node.js](https://nodejs.org/en/) (which includes npm) to build the website. Optionally, you need an HTTP Server such as [http-server](https://github.com/http-party/http-server) to run and test the deployment of the website locally.

### Getting started

Clone the repository and ensure to have all requirements installed. To build the website, switch to the `cwa-event-landingpage` base directory and execute the commands

```bash
npm install
npm run build
```

After a successful build, you'll have a new folder `public` in the repository's base directory. It contains the generated files for the complete website.

To test the generated content, simply execute the command

```bash
npm start
```

It will automatically use `public` as base directory and watch for file changes. Go to `localhost:8000` to view the website.

### Updating the landing page

Any direct commits and merged pull requests will automatically trigger follow-up actions to build and deploy the changes to [e.coronawarn.app](https://e.coronawarn.app) and [s.coronawarn.app](https://s.coronawarn.app). The respective [GitHub Actions](https://github.com/features/actions) are available in the [.github/workflows](.github/workflows) directory of this repository.

## Documentation

The full documentation for the Corona-Warn-App can be found in the [cwa-documentation](https://github.com/corona-warn-app/cwa-documentation) repository. The documentation repository contains technical documents, architecture information, and white papers related to this implementation.

## Support and Feedback

The following channels are available for discussions, feedback, and support requests:

| Type                     | Channel                                                |
| ------------------------ | ------------------------------------------------------ |
| **General discussion, issues, bugs**   | <a href="https://github.com/corona-warn-app/cwa-event-landingpage/issues/new/choose" title="General Discussion"><img src="https://img.shields.io/github/issues/corona-warn-app/cwa-event-landingpage/question.svg?style=flat-square"></a> </a>   |
| **Other requests**    | <a href="mailto:corona-warn-app.opensource@sap.com" title="Email CWA Team"><img src="https://img.shields.io/badge/email-CWA%20team-green?logo=mail.ru&style=flat-square&logoColor=white"></a> |

## How to contribute

The German government has asked SAP and Deutsche Telekom AG to develop the Corona-Warn-App for Germany as open source software. Deutsche Telekom is providing the network and mobile technology and will operate and run the backend for the app in a safe, scalable and stable manner. SAP is responsible for the app development, its framework and the underlying platform. Therefore, development teams of SAP and Deutsche Telekom are contributing to this project. At the same time our commitment to open source means that we are enabling -in fact encouraging- all interested parties to contribute and become part of its developer community.

For more information about how to contribute, the project structure, as well as additional contribution information, see our [Contribution Guidelines](./CONTRIBUTING.md). By participating in this project, you agree to abide by its [Code of Conduct](./CODE_OF_CONDUCT.md) at all times.

## Repositories

A list of all public repositories from the Corona-Warn-App can be found [here](https://github.com/corona-warn-app/cwa-documentation/blob/master/README.md#repositories).

## Licensing

Copyright (c) 2020-2021 Deutsche Telekom AG and SAP SE or an SAP affiliate company.

Licensed under the **Apache License, Version 2.0** (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the [LICENSE](./LICENSE) for the specific language governing permissions and limitations under the License.

The "Corona-Warn-App" logo is a registered trademark of The Press and Information Office of the Federal Government. For more information please see [bundesregierung.de](https://www.bundesregierung.de/breg-en/federal-government/federal-press-office).
