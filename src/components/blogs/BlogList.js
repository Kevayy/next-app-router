import { getBlogs } from "@/utils/fetch";
import Image from "next/image";

export async function BlogList() {
    const {data: blogs} = await getBlogs();

    return (
        <>
            <div className="content-section-title">Blogs</div>
            <div className="content-list">
                { blogs.map(blog =>
                    <div className="content-item" key={blog.id}>
                        <div className="content-item__image-container">
                            <Image src={blog.coverImage} objectFit="cover" fill={true} sizes="(max-width: 768px)" alt={blog.title} />
                        </div>
                        <div className="content-item__header">
                            <div>{blog.title}</div>
                            <div>{blog.description}</div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}