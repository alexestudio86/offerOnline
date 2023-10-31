import { useLoaderData } from "react-router-dom";
import { NavSecondary } from "./NavSecondary";

export function Product () {

    const { post } = useLoaderData();

    return (
        <main>
            <h1 className="text text-uppercase fs-1 link-info">{ post.title }</h1>
            <div className="py-1">
                <div className="border border-2 border-start-0 border-end-0">
                    <NavSecondary elements={
                        {
                            author: post.author,
                            creation: post.creation,
                            labels: post.labels,
                            comments: post.comments
                        }
                    }
                />
                </div>
            </div>
        </main>
    )
}