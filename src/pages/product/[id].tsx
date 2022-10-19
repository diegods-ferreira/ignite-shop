import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();

  return (
    <h1>Product: {JSON.stringify(router.query)}</h1>
  );
}