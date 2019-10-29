import {Request, Response} from "express";

export class HomeController {

  static async home(req: Request, res: Response) {
    return res.send("Hello world! This is home controller.");
  }

}
