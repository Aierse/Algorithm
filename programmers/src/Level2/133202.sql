SELECT
    MCDP_CD,
    COUNT(*)
FROM
    APPOINTMENT
WHERE
    DATE_FORMAT(APNT_YMD, '%Y-%m-%D') LIKE '2022-05-%'
GROUP BY MCDP_CD
ORDER BY
    COUNT(APNT_NO) ASC,
    MCDP_CD ASC