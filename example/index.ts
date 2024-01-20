import { born } from "../src";
import { TopicStruct } from "./event.type";

const fireFly = born<TopicStruct>();
const a = fireFly.glow("SHOW", (data) => {
  console.log(data.body.name);
});
fireFly.fly("SHOW", { name: "uday" });
fireFly.reborn();
fireFly.fly("SHOW", { name: "uday" });
