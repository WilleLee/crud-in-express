interface Post {
  id: number;
  title: string;
  text: string;
}
type Posts = Post[];
const posts: Posts = [
  {
    id: 1,
    title: "a good cafe",
    text: "I drank a cup of coffee here.",
  },
  {
    id: 2,
    title: "cute shoes",
    text: "I bought a pair of shoes, which is so cute.",
  },
];

export default posts;
