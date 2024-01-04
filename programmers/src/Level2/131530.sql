SELECT
    floor(price / 10000) * 10000 price_group,
    count(product_code) products
FROM product
GROUP BY price_group
ORDER BY price_group