import { query } from "@/app/lib/db";

export async function GET() {
  const rows = await query(`
    SELECT 
      MONTH(created_date) AS bulan, 
      COUNT(*) AS jumlah_laporan 
    FROM layanan_lapor 
    WHERE YEAR(created_date) = YEAR(NOW()) 
    GROUP BY bulan 
    ORDER BY bulan
  `);

  return new Response(JSON.stringify(rows), { status: 200 });
}
