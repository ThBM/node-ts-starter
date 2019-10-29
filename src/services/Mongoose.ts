import Mongoose from "mongoose"
import {config} from "../config";

Mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .catch(e => console.log(e));

export default Mongoose;
