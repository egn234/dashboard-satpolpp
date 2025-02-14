import { query } from "@/app/lib/db";

export async function GET() {
  try {
    // Query ke database
    const rows = await query(`
      SELECT 
        ROUND(latitude, 3) as lat_group, 
        ROUND(longitude, 3) as lon_group, 
        COUNT(*) as count 
      FROM layanan_lapor
      WHERE created_date >= NOW() - INTERVAL 7 DAY
      GROUP BY lat_group, lon_group
    `);

    // Normalisasi intensitas ke rentang 0 - 1
    const maxCount = Math.max(...rows.map((row) => row.count), 1);

    // Konversi hasil query ke format heatmap (Leaflet)
    const heatmapData = rows.map((row) => [
      parseFloat(row.lat_group),
      parseFloat(row.lon_group),
      row.count / maxCount,
    ]);

    return new Response(JSON.stringify(heatmapData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching heatmap data:", error);
    return new Response(
      JSON.stringify({ message: "Error fetching data", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
