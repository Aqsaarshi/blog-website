type Post = {
    [x: string]: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
    title: string,
    summary: string,
    image: any,
    slug: string,
}