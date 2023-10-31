export async function getHomeProducts ( ) {
    try {        
        const res   = await fetch('./src/assets/data/posts.json');
        const posts = await res.json();
        return { posts: posts }
    } catch (error) {
        console.log(error)
    }
}



export async function getProduct ( {params} ){
    try {        
        const res   =   await fetch(`./../src/assets/data/${params.id}.json`);
        const post  =   await res.json();
        return { post: post }
    } catch (error) {
        console.log(error)
    }
}