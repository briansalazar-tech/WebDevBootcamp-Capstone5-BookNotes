-- Create Table --
CREATE TABLE booknotes (
	id SERIAL NOT NULL,
	title VARCHAR(100),
	olid VARCHAR(20),
	cover_url VARCHAR(70),
    score VARCHAR(2),
	date_read VARCHAR(15),
	summary VARCHAR(1000),
	PRIMARY KEY (id)
);

SELECT *
FROM booknotes;

-- Insert Starting Data --
INSERT INTO booknotes (title, olid, cover_url, score, date_read, summary)
VALUES (
	'The war of the worlds',
	'OL33225306M',
	'https://covers.openlibrary.org/b/olid/OL33225306M-M.jpg',
	'10',
	'2025-01-20',
	'Lorem ipsum dolor sit amet. Ut minus unde et nisi consequatur ex provident aliquam eos numquam quisquam nam enim similique in placeat natus? Est quae voluptatem qui enim optio quo maiores eligendi non eaque voluptatem aut dolore alias et iusto dolores. Aut quis quod a aliquid libero ut deserunt eaque et aliquam accusantium.'
	   );
	   
INSERT INTO booknotes (title, olid, cover_url, score, date_read, summary)
VALUES (
	'Barbarians at the Gate',
	'OL24272655M',
	'https://covers.openlibrary.org/b/olid/OL24272655M-M.jpg',
	'9',
	'2026-03-15',
	'Ea rerum asperiores sit nobis culpa cum consequuntur doloremque ut quisquam consequuntur aut tempora inventore. Et ducimus voluptatibus a sunt officia ea iure sunt ea placeat suscipit ut quaerat laudantium ut vero eaque ex quia eaque. Et ipsa voluptas id dicta quia et iusto voluptatem qui aliquam molestiae qui soluta quia est inventore atque id dolor voluptates.'
	   );
	   
INSERT INTO booknotes (title, olid, cover_url, score, date_read, summary)
VALUES (
	'Julius Ceasar',
	'OL8201309M',
	'https://covers.openlibrary.org/b/olid/OL8201309M-M.jpg',
	'9',
	'2026-03-15',
	'Et inventore vero a suscipit saepe quo dolorem architecto. Ea maiores iure eos ullam eius ut quia eveniet in laboriosam illo aut eaque enim qui unde enim. Aut labore cupiditate sit neque vitae eum iusto enim et quasi ipsam et suscipit modi. Sit ipsa deserunt ex quasi quaerat quo cumque saepe a impedit rerum a sunt iste et facilis voluptatum eum voluptatibus odio.'
	   );

SELECT *
FROM booknotes;