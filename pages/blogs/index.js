import { Layout } from "../../components/Layout";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";

export default function BlogList(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const blogsList = data.blogConnection.edges;
  return (
    <Layout>
      <h1>Posts</h1>
      <div>
        {blogsList.map((blog) => (
          <div key={blog.node.id}>
            <Link href={`/blogs/${blog.node._sys.filename}`}>
              <a>{blog.node._sys.filename}</a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.blogConnection();

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
