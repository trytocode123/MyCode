import { TYPE_LOG } from "../constant.js";
function logger(log, type) {
   console[type] (log);
}

export default logger;