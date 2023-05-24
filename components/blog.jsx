import axios from 'axios';

export async function getStaticProps() {
  try {
    const response = await axios.get('http://localhost:3001/api'); // Replace with your API endpoint URL
    const blogs = response.data.data;
    console.log(data)
    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    return {
      props: {
        blogs: [],
      },
    };
  }
}

export default function Blog({ blogs }) {

    console.log(blogs)
  return (
    <div>
      <h1>Blog</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
