import { useEffect } from "react";
import { useRouter } from "next/router";

function Confirmation() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1>Thanks!</h1>
      <p>You will hear from us in 1-2 days.</p>
    </div>
  );
}

export default Confirmation;
