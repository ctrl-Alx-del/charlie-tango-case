import { useEffect } from "react";
import { useRouter } from "next/router";

function Confirmation() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f8f8f8",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    message: {
      fontSize: "1.2rem",
      color: "#666",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Thanks!</h1>
      <p style={styles.message}>You will hear from us in 1-2 days.</p>
    </div>
  );
}

export default Confirmation;
