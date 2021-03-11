export async function getHello() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/hello`);
  const json = await res.json();
  return json;
}