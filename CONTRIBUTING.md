# Contributing to EUDI-DOME-WALLET

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

* Reporting a bug
* Discussing the current state of the code
* Submitting a fix
* Proposing new features
* Becoming a maintainer

## We Develop with GitHub

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## We Use GitHub Flow, So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code follows the Kotlin style guide.
6. Issue that pull request!

## Any Contributions You Make Will Be Under the Apache 2.0 License

In short, when you submit code changes, your submissions are understood to be under the same [Apache 2.0 License](LICENSE) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report Bugs Using GitHub's Issues

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/DOME-Marketplace/eudi-dome-wallet/issues); it's that easy!

## Write Bug Reports With Detail, Background, and Sample Code

**Great Bug Reports** tend to have:

* A quick summary and/or background
* Steps to reproduce
  * Be specific!
  * Give sample code if you can.
* What you expected would happen
* What actually happens
* Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People love thorough bug reports. I love thorough bug reports.

**Example bug report:**

> **Quick summary:** App crashes when scanning QR code with invalid credential format
>
> **Steps to reproduce:**
> 1. Open the app
> 2. Tap "Scan QR Code"
> 3. Scan a QR code with malformed JSON data
>
> **Expected:** The app should show an error message "Invalid credential format"
>
> **Actual:** The app crashes with a NullPointerException
>
> **Notes:** This happens on Android 14, Samsung Galaxy S21. Logcat shows the crash occurs in HomeActivity.kt line 45.

## Use a Consistent Coding Style

This project follows the [Android Kotlin Style Guide](https://developer.android.com/kotlin/style-guide).

Key points:
* 4 spaces for indentation rather than tabs
* Use camelCase for variable and function names
* Use PascalCase for class names
* Maximum line length of 100 characters
* Follow MVVM architecture pattern

You can check your code style by running Android Studio's code formatter: `Code > Reformat Code` or `Ctrl+Alt+L` (Windows/Linux) / `Cmd+Option+L` (Mac).

## License

By contributing, you agree that your contributions will be licensed under the [Apache 2.0 License](LICENSE).

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/master/CONTRIBUTING.md).