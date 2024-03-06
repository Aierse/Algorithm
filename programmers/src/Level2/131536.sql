
SELECT
    USER_ID,
    PRODUCT_ID
FROM ONLINE_SALE
GROUP BY USER_ID, PRODUCT_ID
HAVING count(PRODUCT_ID) >= 2
ORDER BY 1 ASC , 2 DESC