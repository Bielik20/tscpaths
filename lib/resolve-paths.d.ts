export interface IOptions {
    project?: string;
    src?: string;
    out?: string;
}
export declare function resolvePaths({ project, src, out }: IOptions): void;
