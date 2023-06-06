export async function getHomeProducts ( ) {
    const res   = await fetch('./src/assets/data/post.json');
    const posts = await res.json();
    return { posts: posts }
}