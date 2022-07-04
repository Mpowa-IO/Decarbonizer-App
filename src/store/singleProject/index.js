import singleProject from "./reducer";
import singleProjectsaga from "./saga";

export {
  getSingleProject,
  getSingleProjectFailure,
  getSingleProjectSuccess,
} from "./action";

export { singleProjectsaga, singleProject };
