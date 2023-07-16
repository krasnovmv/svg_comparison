import * as svgo from "svgo";

export function optimize(
    input: string,
    name: string,
    config: svgo.Config,
): string {
    return svgo.optimize(input, {
        ...config,
        path: name,
    }).data;
}
