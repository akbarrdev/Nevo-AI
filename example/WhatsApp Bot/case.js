const nevo = require("nevo-ai");
// or import nevo from "nevo-ai";

switch (command) {
    // just insert to your main.js
  case "ai":
    {
      //if (!isCreator) m.reply(mess.devcom);
      const response = await nevo.ask({ apiKey: "YOUR_NEVO_API_KEY", text });
      m.reply(response);
    }
    break;

  default:
    break;
}
