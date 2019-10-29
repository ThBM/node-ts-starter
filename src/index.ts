import {App} from "./App";
import {config} from "./config";

(async function() {
  const app = new App();
  app.listen(config.port)
    .then(() => console.log(`Server is running on port ${config.port}.`));
})();
