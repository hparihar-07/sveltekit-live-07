import { sql } from "@vercel/postgres";

export async function load({ params, locals }) {
  return {
    names: await sql`SELECT * from sveltekit-live-07-postgres where user_id='${locals.user}'`
  }
}
