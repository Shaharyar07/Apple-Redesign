export const fetchCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`);
  const categories = await res.json();
  console.log("====================================");
  console.log(categories);
  console.log("====================================");
};
