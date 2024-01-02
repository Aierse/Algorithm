SELECT
    b.BOOK_ID,
    a.AUTHOR_NAME,
    DATE_FORMAT(b.PUBLISHED_DATE, '%Y-%m-%d') as PUBLISHED_DATE
from BOOK as b
inner join AUTHOR as a
where b.AUTHOR_ID = a.AUTHOR_ID and b.CATEGORY = '경제'
order by b.PUBLISHED_DATE asc