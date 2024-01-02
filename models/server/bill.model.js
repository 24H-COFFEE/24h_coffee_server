const database = require('../../database/database.js');

const getBills = async () => {
  const query = `SELECT * FROM hoadon`;
  return await database.queryDatabase(query, []);
}

const getRevenue = async () => {
  const query = `SELECT
                  months.thang AS thang,
                  YEAR(ngayThanhToan) AS nam,
                  COALESCE(SUM(CASE WHEN hd.trangThaiThanhToan = 'Đã thanh toán' THEN hd.thanhTien ELSE 0 END), 0) AS doanhThu
                FROM
                  (
                    SELECT 1 AS thang UNION ALL
                    SELECT 2 UNION ALL
                    SELECT 3 UNION ALL
                    SELECT 4 UNION ALL
                    SELECT 5 UNION ALL
                    SELECT 6 UNION ALL
                    SELECT 7 UNION ALL
                    SELECT 8 UNION ALL
                    SELECT 9 UNION ALL
                    SELECT 10 UNION ALL
                    SELECT 11 UNION ALL
                    SELECT 12
                  ) AS months
                LEFT JOIN hoadon hd ON MONTH(hd.ngayThanhToan) = months.thang
                GROUP BY
                nam,
                  months.thang
                ORDER BY
                nam,
                  months.thang`;
  return await database.queryDatabase(query, []);
}

module.exports = {
  getBills,
  getRevenue
}