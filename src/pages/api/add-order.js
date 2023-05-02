export default async function handler(req, res) {
  const response = await fetch(
    "https://vziisekssxtizavakpkw.supabase.co/rest/v1/webshop_order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.SUPABASE_KEY,
        Prefer: "return=representation",
      },
      body: JSON.stringify(req.body),
    }
  ).then((res) => res.json());
  // res.redirect(307, "/");
  res.status(200).json({ response });
}
