import { type User } from "@/db/Models/User";

const getUserTitle = (obj?: User): string =>
  obj ? obj.name ?? obj.email ?? obj.uid ?? obj._id : "[Deleted User]";

export default getUserTitle;
