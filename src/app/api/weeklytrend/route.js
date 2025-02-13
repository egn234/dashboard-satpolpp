import { query } from "@/app/lib/db";

export async function GET() {
  const data = await query(
    `SELECT DATE(created_date) AS tanggal, COUNT(id_lapor) AS total_aduan
      FROM layanan_lapor
      WHERE created_date >= CURDATE() - INTERVAL 6 DAY
      GROUP BY DATE(created_date)
      ORDER BY tanggal ASC`
  );

  const formattedResult = data.map(row => ({
    tanggal: row.tanggal.toISOString().split('T')[0],
    total_aduan: row.total_aduan 
  }));

  return new Response(JSON.stringify(formattedResult), { status: 200 });
}