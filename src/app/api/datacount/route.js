import { query } from "@/app/lib/db";

async function getData (status) {
  const [data1] = await query(
    `SELECT count(id_lapor) AS total FROM layanan_lapor
      WHERE status = ?
      AND DATE(created_date) = CURDATE()`,
    [status]
  );

  const [data2] = await query(
    `SELECT count(id_lapor) AS totalLastWeek FROM layanan_lapor
      WHERE status = ?
      AND WEEKDAY(created_date) = WEEKDAY(CURDATE())
      AND DATE(created_date) = DATE(NOW() - INTERVAL 7 DAY)`,
    [status]
  );

  const total = data1.total;
  const totalLastWeek = data2.totalLastWeek;
  const differencePercentage = totalLastWeek !== 0 ? ((total - totalLastWeek) / totalLastWeek) * 100 : 0;
  return {total, totalLastWeek, differencePercentage};
}

export async function GET () {
  const [pending, processing, done] = await Promise.all([
    getData(0),
    getData(1),
    getData(2),
  ]);

  return new Response(JSON.stringify({ pending, processing, done }), { status: 200 });
}
