import { query } from "@/app/lib/db";

export async function GET() {
  const rows = await query(`
    SELECT 
      a.name as kategori,
      (
        SELECT count(b.jenis) FROM layanan_lapor b
        WHERE b.jenis = a.id_jenis
      ) AS jumlah
    FROM ref_jenis a
    ORDER BY jumlah DESC
    LIMIT 5
  `);

  return new Response(JSON.stringify(rows), { status:200 });
}