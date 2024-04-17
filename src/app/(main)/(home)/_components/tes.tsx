// pages/[id].js
import { data } from '../data';

export async function getStaticPaths() {
  const paths = Object.keys(data).map(id => ({
    params: { id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const pageData = data[id];

  return {
    props: {
      pageData,
    },
  };
}

export default function Page({ pageData }) {
  return (
    <div>
      <h1>{pageData.title}</h1>
      <p>{pageData.content}</p>
    </div>
  );
}
