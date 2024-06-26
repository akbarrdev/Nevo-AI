# Nevo-AI

Nevo-AI is an advanced AI system powered by LLaMa, developed by Akbarrdev.
This package allows you to send requests to the AI API endpoint that requires an `apikey` and `prompt`.

## Features

- Easy to use
- Uses fetch for HTTP requests

## Installation

You can install this package via npm:

```bash
npm install nevo-ai
```

## Usage

Here is an example of how to use the Nevo-AI package:

```javascript
const nevo = require('nevo-ai');
//or import nevo from 'nevo-ai'

const apiKey = 'YOUR_API_KEY';
const prompt = 'Tell me a joke.';

nevo.ask({ apiKey, prompt })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

### TypeScript

If you are using TypeScript, you can import the module as follows:

```typescript
import nevo from 'nevo-ai';

const apiKey: string = 'YOUR_API_KEY';
const prompt: string = 'Tell me a joke.';

nevo.ask({ apiKey, prompt })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## Contributing

We welcome contributions from everyone. If you would like to contribute, please fork the repository and create a pull request with your changes.

### Contribution Steps

1. Fork this repository
2. Create a new feature branch (`git checkout -b new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin new-feature`)
5. Create a new pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions, please open an issue in this repository or contact me at [WhatsApp](https://wa.me/6282370784874).

## Join Our Communities

- [Join the Akbarrdev WhatsApp channel to get access to other codes and resources.](https://whatsapp.com/channel/0029VaZAopA8fewhXJvqxt18)
- [Join the TeamNevolution WhatsApp group for further discussions and support.](https://chat.whatsapp.com/BtboXzaZAQeHiJ0Epzwn7M)

Feel free to customize this README further to match any additional details or specifications related to your project. Make sure to replace `YOUR_API_KEY` with the actual API key you use, and update the contact email address to your actual email.