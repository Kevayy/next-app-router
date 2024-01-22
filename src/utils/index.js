import path from "path";
import fs from "fs";

const blogsDir = path.join(process.cwd(), "src", "content", "blogs");
const portfoliosDir = path.join(process.cwd(), "src", "content", "portfolios");

export async function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

export function getBlogs() {
    const blogNames = fs.readdirSync(blogsDir);

    const blogs = blogNames.map(name => {
        const filePath = path.join(blogsDir, name);
        const fileContent = fs.readFileSync(filePath, "utf8");
        return fileContent;
    })

    return blogs;
}
  
export function getPortfolios() {
    const portfolioNames = fs.readdirSync(portfoliosDir);

    const portfolios = portfolioNames.map(name => {
        const filePath = path.join(portfoliosDir, name);
        const fileContent = fs.readFileSync(filePath, "utf8");
        return fileContent;
    })

    return portfolios;
}