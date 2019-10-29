import Express, {Application} from "express";
import cors from "cors";
import HomeRouter from "./routers/HomeRouter";

export class App {
  private app: Application;

  constructor() {
    this.app = Express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(cors({exposedHeaders: ['Content-Disposition']}));
    this.app.use(Express.json());
  }

  private routes() {
    this.app.use("/", HomeRouter);
  }

  async listen(port: number) {
    this.app.listen(port, () => {
      return Promise.resolve();
    })
  }
}
