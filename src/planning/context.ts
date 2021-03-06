import { interfaces } from "../interfaces/interfaces";
import { guid } from "../utils/guid";

class Context implements interfaces.Context {

    public guid: string;
    public container: interfaces.Container;
    public plan: interfaces.Plan;
    public currentRequest: interfaces.Request;

    public constructor(
        container: interfaces.Container) {
        this.guid = guid();
        this.container = container;
    }

    public addPlan(plan: interfaces.Plan) {
        this.plan = plan;
    }

    public setCurrentRequest(currentRequest: interfaces.Request) {
        this.currentRequest = currentRequest;
    }

}

export { Context };
