SELECT COUNT(*)
FROM USER_INFO
WHERE
    joined BETWEEN '2021-01-01' AND '2021-12-31'
    AND age BETWEEN 20 AND 29;